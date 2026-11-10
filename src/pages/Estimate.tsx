import { useState } from "react";
import { Link } from "react-router-dom";
import { AddToList } from "../components/AddToList";
import { PageHeader } from "../components/PageHeader";
import { QuantityField } from "../components/QuantityField";
import { TestBanner } from "../components/TestBanner";
import { business, priceLabel, products, stockLabel } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

function ScopeAdder({ productId, name }: { productId: string; name: string }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col items-start gap-3">
      <QuantityField label={name} value={quantity} onChange={setQuantity} />
      <AddToList productId={productId} quantity={quantity} className="w-full sm:w-auto" />
    </div>
  );
}

export function Estimate() {
  usePageTitle("Estimate · GM Construction Inc.");

  return (
    <>
      <PageHeader kicker="Browser only" title="Estimate">
        Add a sample scope to a request list that stays in this browser. It does not send a message or place an order. Call{" "}
        <a href={business.phoneTel} className="text-link text-paper">
          {business.phoneDisplay}
        </a>
        .
      </PageHeader>
      <div className="mx-auto max-w-[1240px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="ticket p-5 sm:p-8">
          <TestBanner />
          <p className="mt-4 max-w-2xl">
            Three supplied samples. Price unverified. Stock unverified. No card, no email, no callback form.
          </p>
          <ol className="mt-6">
            {products.map((product, index) => (
              <li key={product.id} className="grid gap-4 border-t border-ink/15 py-6 md:grid-cols-[7.5rem_1fr_auto] md:items-center">
                <Link to={product.path}>
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    className="aspect-square w-full object-cover md:w-[7.5rem]"
                  />
                </Link>
                <div>
                  <p className="font-display text-3xl text-bronze">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="display text-4xl">
                    <Link to={product.path} className="text-link">
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-prose">{product.summary}</p>
                  <p className="mt-2 font-display text-xl uppercase">{priceLabel}</p>
                  <p className="font-display text-xl uppercase text-slate">{stockLabel}</p>
                </div>
                <ScopeAdder productId={product.id} name={product.name} />
              </li>
            ))}
          </ol>
          <Link to="/estimate/cart" className="btn mt-2">
            Open the request list
          </Link>
        </div>
      </div>
    </>
  );
}
