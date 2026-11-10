import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { presentProduct, productById } from "../data/catalog";

const STORAGE_KEY = "gm-construction-request-list";
const MAX_QTY = 9;

const CartContext = createContext(null);

function sanitize(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = new Set();
  const lines = [];
  for (const entry of raw) {
    if (!entry || typeof entry.id !== "string" || seen.has(entry.id)) continue;
    if (!productById(entry.id)) continue;
    const qty = Number(entry.qty);
    if (!Number.isInteger(qty) || qty < 1) continue;
    seen.add(entry.id);
    lines.push({ id: entry.id, qty: Math.min(qty, MAX_QTY) });
  }
  return lines;
}

function readStorage() {
  try {
    return sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readStorage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // The preview still works for this page view if storage is blocked.
    }
  }, [lines]);

  const api = useMemo(() => {
    const items = lines
      .map((line) => {
        const product = presentProduct(productById(line.id));
        if (!product) return null;
        return { ...product, qty: line.qty };
      })
      .filter(Boolean);

    const count = items.reduce((sum, item) => sum + item.qty, 0);

    function add(id) {
      if (!productById(id)) return;
      setLines((current) => {
        const existing = current.find((line) => line.id === id);
        if (!existing) return [...current, { id, qty: 1 }];
        if (existing.qty >= MAX_QTY) return current;
        return current.map((line) =>
          line.id === id ? { ...line, qty: line.qty + 1 } : line,
        );
      });
    }

    function remove(id) {
      setLines((current) => current.filter((line) => line.id !== id));
    }

    function setQty(id, qty) {
      const next = Number(qty);
      if (!Number.isInteger(next) || next < 1) {
        remove(id);
        return;
      }
      setLines((current) =>
        current.map((line) =>
          line.id === id ? { ...line, qty: Math.min(next, MAX_QTY) } : line,
        ),
      );
    }

    return { lines, items, count, add, remove, setQty, maxQty: MAX_QTY };
  }, [lines]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart must be used within CartProvider");
  }
  return value;
}
