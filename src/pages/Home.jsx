import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { CallLink } from "../components/CallLink";
import {
  business,
  homeBandPhotoIds,
  photoById,
  products,
  services,
  heroPhotoId,
} from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Home() {
  usePageTitle(null);
  const hero = photoById(heroPhotoId);
  const band = homeBandPhotoIds.map((id) => photoById(id)).filter(Boolean);

  return (
    <>
      <section className="relative min-h-[32rem] overflow-hidden bg-ink text-paper">
        {hero ? (
          <div className="hero-reveal absolute inset-0">
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
        <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-page items-end px-4 py-12">
          <div className="relative max-w-xl">
            <div className="absolute left-3 top-3 h-full w-full bg-stone/80" aria-hidden="true" />
            <div className="relative bg-paper/95 p-6 text-ink">
              <p className="text-sm text-slate">{business.town}</p>
              <h1 className="mt-2 text-4xl leading-tight">{business.name}</h1>
              <p className="mt-3 text-lg">Bathroom remodeler in Park Forest</p>
              <div className="mt-5">
                <CallLink />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Finished work" className="relative z-10 -mt-8 px-4">
        <ul className="mx-auto grid max-w-page gap-3 md:grid-cols-3">
          {band.map((photo) => (
            <li key={photo.id} className="bg-stone/90 p-2">
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
      </section>

      <section className="relative z-10 mx-auto -mt-4 max-w-page px-4 py-12" aria-labelledby="samples-heading">
        <div className="bg-paper p-1">
          <div className="border border-stone bg-paper p-4 sm:p-6">
            <h2 id="samples-heading" className="text-2xl">
              Three sample projects
            </h2>
            <p className="mt-2 max-w-2xl text-slate">
              A short sample of photo-backed work. Price and stock are not verified.
              Adding a scope keeps it in this browser only.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 pb-12" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-2xl">
          Service lines
        </h2>
        <p className="mt-2 max-w-2xl text-slate">No priced menu.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.id} className="border border-mist bg-mist/40 p-4">
              <h3 className="text-lg">{service.name}</h3>
              <p className="mt-2 text-sm">{service.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link className="underline" to="/services">
            Services
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-page px-4 pb-12" aria-labelledby="rating-heading">
        <h2 id="rating-heading" className="text-2xl">
          Rating
        </h2>
        <p className="mt-2">
          Rated {business.rating.score} from {business.rating.count} reviews.
        </p>
        <p className="mt-1 text-sm text-slate">No review text was supplied.</p>
      </section>

      <section className="bg-slate text-paper" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-page px-4 py-10">
          <h2 id="visit-heading" className="text-2xl">
            {business.name}
          </h2>
          <address className="mt-3 not-italic">{business.address.full}</address>
          <p className="mt-3">
            <a className="underline" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a className="underline" href={business.website} rel="noreferrer">
              {business.websiteLabel}
            </a>
            <span className="text-mist"> — the only known website</span>
          </p>
        </div>
      </section>
    </>
  );
}
