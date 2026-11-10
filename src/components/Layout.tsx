import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { pathname, hash } = useLocation();
  const { notice } = useCart();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
      <Footer />
    </>
  );
}
