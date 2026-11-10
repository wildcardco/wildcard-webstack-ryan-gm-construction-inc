import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Layout } from "./components/Layout";
import { CartPage } from "./pages/CartPage";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { Estimate } from "./pages/Estimate";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProductDetail } from "./pages/ProductDetail";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<ProductDetail />} />
            <Route path="estimate" element={<Estimate />} />
            <Route path="estimate/cart" element={<CartPage />} />
            <Route path="estimate/checkout" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
