import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AddToList } from "../components/AddToList";
import { NotFound } from "./NotFound";
import { PhotoFrame } from "../components/PhotoFrame";
import { QuantityField } from "../components/QuantityField";
import { TestBanner } from "../components/TestBanner";
import { otherProducts, priceLabel, stockLabel, getProductBySlug } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [quantity, setQuantity] = useState(1);

  usePageTitle(product ? `${product.name} · GM Construction Inc.` : "Sample not found · GM Construction Inc.");

  if (!product) return <NotFound />;

  const related = otherProducts(product.id);

  return (
    <article className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:-ml-8">
          <PhotoFrame image={product.image} priority imgClassName="aspect-[4/5] w-full" />
        </div>
        <div className="ticket relative z-10 -mt-16 p-6 sm:p-8 lg:col-span-5 lg:-ml-20 lg:mt-20">
          <TestBanner />
          <p className="mt-5 text-sm">
            <Link to="/work" className="text-link">
              Work
            </Link>
            {" / "}
            <Link to={product.categoryPath} className="text-link">
              {product.categoryName}
            </Link>
          </p>
          <h1 className="display mt-2 text-[clamp(2.8rem,5vw,4.4rem)]">{product.name}</h1>
          <p className="mt-4 text-lg leading-relaxed">{product.summary}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5">
            {product.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <dl className="mt-6 grid gap-3 border-t border-ink/15 pt-4">
            <div>
              <dt className="kicker">Part number</dt>
              <dd className="font-display text-3xl uppercase">Not verified</dd>
            </div>
            <div>
              <dt className="kicker">Price</dt>
              <dd className="font-display text-3xl uppercase">{priceLabel}</dd>
            </div>
            <div>
              <dt className="kicker">Stock</dt>
              <dd className="font-display text-3xl uppercase">{stockLabel}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm">
            Adding a scope only updates the request list in this browser. It does not send a message, take payment, or place an order.
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <QuantityField label={product.name} value={quantity} onChange={setQuantity} />
            <AddToList productId={product.id} quantity={quantity} className="w-full sm:w-auto" />
            <Link to="/estimate/cart" className="text-link">
              Open the request list
            </Link>
            <a href={product.image.sourceUrl} className="text-link">
              Source photo
            </a>
          </div>
        </div>
      </div>

      <aside className="mx-auto mt-16 max-w-[1240px]">
        <h2 className="display text-[clamp(2.4rem,5vw,3.6rem)] text-paper">Other samples</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {related.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="group grid grid-cols-[7rem_1fr] gap-4">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="aspect-square w-full object-cover"
                />
                <span>
                  <span className="kicker">{item.categoryName}</span>
                  <span className="mt-1 block font-display text-3xl leading-none text-paper group-hover:text-bronze">
                    {item.name}
                  </span>
                  <span className="mt-2 block text-taupe">
                    {priceLabel}. {stockLabel}.
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/work" className="btn mt-8">
          Back to work
        </Link>
      </aside>
    </article>
  );
}
