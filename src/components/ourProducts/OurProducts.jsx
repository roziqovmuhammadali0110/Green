import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../products/Products";

// ProductCard komponenti
const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4 space-y-4 w-full sm:w-64">
      {/* Rasm */}
      <div className="relative">
        <img
          src="https://www.ifoda.uz/uploads/1/d0djwo9kMMnRC_q8PYlxblDXeqcYX0u5.png" // Rasm manzili
          alt="Product Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* Ikonka (rasm ustida joylashgan) */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <i className="fas fa-leaf text-green-500"></i>{" "}
          {/* O‘simlik ikonkasi */}
        </div>
      </div>

      {/* Mahsulot nomi va tavsifi */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800">FLUTRIFUL</h3>
        <p className="text-gray-600 text-sm mt-2">
          Fungitsid (Flutriafol 250 g/l) Zamburug‘li kasalliklarga qarshi
        </p>
      </div>

      {/* "Batafsil" tugmasi */}
      <div className="flex justify-between w-full mt-4">
        <a href="#" className="text-green-500 hover:text-green-600">
          Batafsil
        </a>
        <span className="text-green-500 text-lg">&#9733;</span>{" "}
        {/* Yashil barg ikonkasi */}
      </div>
    </div>
  );
};

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: "ondemand", // Lazy loadni o‘zgartirdim
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3ta slaydni ko‘rsatish
    slidesToScroll: 1,
    initialSlide: 0, // initialSlide-ni 0 ga o‘zgartirdim
    autoplay: true,
    autoplaySpeed: 2000, // autoplay tezligini tuzatdim
    cssEase: "linear",
    centerMode: true, // O'rtaga joylashtirish
    focusOnSelect: true, // Slayddan tanlashni qo'llash
    responsive: [
      {
        breakpoint: 1024, // O'rta ekranlar uchun
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Kichik ekranlar uchun
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="w-full h-full py-10 bg-gray-100">
      <div className="container mx-auto px-[5%]">
        <div>
          <Products />
        </div>
        <div>
          <Slider {...settings}>
            {/* Har bir slaydda ProductCard */}
            <div className="px-4">
              <ProductCard />
            </div>
            <div className="px-4">
              <ProductCard />
            </div>
            <div className="px-4">
              <ProductCard />
            </div>
            <div className="px-4">
              <ProductCard />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LazyLoad;
