import { Link } from "react-router-dom";
import { presentProduct } from "../data/catalog";
import { btnSecondary } from "../ui";
import { AddToListButton } from "./AddToListButton";
import { UnverifiedLine } from "./UnverifiedLine";

export function ProductCard({ product }) {
  const item = presentProduct(product);
  if (!item?.photo) return null;
  const headingId = `product-${item.id}`;

  return (
    <article aria-labelledby={headingId} className="flex flex-col bg-mist">
      <Link to={item.path} className="block">
        <img
          src={item.photo.src}
          alt={item.photo.alt}
          width={item.photo.width}
          height={item.photo.height}
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-sm text-slate">{item.category?.name}</p>
        <h2 id={headingId} className="text-xl">
          <Link to={item.path}>{item.name}</Link>
        </h2>
        <p className="text-sm">{item.summary}</p>
        <UnverifiedLine />
        <div className="mt-auto flex flex-wrap gap-2">
          <Link to={item.path} className={btnSecondary}>
            View sample
          </Link>
          <AddToListButton productId={item.id} />
        </div>
      </div>
    </article>
  );
}
