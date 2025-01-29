import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/useStore.js"; // ✅ To‘g‘ri import

function ProductCard({ id, icon, productPicture, title, description, type }) {
  const navigate = useNavigate();
  const { setSelectedProduct } = useStore();

  const handleDetailsClick = () => {
    setSelectedProduct(id, type); // ✅ ID va turini saqlaymiz
    navigate(`/details/${type}/${id}`); // ✅ `type` ga qarab yo‘naltiramiz
  };

  const [showFullText, setShowFullText] = useState(false);

  const maxLength = 100;
  const isTextLong = description ? description.length > maxLength : false;
  const displayText = description
    ? showFullText
      ? description
      : description.slice(0, maxLength) + (isTextLong ? "..." : "")
    : "Tavsif mavjud emas";

  return (
    <div className="bg-white rounded-lg hover:shadow-3xl hover:shadow-blue-800 p-4 w-full sm:w-60 md:w-72 lg:w-80 space-y-2">
      <div className="flex relative justify-center items-center mb-4">
        <img
          src={icon}
          alt={title}
          className="w-[50px] absolute bg-white ` top-1 right-2 object-cover rounded-full"
          onError={(e) => (e.target.src = "/default-image.jpg")}
        />
        <img
          src={productPicture}
          alt={title}
          className="w-[280px] h-[280px] object-cover rounded-lg"
          onError={(e) => (e.target.src = "/default-image.jpg")}
        />
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

      <button
        onClick={handleDetailsClick}
        className="w-full bg-green-500 font-medium text-white py-[8px] text-[18px] rounded-lg hover:bg-green-600">
        Батафсил
      </button>
    </div>
  );
}

const Catalog2 = () => {
  const { productTwo, loading, error, fetchProductTwo } = useStore(); // ✅ To‘g‘ri store ishlatilgan

  const [language, setLanguage] = useState("uz");

  useEffect(() => {
    useStore.getState().fetchProductTwo(); // ✅ Cheksiz loopni oldini olish uchun
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
          {Array.isArray(productTwo) && productTwo.length > 0 ? (
            productTwo.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                icon={product.productIcon || "/default-icon.jpg"}
                productPicture={product.productPicture || "/default-image.jpg"}
                title={
                  language === "uz" && product.titleUz
                    ? product.titleUz
                    : product.titleRu || "No Title"
                }
                description={
                  language === "uz" && product.descriptionUz
                    ? product.descriptionUz
                    : product.descriptionRu || "No Description"
                }
                type="productTwo" // ✅ `productTwo` deb turini yuboramiz
              />
            ))
          ) : (
            <p>Mahsulotlar topilmadi.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog2;
