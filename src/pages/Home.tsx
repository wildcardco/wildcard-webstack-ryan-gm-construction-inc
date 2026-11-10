import { Link } from "react-router-dom";
import { SampleCard } from "../components/SampleCard";
import { PhotoFrame } from "../components/PhotoFrame";
import { business, gallery, products, services } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

const tub = gallery.find((photo) => photo.id === "tub-shower");

export function Home() {
  usePageTitle("GM Construction Inc. | Bathroom remodeler in Park Forest");
  const kitchen = products.find((product) => product.id === "white-kitchen");
  const shower = products.find((product) => product.id === "marble-shower");
  const deck = products.find((product) => product.id === "deck-stairs");

  return (
    <>
      <section className="relative overflow-x-clip">
        <div className="mx-auto grid max-w-[1240px] items-start gap-6 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="relative z-20 lg:col-span-5 lg:row-start-1 lg:pt-4">
            <p className="kicker">{business.name}</p>
            <h1 className="display mt-3 text-[clamp(3.5rem,8vw,6.4rem)] text-paper">
              Bathroom remodeler
              <span className="mt-3 block text-[0.46em] font-medium tracking-normal text-taupe">in Park Forest</span>
            </h1>
          </div>

          {shower && kitchen ? (
            <div className="relative z-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:-mr-8">
              <PhotoFrame
                image={shower.image}
                priority
                className="ml-[16%] lg:ml-[6%]"
                imgClassName="aspect-[4/5] max-h-[560px] lg:max-h-[640px]"
              />
              <PhotoFrame
                image={kitchen.image}
                priority
                delay="140ms"
                className="absolute bottom-[8%] left-0 w-[54%] shadow-[12px_12px_0_#8c7344] sm:w-[46%] lg:-left-12"
                imgClassName="aspect-square"
              />
            </div>
          ) : null}

          <div className="relative z-20 lg:col-span-5 lg:row-start-2">
            <p className="max-w-md text-lg leading-relaxed text-stone">
              Finished work is on this page. Call{" "}
              <a href={business.phoneTel} className="text-link text-paper">
                {business.phoneDisplay}
              </a>
              .
            </p>
            <p className="mt-3 text-taupe">{business.address}</p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:items-start">
              <Link to="/work" className="btn">
                See the three samples
              </Link>
              <Link to="/estimate" className="btn-ghost">
                Build a request list
              </Link>
            </div>
            <aside className="mt-8 w-[min(16rem,100%)] bg-paper p-4 text-ink shadow-[8px_8px_0_#4e5856]">
              <p className="font-display text-6xl leading-none">{business.rating}</p>
              <p className="font-display text-2xl uppercase tracking-wide">/ {business.reviewCount} reviews</p>
              <p className="mt-2 text-sm leading-snug text-slate">Supplied rating. No review text was supplied.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative -mt-4 py-8" aria-label="Call">
        <div className="mx-3 -rotate-1 bg-slate px-5 py-7 sm:mx-8 lg:mx-16 lg:px-10">
          <p className="font-display text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.9] tracking-tight">
            <a href={business.phoneTel}>{business.phoneDisplay}</a>
          </p>
          <p className="mt-2 max-w-xl text-stone">{business.address}. The on-site list does not send a message.</p>
        </div>
      </section>

      <section className="relative py-16" aria-labelledby="samples-heading">
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <p className="kicker">Sample catalog</p>
          <h2 id="samples-heading" className="display mt-3 text-[clamp(3rem,7vw,5.5rem)] text-paper">
            Three samples
          </h2>
          <p className="mt-4 max-w-xl text-lg text-stone">
            Not a full catalog. Price unverified. Stock unverified. Nothing here is an order.
          </p>
          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            {kitchen ? (
              <div className="lg:col-span-7">
                <SampleCard product={kitchen} priority imageClassName="aspect-square" />
              </div>
            ) : null}
            <div className="grid gap-12 lg:col-span-5 lg:pt-20">
              {deck ? <SampleCard product={deck} imageClassName="aspect-[4/3]" /> : null}
              {shower ? (
                <div className="lg:-ml-16">
                  <SampleCard product={shower} imageClassName="aspect-[3/4]" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-8" aria-labelledby="services-heading">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {tub ? (
            <div className="lg:col-span-5">
              <PhotoFrame image={tub.image} imgClassName="aspect-[3/4] lg:aspect-[3/4]" />
              <p className="mt-3 max-w-sm text-sm text-taupe">{tub.caption}</p>
            </div>
          ) : null}
          <div className="relative z-10 bg-ink lg:col-span-7 lg:-ml-16 lg:mt-16 lg:p-8 lg:shadow-[-24px_24px_0_rgba(30,30,30,0.65)]">
            <p className="kicker">No priced menu</p>
            <h2 id="services-heading" className="display mt-3 text-[clamp(3rem,7vw,5rem)]">
              Five service lines
            </h2>
            <ol className="mt-6">
              {services.map((service, index) => (
                <li key={service.id} className="border-t border-white/15 py-5">
                  <div className="grid grid-cols-[3.2rem_1fr] gap-3">
                    <span className="font-display text-3xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-3xl leading-none">{service.name}</h3>
                      <Link to={`/services#${service.id}`} className="text-link mt-2 inline-block text-stone">
                        Read the service line
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="project-photos" tabIndex={-1} className="py-16" aria-labelledby="photos-heading">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <p className="kicker">Supplied photos</p>
          <h2 id="photos-heading" className="display mt-3 max-w-3xl text-[clamp(3rem,7vw,5.2rem)]">
            Project photos
          </h2>
          <p className="mt-4 max-w-xl text-stone">
            These five photos are not extra catalog items. The fence is a photo only.
          </p>
          <ul className="mt-10 grid gap-8 md:grid-cols-12 md:gap-5">
            {gallery.map((photo, index) => (
              <li
                key={photo.id}
                className={
                  index === 0
                    ? "md:col-span-7 md:mt-10"
                    : index === 1
                      ? "md:col-span-5 md:-mt-6"
                      : index === 2
                        ? "md:col-span-4"
                        : index === 3
                          ? "md:col-span-4 md:mt-12"
                          : "md:col-span-4 md:-mt-4"
                }
              >
                <PhotoFrame
                  image={photo.image}
                  imgClassName={index === 2 || index === 4 ? "aspect-[3/4]" : "aspect-[4/3]"}
                />
                <p className="mt-3 text-sm leading-relaxed text-taupe">{photo.caption}</p>
                {photo.note ? <p className="mt-1 text-sm text-paper">{photo.note}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
