import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PartNumberLine, UnverifiedLine } from "../components/UnverifiedLine";
import { useCart } from "../context/CartContext";
import { usePageTitle } from "../hooks/usePageTitle";
import { btnPrimary, btnSecondary } from "../ui";

export function CartPage() {
  usePageTitle("Request list");
  const { items, count, remove, setQty, maxQty } = useCart();

  return (
    <>
      <PageHeader
        title="Request list"
        lede="Stored in this browser only. Each line stays unpriced. Removing a line or changing a quantity does not contact the shop."
      />
      <div className="mx-auto max-w-page px-4 py-8">
        <p>
          Items: <span data-request-count={count}>{count}</span>
        </p>
        <p className="mt-2 text-sm text-slate">
          Quoted total: Not quoted. Prices are not verified, so this list does not add tax, discounts, or shipping.
        </p>

        {items.length === 0 ? (
          <div className="mt-8">
            <p>No sample scopes on the request list.</p>
            <p className="mt-4 flex flex-wrap gap-3">
              <Link to="/work" className={btnPrimary}>
                Browse work
              </Link>
              <Link to="/estimate" className={btnSecondary}>
                Estimate preview
              </Link>
            </p>
          </div>
        ) : (
          <ul className="mt-8 space-y-6">
            {items.map((item) => (
              <li key={item.id} className="grid gap-4 border border-mist p-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                {item.photo ? (
                  <img
                    src={item.photo.src}
                    alt=""
                    width={item.photo.width}
                    height={item.photo.height}
                    className="aspect-square w-full object-cover"
                  />
                ) : null}
                <div>
                  <h2 className="text-xl">
                    <Link className="underline" to={item.path}>
                      {item.name}
                    </Link>
                  </h2>
                  <PartNumberLine partNumber={item.partNumber} />
                  <UnverifiedLine />
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      className={btnSecondary}
                      aria-label={`Decrease quantity of ${item.name}`}
                      disabled={item.qty <= 1}
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      Decrease
                    </button>
                    <p>
                      Quantity{" "}
                      <span data-qty={item.qty}>{item.qty}</span>
                    </p>
                    <button
                      type="button"
                      className={btnSecondary}
                      aria-label={`Increase quantity of ${item.name}`}
                      disabled={item.qty >= maxQty}
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      Increase
                    </button>
                    <button
                      type="button"
                      className={btnSecondary}
                      onClick={() => remove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-slate">
                    Quantity cap of {maxQty} is a preview limit, not a stock count.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8">
          <Link to="/estimate/checkout" className={btnPrimary}>
            Continue to test preview
          </Link>
        </p>
      </div>
    </>
  );
}
