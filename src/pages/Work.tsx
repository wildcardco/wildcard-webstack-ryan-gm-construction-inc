import { PageHeader } from "../components/PageHeader";
import { SampleCard } from "../components/SampleCard";
import { products } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Work() {
  usePageTitle("Work · GM Construction Inc.");

  return (
    <>
      <PageHeader kicker="Three photo-backed samples" title="Work">
        A sample catalog, not a full import. Each scope keeps its source photo. Price unverified. Stock unverified.
      </PageHeader>
      <div className="relative mx-auto max-w-[1240px] px-4 pb-8 sm:px-6 lg:px-8">
        <p aria-hidden="true" className="pointer-events-none absolute -top-6 right-2 font-display text-[22vw] leading-none text-paper/5">
          03
        </p>
        <div className="relative grid gap-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid items-center gap-6 lg:grid-cols-12 ${index === 1 ? "lg:[&_article]:col-start-5" : ""}`}
            >
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
      </div>
    </>
  );
}
