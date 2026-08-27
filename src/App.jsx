import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/CartContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Collections from './pages/Collections';
import About from './pages/About';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
          {/* Header & Global Sliding Cart */}
          <Header />
          <CartDrawer />

          {/* Dynamic Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Persistent Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}