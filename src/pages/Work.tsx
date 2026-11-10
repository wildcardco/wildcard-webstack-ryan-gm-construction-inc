import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PhotoFrame } from "../components/PhotoFrame";
import { SampleCard } from "../components/SampleCard";
import { categories, gallery, getCategory, products } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";
import { NotFound } from "./NotFound";

export function Work() {
  const { categoryId } = useParams();
  const category = categoryId ? getCategory(categoryId) : undefined;

  usePageTitle(
    categoryId && !category
      ? "Page not found · GM Construction Inc."
      : `${category ? category.name : "Work"} · GM Construction Inc.`,
  );

  if (categoryId && !category) return <NotFound />;

  const list = category ? products.filter((product) => product.categoryId === category.id) : products;

  return (
    <>
      <PageHeader kicker={category ? "Sample category" : "Three photo-backed samples"} title={category ? category.name : "Work"}>
        {category
          ? category.summary
          : "A sample catalog, not a full import. Each scope keeps its source photo. Price unverified. Stock unverified."}
      </PageHeader>
      <div className="relative mx-auto max-w-[1240px] px-4 pb-8 sm:px-6 lg:px-8">
        <nav aria-label="Work categories" className="mb-10 flex flex-wrap gap-2">
          <Link to="/work" aria-current={category ? undefined : "page"} className="btn-ghost aria-[current=page]:bg-bronze aria-[current=page]:text-ink aria-[current=page]:shadow-none">
            All samples
          </Link>
          {categories.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              aria-current={category?.id === item.id ? "page" : undefined}
              className="btn-ghost aria-[current=page]:bg-bronze aria-[current=page]:text-ink aria-[current=page]:shadow-none"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="relative grid gap-16">
          {list.map((product, index) => (
            <div key={product.id} className="grid items-center gap-6 lg:grid-cols-12">
              <div className={index % 2 === 0 ? "lg:col-span-8" : "lg:col-span-7 lg:col-start-6"}>
                <p className="mb-3 font-display text-5xl text-bronze">{String(index + 1).padStart(2, "0")}</p>
                <SampleCard
                  product={product}
                  heading="h2"
                  priority={index === 0}
                  imageClassName={product.id === "deck-stairs" ? "aspect-[4/3]" : "aspect-[4/5]"}
                />
              </div>
            </div>
          ))}
        </div>
        {category ? null : (
          <section className="mt-20" aria-labelledby="other-photos">
            <h2 id="other-photos" className="display text-[clamp(2.6rem,6vw,4.4rem)]">
              Other project photos
            </h2>
            <p className="mt-3 max-w-xl text-stone">
              These photos are not extra catalog items and cannot be added to the request list. The fence photo is not a service.
            </p>
            <ul className="mt-8 grid gap-6 md:grid-cols-12">
              {gallery.map((photo, index) => (
                <li key={photo.id} className={index === 0 ? "md:col-span-7" : "md:col-span-5"}>
                  <PhotoFrame image={photo.image} imgClassName={index % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} />
                  <p className="mt-3 text-sm text-taupe">{photo.caption}</p>
                  {photo.note ? <p className="mt-1 text-sm text-paper">{photo.note}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
