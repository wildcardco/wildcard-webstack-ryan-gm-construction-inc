import { Link } from "react-router-dom";
import { business, categories, products } from "../data/catalog";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-bronze bg-ink">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="kicker">Visit</h2>
          <p className="mt-3 font-display text-3xl leading-none text-paper">{business.name}</p>
          <p className="mt-2 text-stone">Bathroom remodeler in Park Forest</p>
          <p className="mt-3 text-paper">
            {business.street}
            <br />
            {business.cityLine}
          </p>
          <a href={business.phoneTel} className="mt-3 inline-block font-display text-3xl text-paper">
            {business.phoneDisplay}
          </a>
        </div>

        <nav aria-label="Pages">
          <h2 className="kicker">Pages</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="text-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-link">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Samples">
          <h2 className="kicker">Samples</h2>
          <ul className="mt-3 space-y-2">
            {products.map((product) => (
              <li key={product.id}>
                <Link to={product.path} className="text-link">
                  {product.name}
                </Link>
              </li>
            ))}
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.path} className="text-link">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Request">
          <h2 className="kicker">Request</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/estimate" className="text-link">
                Estimate
              </Link>
            </li>
            <li>
              <Link to="/estimate/cart" className="text-link">
                Request list
              </Link>
            </li>
            <li>
              <Link to="/estimate/checkout" className="text-link">
                Preview
              </Link>
            </li>
          </ul>
          <p className="mt-5 text-sm text-taupe">{business.websiteNote}</p>
          <a href={business.website} className="text-link break-all">
            {business.website}
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1240px] px-4 py-4 text-sm text-taupe sm:px-6 lg:px-8">
          Local preview. Price unverified. Stock unverified. No payment. No real order.
        </p>
      </div>
    </footer>
  );
}
