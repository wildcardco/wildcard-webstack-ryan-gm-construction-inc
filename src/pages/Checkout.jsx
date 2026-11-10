import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { UnverifiedLine } from "../components/UnverifiedLine";
import { useCart } from "../context/CartContext";
import { usePageTitle } from "../hooks/usePageTitle";
import { btnPrimary, btnSecondary } from "../ui";

export function Checkout() {
  usePageTitle("Test preview");
  const { items, count } = useCart();
  const [reviewed, setReviewed] = useState(false);

  return (
    <>
      <PageHeader
        title="Test preview"
        lede="TEST / NO PAYMENT / NO REAL ORDER. This page reviews the sample list on this device. It does not charge a card, send an email, notify the shop, or place an order."
      />
      <div className="mx-auto max-w-page px-4 py-8">
        <p className="border border-bronze bg-stone/30 p-4 text-sm font-semibold">
          TEST / NO PAYMENT / NO REAL ORDER
        </p>
        <p className="mt-4">
          Items on the list: {count}. Quoted total: Not quoted.
        </p>

        {items.length === 0 ? (
          <p className="mt-6">The request list is empty. There is nothing to review.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="border border-mist p-4">
                <h2 className="text-lg">{item.name}</h2>
                <p className="text-sm">Quantity {item.qty}</p>
                <UnverifiedLine />
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-sm text-slate">
          No payment fields. No name, email, phone, or address is collected here.
        </p>

        <button
          type="button"
          className={`${btnPrimary} mt-6`}
          onClick={() => setReviewed(true)}
        >
          Review test preview
        </button>

        {reviewed ? (
          <p className="mt-4 border border-ink p-4" role="status">
            Reviewed on this device only. No payment was taken. No order was placed.
            No message was sent. Reloading this page clears this note. The request list stays in this browser.
          </p>
        ) : null}

        <p className="mt-6">
          <Link to="/estimate/cart" className={btnSecondary}>
            Back to request list
          </Link>
        </p>
      </div>
    </>
  );
}
