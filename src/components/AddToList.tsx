import { useCart } from "../context/CartContext";
import { getProductById } from "../data/catalog";

type AddToListProps = {
  productId: string;
  quantity?: number;
  className?: string;
};

export function AddToList({ productId, quantity = 1, className = "" }: AddToListProps) {
  const { add, lines } = useCart();
  const product = getProductById(productId);
  if (!product) return null;
  const inList = lines.some((line) => line.product.id === productId);
  const label =
    quantity === 1
      ? inList
        ? "Add another to request list"
        : "Add to request list"
      : inList
        ? `Add ${quantity} more to request list`
        : `Add ${quantity} to request list`;

  return (
    <button type="button" className={`btn ${className}`} onClick={() => add(productId, quantity)}>
      {label}
    </button>
  );
}
