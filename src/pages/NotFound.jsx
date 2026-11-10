import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";
import { btnPrimary } from "../ui";

export function NotFound() {
  usePageTitle("Page not in this preview");

  return (
    <>
      <PageHeader
        title="Page not in this preview"
        lede="This sample catalog does not include that page."
      />
      <div className="mx-auto max-w-page px-4 py-8">
        <Link to="/" className={btnPrimary}>
          Home
        </Link>
      </div>
    </>
  );
}
