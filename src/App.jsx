import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import AboutPage from "./components/pages/about/AboutPage";
import Catalog from "./components/pages/product/ProductCard";
import Blog from "./components/blog/Blog";
import News from "./components/pages/news/News";
import Magazine from "./components/magazine/Magazine";
import ProductDetails from "./components/pages/fullInformation/ProductDetails";
import Catalog2 from "./components/pages/product/ProductCard2";
import { useRef } from "react";
import Crosshair from "./Crosshair";

function App() {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef}>
      {/* <Crosshair containerRef={containerRef} color="#ffffff" /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog2" element={<Catalog2 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/journal" element={<Magazine />} />

        <Route path="/details/:type/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
