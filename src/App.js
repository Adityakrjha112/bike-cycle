import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Allproduct from "./components/AllProuct";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import ShippingDeliveryPolicy from "./pages/ShippingDeliveryPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellation from "./pages/RefundCancellation";
import TermCondition from "./pages/TermCondition";
import Media from "./pages/Media";
import About from "./pages/About";
import Team from "./pages/Team";
import Accessorie from "./pages/Accessorie";
import Meadia from "./components/Meadia";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Allproduct" element={<Allproduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/shipping-policy"
              element={<ShippingDeliveryPolicy />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/refunds-cancellation"
              element={<RefundCancellation />}
            />
            <Route path="/term-condition" element={<TermCondition />} />
            <Route path="/media" element={<Meadia />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/accessorie" element={<Accessorie />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
