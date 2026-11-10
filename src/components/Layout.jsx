import { Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Layout() {
  const { count } = useCart();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav />
      <p className="sr-only" aria-live="polite">
        Request list has {count} {count === 1 ? "item" : "items"}.
      </p>
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
