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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/journal" element={<Magazine />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
