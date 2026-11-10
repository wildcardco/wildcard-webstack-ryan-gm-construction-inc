import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { getProductById, previewQuantityCap, type Product } from "../data/catalog";

const STORAGE_KEY = "gmc-request-list-v1";

type StoredLine = {
  id: string;
  quantity: number;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartValue = {
  lines: CartLine[];
  count: number;
  notice: string;
  add: (id: string, quantity?: number) => void;
  remove: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);

function readStored(): StoredLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const lines: StoredLine[] = [];
    for (const entry of parsed) {
      if (!entry || typeof entry !== "object") continue;
      const id = "id" in entry ? entry.id : undefined;
      const quantity = "quantity" in entry ? entry.quantity : undefined;
      if (typeof id !== "string" || typeof quantity !== "number") continue;
      if (!getProductById(id)) continue;
      const qty = Math.floor(quantity);
      if (qty < 1) continue;
      lines.push({ id, quantity: Math.min(previewQuantityCap, qty) });
    }
    return lines;
  } catch {
    return [];
  }
}

function writeStored(lines: StoredLine[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* Private mode can refuse storage. The list still works in memory. */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredLine[]>(readStored);
  const [notice, setNotice] = useState("");
  const storedRef = useRef(stored);
  storedRef.current = stored;

  useEffect(() => {
    writeStored(stored);
  }, [stored]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setStored(readStored());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const lines = useMemo(() => {
    const detailed: CartLine[] = [];
    for (const line of stored) {
      const product = getProductById(line.id);
      if (product) detailed.push({ product, quantity: line.quantity });
    }
    return detailed;
  }, [stored]);

  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  );

  const add = useCallback((id: string, quantity = 1) => {
    const product = getProductById(id);
    if (!product) return;
    const amount = Math.min(previewQuantityCap, Math.max(1, Math.floor(quantity)));
    const existingQty = storedRef.current.find((line) => line.id === id)?.quantity ?? 0;
    const nextQty = Math.min(previewQuantityCap, existingQty + amount);
    setStored((current) => {
      const existing = current.find((line) => line.id === id);
      const qty = Math.min(previewQuantityCap, (existing?.quantity ?? 0) + amount);
      if (!existing) return [...current, { id, quantity: qty }];
      return current.map((line) => (line.id === id ? { id, quantity: qty } : line));
    });
    setNotice(
      existingQty > 0 && existingQty === nextQty
        ? `${product.name} stays at ${nextQty}. ${previewQuantityCap} is a preview cap, not a stock count. Price unverified. Stock unverified.`
        : `${product.name} added to the request list. Quantity ${nextQty}. Price unverified. Stock unverified.`,
    );
  }, []);

  const remove = useCallback((id: string) => {
    const product = getProductById(id);
    setStored((current) => current.filter((line) => line.id !== id));
    if (product) setNotice(`${product.name} removed from the request list.`);
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const product = getProductById(id);
    const nextQty = Math.floor(quantity);
    if (nextQty < 1) {
      setStored((current) => current.filter((line) => line.id !== id));
      if (product) setNotice(`${product.name} removed from the request list.`);
      return;
    }
    const capped = Math.min(previewQuantityCap, nextQty);
    setStored((current) =>
      current.some((line) => line.id === id)
        ? current.map((line) => (line.id === id ? { id, quantity: capped } : line))
        : current,
    );
    if (product) {
      setNotice(
        `${product.name} quantity ${capped}. Price unverified. Stock unverified.`,
      );
    }
  }, []);

  const clear = useCallback(() => {
    setStored([]);
    setNotice("Request list cleared in this browser. Nothing was sent.");
  }, []);

  const value = useMemo(
    () => ({ lines, count, notice, add, remove, setQuantity, clear }),
    [lines, count, notice, add, remove, setQuantity, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
