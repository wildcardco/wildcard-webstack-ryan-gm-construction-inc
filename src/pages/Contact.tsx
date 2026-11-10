import { PhotoFrame } from "../components/PhotoFrame";
import { PageHeader } from "../components/PageHeader";
import { business, products } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Contact() {
  usePageTitle("Contact · GM Construction Inc.");
  const deck = products.find((product) => product.id === "deck-stairs");

  return (
    <>
      <PageHeader kicker={business.name} title="Contact">
        Call the shop. This page does not send a message, request a callback, or collect an email. No email address was supplied.
      </PageHeader>
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="kicker">Phone</p>
          <p className="mt-2 font-display text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.9]">
            <a href={business.phoneTel}>{business.phoneDisplay}</a>
          </p>
          <p className="kicker mt-8">Address</p>
          <p className="mt-2 font-display text-[clamp(2rem,5vw,3.4rem)] leading-none">
            {business.street}
            <br />
            {business.cityLine}
          </p>
          <p className="kicker mt-8">Known website</p>
          <p className="mt-2 text-taupe">{business.websiteNote}</p>
          <a href={business.website} className="text-link mt-1 inline-block break-all text-xl text-paper">
            {business.website}
          </a>
          <p className="mt-8 max-w-xl text-stone">
            Supplied rating {business.rating} / {business.reviewCount} reviews. No review text was supplied.
          </p>
        </div>
        {deck ? (
          <div className="lg:col-span-5 lg:-mr-8 lg:mt-10">
            <PhotoFrame image={deck.image} imgClassName="aspect-[4/3]" />
            <p className="mt-3 text-sm text-taupe">{deck.summary}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
