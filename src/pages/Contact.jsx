import { PageHeader } from "../components/PageHeader";
import { CallLink } from "../components/CallLink";
import { business, discovery } from "../data/catalog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHeader
        title="Contact"
        lede="Call the shop or use the Facebook page. This preview does not send a message or request a callback."
      />
      <div className="mx-auto grid max-w-page gap-10 px-4 py-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl">{business.name}</h2>
          <p className="mt-2">{business.category} in Park Forest</p>
          <address className="mt-4 not-italic">{business.address.full}</address>
          <p className="mt-4">
            <a className="underline" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>
          </p>
          <p className="mt-4">
            <a className="underline" href={business.website} rel="noreferrer">
              {business.websiteLabel}
            </a>
          </p>
          <p className="mt-2 break-all text-sm text-slate">{business.website}</p>
          <p className="mt-4 text-sm">
            {business.email
              ? business.email
              : "No email was supplied."}
          </p>
          <p className="mt-4 text-sm text-slate">{discovery.note}</p>
          <div className="mt-6">
            <CallLink />
          </div>
        </div>

        <form
          aria-labelledby="mock-form-title"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h2 id="mock-form-title" className="text-xl">
            Static message mock
          </h2>
          <p className="mt-2 text-sm text-slate">
            This form does not send email, store a message, or request a callback.
            The fields are disabled.
          </p>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm" htmlFor="mock-name">
              Name
              <input id="mock-name" name="mock-name" disabled className="min-h-11 border border-mist bg-mist px-3" />
            </label>
            <label className="grid gap-1 text-sm" htmlFor="mock-phone">
              Phone
              <input id="mock-phone" name="mock-phone" disabled className="min-h-11 border border-mist bg-mist px-3" />
            </label>
            <label className="grid gap-1 text-sm" htmlFor="mock-message">
              Message
              <textarea id="mock-message" name="mock-message" disabled rows={4} className="border border-mist bg-mist px-3 py-2" />
            </label>
            <button type="button" disabled className="inline-flex min-h-11 items-center justify-center border border-ink px-4 text-sm opacity-60">
              Not sent from this preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
