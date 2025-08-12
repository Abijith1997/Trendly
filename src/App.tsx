import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./hooks/ScrollToTpo";
import Home from "./pages/Home/Home";

import { Toaster } from "react-hot-toast";
import store from "./store/store";
import { MainLayout } from "./layout/MainLayout";
import { OtherLayout } from "./layout/OtherLayout";
import { Product } from "./pages/Product/Product";
import { AboutPage } from "./pages/About/AboutPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { PageNotFound } from "./pages/PageNotFound";

export const App = () => {
  return (
    <BrowserRouter basename="/Trendly/">
      <ScrollToTop>
        <Provider store={store}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />

              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route element={<OtherLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/product/*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Provider>
      </ScrollToTop>
      <Toaster />
    </BrowserRouter>
  );
};
