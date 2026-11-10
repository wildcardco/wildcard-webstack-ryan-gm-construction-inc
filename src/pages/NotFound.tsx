import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export function NotFound() {
  usePageTitle("Page not found · GM Construction Inc.");

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="kicker">Missing page</p>
      <h1 className="display mt-3 text-[clamp(3.2rem,8vw,6rem)]">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-stone">That address is not part of this sample preview.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/work" className="btn-ghost">
          View the three samples
        </Link>
      </div>
    </div>
  );
}
