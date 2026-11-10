import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";
import { btnSecondary } from "../ui";

export function Estimate() {
  usePageTitle("Estimate preview");

  return (
    <>
      <PageHeader
        title="Estimate preview"
        lede="Add a sample scope to a request list that stays in this browser. Nothing is submitted. Prices and stock are not verified."
      />
      <div className="mx-auto max-w-page px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mt-6">
          <Link to="/estimate/cart" className={btnSecondary}>
            Open request list
          </Link>
        </p>
      </div>
    </>
  );
}
