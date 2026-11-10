import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { business, primaryNav } from "../data/catalog";
import { useCart } from "../context/CartContext";

function isCurrent(to, pathname) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Nav() {
  const { pathname } = useLocation();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const menuId = "primary-menu";
  const firstLinkRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    firstLinkRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-mist bg-paper">
      <div className="mx-auto max-w-page px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-base font-semibold leading-tight sm:text-lg">
            {business.name}
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="hidden min-h-11 items-center sm:inline-flex"
              href={`tel:${business.phoneTel}`}
            >
              {business.phoneDisplay}
            </a>
            <Link
              to="/estimate/cart"
              className="inline-flex min-h-11 items-center gap-2 text-sm"
              aria-label={`Request list, ${count} ${count === 1 ? "item" : "items"}`}
            >
              <span aria-hidden="true">Request list</span>
              <span
                data-request-count={count}
                className="inline-flex min-w-6 items-center justify-center bg-ink px-1.5 py-0.5 text-xs text-paper"
              >
                {count}
              </span>
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 text-sm md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <a
          className="mt-1 inline-flex min-h-11 items-center text-sm sm:hidden"
          href={`tel:${business.phoneTel}`}
        >
          {business.phoneDisplay}
        </a>
        <nav
          id={menuId}
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} mt-2 flex-col gap-1 border-t border-mist pt-2 md:mt-3 md:flex md:flex-row md:gap-4 md:border-0 md:pt-0`}
        >
          {primaryNav.map((item, index) => (
            <Link
              key={item.to}
              ref={index === 0 ? firstLinkRef : undefined}
              to={item.to}
              aria-current={isCurrent(item.to, pathname) ? "page" : undefined}
              className="inline-flex min-h-11 items-center text-base aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
