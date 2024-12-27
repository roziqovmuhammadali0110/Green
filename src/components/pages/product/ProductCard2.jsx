import React, { useState } from "react";
import agro from "../../../assets/img/greenPlus.jpg";
import kalsiyCom from "../../../assets/img/kalsiyCom.jpg";
import misCom from "../../../assets/img/misCom.jpg";
import kaliyfos from "../../../assets/img/kaliyfos.jpg";
import { NavLink } from "react-router-dom";

function ProductCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 m-4 space-y-2">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-[230px] w-[260px]" />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>
      <p className="text-gray-700 text-start">{description}</p>
      <NavLink to="/details">
        <button className="w-full bg-green-500 font-medium text-white py-[6px] rounded-lg hover:bg-green-600">
          Батафсил
        </button>
      </NavLink>
    </div>
  );
}

function Catalog2() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = {
    суюқЎғитлар: [
      {
        icon: kalsiyCom,
        title: "КальцийCом Спеcиал",
        description:
          "Таснифи: Органик азот, пептидлар ва аминокислоталарни ўз  ичига олган органик ўғит."
      },
      {
        icon: misCom,
        title: "Мис Cом (Cu 3%)",
        description:
          "Таснифи: Бактериал ва замбуруғли касалликларга қарши қўлланиладиган ўғит"
      }
    ],
    кукунЎғитлар: [
      {
        icon: kaliyfos,
        title: "КалийФос Cом 239",
        description:
          "Таснифи: Ўсимликларни гуллашини ўптималлаштиради. Мева сифатини (қанд миқдори, ранги, шакли, сақланишини) назорат қилади."
      }
    ],
    қоришмаЎғитлар: [
      {
        icon: agro,
        title: "Греэн Плус",
        description:
          "Таснифи: Белгиланган нисбатда барча ўсимликлар ва мевали дарахтларда хавфсиз ишлатиладиган мувозанатли ўғитдир."
      }
    ]
  };

  const categories = [
    { title: "Барча категориялар", key: "" },

    { title: "Суюқ ўғитлар", key: "суюқЎғитлар" },
    { title: "Кукун ўғитлар", key: "кукунЎғитлар" },
    { title: "Қоришма ўғитлар", key: "қоришмаЎғитлар" }
  ];

  const filteredProducts = selectedCategory
    ? products[selectedCategory] || []
    : Object.values(products).flat();

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-[5%] py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Каталогимизда</h2>
          <p className="text-lg text-gray-600">93+ турлари маҳсулотлар</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mt-6">
          <select
            className="p-3 rounded-lg border border-gray-300 text-gray-700 w-64"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category.key}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Products */}
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
