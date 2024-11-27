import aminocom from "../../assets/img/aminocom.jpg";
import kalsiyCom from "../../assets/img/kalsiyCom.jpg";
const Products = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 text-green-500">
        Маҳсулотларимиз
      </h2>

      {/* Ikki Katta Kartochka */}
      <div className="flex flex-wrap justify-between gap-6 mx-auto container px-4">
        {/* Kartochka 1 */}
        <div className="flex flex-col md:flex-row w-full md:w-[45%] h-[200px] bg-white shadow-md">
          <img
            src={aminocom} // Rasmingiz URL manzilini o'rnating
            alt="O'simliklarni himoya qilish"
            className="md:w-1/2 h-auto"
          />
          <div className="p-4 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              Ўсимликларни ҳимоя қилиш воситалари
            </h3>
            <a href="#" className="text-green-600 font-medium hover:underline">
              Каталўгга ўтиш
            </a>
          </div>
        </div>

        {/* Kartochka 2 */}
        <div className="flex flex-col md:flex-row w-full md:w-[45%] h-[200px] bg-green-600 shadow-md">
          <img
            src={kalsiyCom} // Rasmingiz URL manzilini o'rnating
            alt="Ogitlar"
            className="md:w-1/2 h-auto"
          />
          <div className="p-4 flex flex-col justify-between text-white">
            <h3 className="text-xl font-semibold mb-2">Ўғитлар</h3>
            <a href="#" className="text-white font-medium hover:underline">
              Каталўгга ўтиш
            </a>
          </div>
        </div>
      </div>

      {/* Ikonalar Qatori */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        {[
          { title: "Гербицидлар", icon: "🌿" },
          { title: "Фунгицидлар", icon: "🍃" },
          { title: "Инсектицидлар", icon: "🐜" },
          { title: "Дефолиантлар", icon: "🪱" },
          { title: "Акарацидлар", icon: "🕷" }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-500 text-white p-4 w-28 rounded-md shadow-md">
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-center text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
