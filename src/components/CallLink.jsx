import { business } from "../data/catalog";
import { btnPrimary } from "../ui";

export function CallLink({ className = btnPrimary }) {
  return (
    <a className={className} href={`tel:${business.phoneTel}`}>
      Call {business.phoneDisplay}
    </a>
  );
}
