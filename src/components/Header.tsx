import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business } from "../data/catalog";
import { useCart } from "../context/CartContext";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/work", label: "Work", end: false },
  { to: "/estimate", label: "Estimate", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

function navClass(isActive: boolean) {
  return `inline-flex min-h-11 items-center px-2 font-display text-xl uppercase tracking-[0.14em] ${
    isActive ? "text-bronze" : "text-paper"
  }`;
}

export function Header() {
  const { count } = useCart();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = buttonRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        : [];

    getFocusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        trigger?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-bronze bg-ink">
      <div className="mx-auto flex h-[4.25rem] max-w-[1240px] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-[1.35rem] font-semibold uppercase leading-none tracking-[0.06em] text-paper sm:text-2xl">
          <span className="sm:hidden">GM</span>
          <span className="hidden sm:inline">
            GM <span className="text-bronze">Construction</span> Inc.
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => navClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href={business.phoneTel} className="ml-4 hidden font-display text-2xl tracking-wide text-paper lg:inline">
          {business.phoneDisplay}
        </a>

        <Link
          to="/estimate/cart"
          className="ml-auto inline-flex min-h-11 items-center gap-2 border border-taupe px-3 font-display text-lg uppercase tracking-[0.12em] text-paper lg:ml-4"
          aria-label={`Request list, ${count} ${count === 1 ? "item" : "items"}`}
        >
          <span className="sm:hidden">List</span>
          <span className="hidden sm:inline">Request list</span>
          <span className="text-bronze">{count}</span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-taupe px-3 font-display text-lg uppercase tracking-[0.12em] text-paper lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-30 overflow-y-auto bg-ink px-5 py-6 lg:hidden"
        >
          <nav aria-label="Primary" className="flex flex-col">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `border-b border-white/10 py-3 font-display text-5xl uppercase leading-none ${
                    isActive ? "text-bronze" : "text-paper"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a href={business.phoneTel} className="mt-8 block font-display text-4xl text-paper">
            {business.phoneDisplay}
          </a>
          <p className="mt-2 text-taupe">{business.address}</p>
          <button
            type="button"
            className="btn mt-8"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
          >
            Close menu
          </button>
        </div>
      ) : null}
    </header>
  );
}
