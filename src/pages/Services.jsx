import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { photoById, productById, services } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Services() {
  usePageTitle("Services");

  return (
    <>
      <PageHeader
        title="Services"
        lede="Five service lines for this Park Forest shop. No priced menu. Nothing on this page is an order."
      />
      <div className="mx-auto max-w-page space-y-10 px-4 py-8">
        {services.map((service) => {
          const related = service.productId ? productById(service.productId) : null;
          const photos = service.photoIds.map((id) => photoById(id)).filter(Boolean);
          return (
            <article key={service.id} aria-labelledby={`service-${service.id}`} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_18rem]">
              <div>
                <h2 id={`service-${service.id}`} className="text-2xl">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-6">{service.summary}</p>
                <p className="mt-3 text-sm text-slate">Price: Not verified. Contact for quote.</p>
                {related ? (
                  <p className="mt-3">
                    <Link className="underline" to={related.path}>
                      View the {related.name} sample
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-sm">
                    No separate sample scope is listed for this service.
                  </p>
                )}
              </div>
              <ul className="grid gap-3">
                {photos.map((photo) => (
                  <li key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </>
  );
}
