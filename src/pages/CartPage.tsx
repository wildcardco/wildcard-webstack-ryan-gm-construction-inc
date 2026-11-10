import { Link } from "react-router-dom";
import { LineList } from "../components/LineList";
import { PageHeader } from "../components/PageHeader";
import { TestBanner } from "../components/TestBanner";
import { useCart } from "../context/CartContext";
import { previewQuantityCap } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function CartPage() {
  usePageTitle("Request list · GM Construction Inc.");
  const { lines, count } = useCart();

  return (
    <>
      <PageHeader kicker="Stored in this browser" title="Request list">
        Quantities stay on this device after a reload. Price unverified. Stock unverified. The list is not submitted.
      </PageHeader>
      <div className="mx-auto max-w-[1240px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="ticket p-5 sm:p-8">
          <TestBanner />
          {lines.length === 0 ? (
            <div className="mt-6">
              <p className="text-lg">The request list is empty.</p>
              <Link to="/estimate" className="btn mt-4">
                Add a sample scope
              </Link>
            </div>
          ) : (
            <>
              <p className="mt-4 font-display text-3xl">
                {count} {count === 1 ? "item" : "items"}
              </p>
              <p className="mt-1">
                Quoted total: not quoted. {previewQuantityCap} is a preview cap, not a stock count.
              </p>
              <LineList lines={lines} />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/estimate/checkout" className="btn">
                  Review test preview
                </Link>
                <Link to="/estimate" className="btn-ghost">
                  Add another sample
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
