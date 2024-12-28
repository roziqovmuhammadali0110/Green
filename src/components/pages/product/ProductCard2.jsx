import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ProductCard({ icon, title, description }) {
  const [showFullText, setShowFullText] = useState(false);

  // Matn uzunligini aniqlash
  const maxLength = 100; // Maksimal uzunlik
  const isTextLong = description.length > maxLength;

  // Ko'rsatiladigan matn
  const displayText = showFullText
    ? description
    : description.slice(0, maxLength) + (isTextLong ? "..." : "");
  return (
    <div className="bg-white rounded-lg hover:shadow-3xl hover:shadow-blue-800 p-4 w-full sm:w-60 md:w-72 lg:w-80 space-y-2">
      <div className="flex justify-center items-center mb-4">
        <img
          src={icon}
          alt={title}
          className="h-[230px] w-[250px] object-cover"
          onError={(e) => (e.target.src = "/default-image.jpg")} // Default rasm
        />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>

      <p className="text-gray-700 text-start text-[17px] font-medium">
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
        <button className="w-full bg-green-500 font-medium text-white py-[8px] text-[18px] rounded-lg hover:bg-green-600">
          Батафсил
        </button>
      </NavLink>
    </div>
  );
}

const Catalog2 = () => {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("uz");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://165.227.98.101/ProductOne")
      .then((res) => {
        console.log(res.data); // Ma'lumotni konsolda tekshirish

        setProducts(
          res.data.map((product) => ({
            ...product,
            iconUrl: `http://165.227.98.101/${product.iconUrl}` // To'liq URL yaratish
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex items-center justify-center flex-col px-2 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            {language === "uz" ? "Каталогимизда" : "В нашем каталоге"}
          </h2>
        </div>

        <div className="flex justify-center mt-6">
          <select
            className="p-3 rounded-lg border border-gray-300 text-gray-700 w-64"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}>
            <option value="uz">O'zbekcha</option>
            <option value="ru">Русский</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              icon={product.iconUrl}
              title={language === "uz" ? product.titleUz : product.titleRu}
              description={
                language === "uz"
                  ? product.descriptionUz
                  : product.descriptionRu
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog2;
