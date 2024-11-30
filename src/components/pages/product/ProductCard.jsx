import React, { useState } from "react";
import humik from "../../../assets/img/humik.jpg";
import kaliyfos from "../../../assets/img/kaliyfos.jpg";
import agro from "../../../assets/img/agro.png";
import { NavLink } from "react-router-dom";

function ProductCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 m-4 space-y-2">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-[230px] w-[230px]" />
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

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = [
    {
      icon: humik,
      title: "ҲУМИCОМ",
      description:
        "Тавсиф этиш хусусияти: Ушбу препарат олма курти, цикадалар.",
      category: "Инсектицидлар"
    },
    {
      icon: agro,
      title: "Агро-Топшит",
      description:
        "Қўлланиши: Галла, маккажихори, беда ва шолининг фаол ўсув даврида.",
      category: "Гербицидлар"
    },
    {
      icon: kaliyfos,
      title: "КАЛИЙФОС CОМ",
      description:
        "Тавсиф этиш хусусияти: Барча эксилардаги сўрувчи ва кемирувчи.",
      category: "Фунгицидлар"
    }
  ];

  const categories = [
    { title: "Гербицидлар", icon: "🌿" },
    { title: "Фунгицидлар", icon: "🍃" },
    { title: "Инсектицидлар", icon: "🐜" },
    { title: "Дефолиантлар", icon: "🪱" },
    { title: "Акарацидлар", icon: "🕷" }
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-[5%] py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Каталогимизда</h2>
          <p className="text-lg text-gray-600">93+ турлари маҳсулотлар</p>
        </div>

        {/* Kategoriyalar */}
        <div className="flex justify-center flex-wrap gap-6 mt-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-green-500 text-white p-4 w-28 rounded-md shadow-md cursor-pointer ${
                selectedCategory === item.title ? "bg-green-700" : ""
              }`}
              onClick={() => setSelectedCategory(item.title)}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-center text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>

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

export default Catalog;
