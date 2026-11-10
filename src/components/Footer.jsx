import { Link } from "react-router-dom";
import { business } from "../data/catalog";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-mist bg-mist">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-semibold">{business.name}</p>
          <p className="mt-2 text-sm text-slate">
            {business.category} in Park Forest
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Visit and call</h2>
          <address className="mt-2 text-sm not-italic">
            {business.address.full}
          </address>
          <p className="mt-2">
            <a className="underline" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a className="underline" href={business.website} rel="noreferrer">
              {business.websiteLabel}
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Sample catalog</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link className="underline" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="underline" to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className="underline" to="/estimate">
                Estimate preview
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-page px-4 pb-8 text-sm text-slate">
        No payment or real order. This preview does not charge, email, or place an order.
      </p>
    </footer>
  );
}
