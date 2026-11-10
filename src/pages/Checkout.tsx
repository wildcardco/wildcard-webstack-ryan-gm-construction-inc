import { useState } from "react";
import { Link } from "react-router-dom";
import { LineList } from "../components/LineList";
import { PageHeader } from "../components/PageHeader";
import { TestBanner } from "../components/TestBanner";
import { useCart, type CartLine } from "../context/CartContext";
import { priceLabel, stockLabel } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

type ReceiptLine = {
  id: string;
  name: string;
  path: string;
  quantity: number;
};

export function Checkout() {
  usePageTitle("Preview · GM Construction Inc.");
  const { lines } = useCart();
  const [receipt, setReceipt] = useState<ReceiptLine[] | null>(null);

  function confirmPreview() {
    if (lines.length === 0) return;
    setReceipt(
      lines.map((line: CartLine) => ({
        id: line.product.id,
        name: line.product.name,
        path: line.product.path,
        quantity: line.quantity,
      })),
    );
  }

  return (
    <>
      <PageHeader kicker="Nothing is sent" title="Preview">
        This test preview does not charge a card, send an email, collect customer details, or place an order.
      </PageHeader>
      <div className="mx-auto max-w-[860px] px-4 pb-8 sm:px-6">
        <div className="ticket p-5 sm:p-8">
          <TestBanner />
          {receipt ? (
            <div className="mt-6">
              <h2 className="display text-5xl">Local test preview only</h2>
              <p className="mt-3 text-lg">
                Reviewed on this device only. No payment was taken. No email was sent. No order was placed. The request list stays in this browser.
              </p>
              <ul className="mt-5 border-t border-ink/15">
                {receipt.map((line) => (
                  <li key={line.id} className="border-b border-ink/15 py-3">
                    <Link to={line.path} className="text-link font-display text-2xl">
                      {line.name}
                    </Link>
                    <p>
                      Quantity {line.quantity}. {priceLabel}. {stockLabel}.
                    </p>
                  </li>
                ))}
              </ul>
              <Link to="/work" className="btn mt-6">
                Back to samples
              </Link>
            </div>
          ) : lines.length === 0 ? (
            <div className="mt-6">
              <p className="text-lg">The request list is empty. Nothing to preview.</p>
              <Link to="/estimate" className="btn mt-4">
                Add a sample scope
              </Link>
            </div>
          ) : (
            <div className="mt-6">
              <h2 className="display text-4xl">Review the local list</h2>
              <p className="mt-2">
                Confirming writes nothing to a server. {priceLabel}. {stockLabel}. Quoted total: not quoted.
              </p>
              <LineList lines={lines} readOnly />
              <button type="button" className="btn mt-6" onClick={confirmPreview}>
                Record local test preview
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
