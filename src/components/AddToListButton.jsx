import { productById } from "../data/catalog";
import { useCart } from "../context/CartContext";
import { btnPrimary } from "../ui";

export function AddToListButton({ productId }) {
  const { add } = useCart();
  const product = productById(productId);
  if (!product) return null;

  return (
    <button type="button" className={btnPrimary} onClick={() => add(product.id)}>
      Add to request list
    </button>
  );
}
