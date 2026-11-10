import { Link, useParams } from "react-router-dom";
import { AddToListButton } from "../components/AddToListButton";
import { CallLink } from "../components/CallLink";
import { PartNumberLine, UnverifiedLine } from "../components/UnverifiedLine";
import { presentProduct, productBySlug, products } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";
import { NotFound } from "./NotFound";

export function ProductDetail() {
  const { slug } = useParams();
  const product = presentProduct(productBySlug(slug));
  usePageTitle(product ? product.name : "Sample not found");

  if (!product?.photo || !product.category) return <NotFound />;

  const others = products.filter((item) => item.id !== product.id);

  return (
    <article className="mx-auto grid max-w-page gap-8 px-4 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="bg-stone/80 p-2">
        <img
          src={product.photo.src}
          alt={product.photo.alt}
          width={product.photo.width}
          height={product.photo.height}
          className="w-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-slate">
          <Link className="underline" to="/work">
            Work
          </Link>
          {" / "}
          <Link className="underline" to={product.category.path}>
            {product.category.name}
          </Link>
        </p>
        <h1 className="mt-3 text-3xl leading-tight">{product.name}</h1>
        <p className="mt-4">{product.detail}</p>
        <div className="mt-4 space-y-1">
          <PartNumberLine partNumber={product.partNumber} />
          <UnverifiedLine />
        </div>
        <p className="mt-4 text-sm">
          <a className="underline" href={product.photo.sourceUrl} rel="noreferrer">
            Source photo
          </a>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <AddToListButton productId={product.id} />
          <CallLink />
        </div>
        <p className="mt-4 text-sm text-slate">
          For a quote, call the shop. This preview does not send a message or place an order.
        </p>
        <section className="mt-8" aria-labelledby="other-samples">
          <h2 id="other-samples" className="text-lg">
            Other samples
          </h2>
          <ul className="mt-2 space-y-2">
            {others.map((item) => (
              <li key={item.id}>
                <Link className="underline" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
