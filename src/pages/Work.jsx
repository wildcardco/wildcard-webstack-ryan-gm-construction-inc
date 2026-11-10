import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ProductCard } from "../components/ProductCard";
import {
  categories,
  categoryById,
  galleryPhotoIds,
  photoById,
  products,
  productsByCategory,
} from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";
import { NotFound } from "./NotFound";

export function Work() {
  const { categoryId } = useParams();
  const category = categoryId ? categoryById(categoryId) : null;
  usePageTitle(category ? category.name : "Work");

  if (categoryId && !category) return <NotFound />;

  const list = category ? productsByCategory(category.id) : products;
  const gallery = category ? [] : galleryPhotoIds.map((id) => photoById(id)).filter(Boolean);

  return (
    <>
      <PageHeader
        title={category ? category.name : "Work"}
        lede={
          category
            ? category.summary
            : "Three photo-backed samples. This is not a full catalog. Price and stock are not verified."
        }
      />
      <div className="mx-auto max-w-page px-4 py-8">
        <nav aria-label="Work categories" className="flex flex-wrap gap-2">
          <Link
            to="/work"
            aria-current={category ? undefined : "page"}
            className="inline-flex min-h-11 items-center border border-ink px-3 text-sm aria-[current=page]:bg-ink aria-[current=page]:text-paper"
          >
            All samples
          </Link>
          {categories.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              aria-current={category?.id === item.id ? "page" : undefined}
              className="inline-flex min-h-11 items-center border border-ink px-3 text-sm aria-[current=page]:bg-ink aria-[current=page]:text-paper"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {gallery.length > 0 ? (
          <section className="mt-12" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-2xl">
              Other project photos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate">
              These photos are not extra catalog items and cannot be added to the request list.
              The fence photo is not a service.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {gallery.map((photo) => (
                <li key={photo.id} className="bg-mist">
                  <figure>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption className="p-3 text-sm">{photo.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
