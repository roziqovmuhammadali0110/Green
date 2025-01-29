import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../../store/useStore";

function ProductCard({ icon, title, description }) {
  const [showFullText, setShowFullText] = useState(false);
  const maxLength = 100;
  const isTextLong = description.length > maxLength;
  const displayText = showFullText
    ? description
    : description.slice(0, maxLength) + (isTextLong ? "..." : "");

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 space-y-2">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-[230px] w-[230px]" />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>
      <p className="text-gray-700 text-start text-[13px] font-medium">
        {displayText}
      </p>
      {isTextLong && (
        <button
          className="text-blue-500 hover:underline font-medium"
          onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Kamroq ko'rsatish" : "Ko'proq ko'rsatish"}
        </button>
      )}
      <NavLink to="/details">
        <button className="w-full bg-green-500 font-medium text-white py-[6px] rounded-lg hover:bg-green-600">
          Батафсил
        </button>
      </NavLink>
    </div>
  );
}

function Catalog() {
  const { productOne, loading, error, fetchProductOne } = useStore();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchProductOne();
  }, []);
  const handleSelect = (category) => {
    setSelectedCategory(category.title);
    setIsOpen(false);
  };

  const filteredProducts = selectedCategory
    ? productOne.filter((product) => product.category === selectedCategory)
    : productOne;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Xatolik yuz berdi: {error}</div>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex items-center justify-center flex-col px-2 py-8">
        <div className="flex w-full items-center flex-col md:flex-row justify-center gap-4">
          <div className="text-center ">
            <h2 className="text-3xl font-bold">Каталогимизда</h2>
            <p className="text-lg text-gray-600">93+ турлари маҳсулотлар</p>
          </div>

          <div className="relative w-64 rounded-xl bg-slate-600">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-green-700 font-medium text-white p-2 rounded cursor-pointer flex items-center justify-between">
              <span>{selectedCategory || "Барча категориялар"}</span>
              <span>▼</span>
            </div>
            {isOpen && (
              <div className="absolute z-10 bg-white shadow-lg mt-2 w-full rounded">
                {productOne.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelect(category)}>
                    <img
                      src={category.productPicture}
                      alt={category.additionUz}
                      className="w-6 h-6"
                    />
                    <span className="font-medium">{category.additionUz}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mahsulotlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.productPicture}
              title={product.additionUz}
              description={product.descriptionUz}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
