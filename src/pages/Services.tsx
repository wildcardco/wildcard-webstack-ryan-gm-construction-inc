import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PhotoFrame } from "../components/PhotoFrame";
import { gallery, services } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Services() {
  usePageTitle("Services · GM Construction Inc.");
  const tub = gallery.find((photo) => photo.id === "tub-shower");

  return (
    <>
      <PageHeader kicker="Park Forest" title="Services">
        Five listed service lines. No priced menu. Call (630) 542-1983. Gutter cleaning, painting, and fence building are not listed.
      </PageHeader>
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <ol>
            {services.map((service, index) => (
              <li
                key={service.id}
                id={service.id}
                tabIndex={-1}
                className={`border-t border-white/15 py-7 ${index % 2 === 1 ? "lg:ml-12" : "lg:mr-8"}`}
              >
                <p className="font-display text-4xl text-bronze">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display mt-2 text-[clamp(2.4rem,5vw,4rem)]">{service.name}</h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone">{service.text}</p>
                <Link to={service.href} className="btn mt-5">
                  {service.hrefLabel}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        {tub ? (
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="lg:-mr-8">
              <PhotoFrame image={tub.image} imgClassName="aspect-[3/4]" />
            </div>
            <p className="mt-3 text-sm text-taupe">{tub.caption}</p>
          </aside>
        ) : null}
      </div>
    </>
  );
}
