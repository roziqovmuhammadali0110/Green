import React, { useState } from "react";

import agro from "../../../assets/img/greenPlus.jpg";
import { NavLink } from "react-router-dom";

import gerbli from "../../../assets/img/Icons_GreenGerbli.png";
// import nihol from "../../../assets/img/Icons_GreenNihol.png";
import qongiz from "../../../assets/img/Icons_GreenQongiz.png";
import shudring from "../../../assets/img/Icons_GreenShudringli.png";
// import yaproq from "../../../assets/img/Icons_GreenYaproq.png";
// import yer from "../../../assets/img/Icons_Green.png";
// import yer2 from "../../../assets/img/Icons_Green2.png";
// import green5 from "../../../assets/img/Icons_Green5.png";

function ProductCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 m-4 space-y-2">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-[230px] w-[260px]" />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>
      <p className="text-gray-700 text-start">{description}</p>
      <NavLink to="/details">
        {" "}
        <button className="w-full bg-green-500 font-medium text-white py-[6px] rounded-lg hover:bg-green-600">
          Батафсил
        </button>
      </NavLink>
    </div>
  );
}

function Catalog2() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = [
    {
      icon: agro,
      title: "ГРЕЭН ПЛУС НПК",
      description:
        "Қўлланиши: Иссиқхона ва очиқ далада ишлатиладиган макро ва микро элементларга бой минерал ўғитлар",
      category: "Гербицидлар"
    }
  ];

  const categories = [
    { title: "Гербицидлар", icon: shudring },
    { title: "Фунгицидлар", icon: gerbli },
    { title: "Инсектоакарацидлар", icon: qongiz }
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    setSelectedCategory(category.title);
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-[5%] py-8">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="text-center ">
            <h2 className="text-3xl font-bold">Каталогимизда</h2>
            <p className="text-lg text-gray-600">93+ турлари маҳсулотлар</p>
          </div>

          <div className="relative w-64 rounded-xl bg-slate-600">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-green-700 font-medium text-white p-2 rounded cursor-pointer flex items-center justify-between">
              <span>{selectedCategory || "Барча категориялар "}</span>
              <span>▼</span>
            </div>
            {isOpen && (
              <div className="absolute z-10 bg-white shadow-lg mt-2 w-full rounded">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelect(category)}>
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-6 h-6"
                    />
                    <span className="font-medium">{category.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Kategoriyalar */}
        {/* <div className="flex justify-center flex-wrap gap-6 mt-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-green-500 text-white p-4 w-36 rounded-md shadow-md cursor-pointer ${
                selectedCategory === item.title ? "bg-green-700" : ""
              }`}
              onClick={() => setSelectedCategory(item.title)}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mb-2 object-contain"
              />
              <p className="text-center text-[12px] font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div> */}

        {/* Mahsulotlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog2;
