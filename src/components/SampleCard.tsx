import { Link } from "react-router-dom";
import { priceLabel, stockLabel, type Product } from "../data/catalog";
import { AddToList } from "./AddToList";
import { PhotoFrame } from "./PhotoFrame";

type SampleCardProps = {
  product: Product;
  heading?: "h2" | "h3";
  priority?: boolean;
  imageClassName?: string;
};

export function SampleCard({
  product,
  heading = "h3",
  priority = false,
  imageClassName = "aspect-[4/5]",
}: SampleCardProps) {
  const Title = heading;

  return (
    <article className="flex min-w-0 flex-col gap-4">
      <Link to={product.path} className="block">
        <PhotoFrame image={product.image} priority={priority} imgClassName={imageClassName} />
      </Link>
      <div>
        <p>
          <Link to={product.categoryPath} className="kicker">
            {product.categoryName}
          </Link>
        </p>
        <Title className="display mt-2 text-[clamp(2.1rem,4vw,3.4rem)] text-paper">
          <Link to={product.path} className="text-link">
            {product.name}
          </Link>
        </Title>
        <p className="mt-3 max-w-prose text-stone">{product.summary}</p>
        <p className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-paper">{priceLabel}</p>
        <p className="font-display text-2xl uppercase tracking-[0.08em] text-taupe">{stockLabel}</p>
      </div>
      <AddToList productId={product.id} className="w-full sm:w-auto" />
    </article>
  );
}
