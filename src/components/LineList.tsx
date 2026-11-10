import { Link } from "react-router-dom";
import { priceLabel, stockLabel } from "../data/catalog";
import { useCart, type CartLine } from "../context/CartContext";
import { QuantityField } from "./QuantityField";

export function LineList({ lines, readOnly = false }: { lines: CartLine[]; readOnly?: boolean }) {
  const { setQuantity, remove } = useCart();

  return (
    <ul className="mt-4">
      {lines.map((line) => (
        <li key={line.product.id} className="grid grid-cols-[5.5rem_1fr] gap-3 border-t border-ink/15 py-4">
          <Link to={line.product.path} className="block">
            <img
              src={line.product.image.src}
              alt={line.product.image.alt}
              width={line.product.image.width}
              height={line.product.image.height}
              className="aspect-square w-full object-cover"
            />
          </Link>
          <div>
            <p className="kicker">{line.product.categoryName}</p>
            <h2 className="display mt-1 text-3xl">
              <Link to={line.product.path} className="text-link">
                {line.product.name}
              </Link>
            </h2>
            <p className="mt-2 font-display text-xl uppercase tracking-[0.06em]">{priceLabel}</p>
            <p className="font-display text-xl uppercase tracking-[0.06em] text-slate">{stockLabel}</p>
            {readOnly ? (
              <p className="mt-3 font-display text-2xl">Quantity {line.quantity}</p>
            ) : (
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <QuantityField
                  label={line.product.name}
                  value={line.quantity}
                  onChange={(quantity) => setQuantity(line.product.id, quantity)}
                />
                <button type="button" className="btn-ghost" onClick={() => remove(line.product.id)}>
                  Remove
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
