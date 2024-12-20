//import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// Rasm importlari
import kalsiyCom from "../../../assets/img/kalsiyCom.jpg";
import agroVertimaks from "../../../assets/img/Agro-Vertimeks.png";
import gerbli from "../../../assets/img/Icons_GreenGerbli.png";
import qongiz from "../../../assets/img/Icons_GreenQongiz.png";
import shudring from "../../../assets/img/Icons_GreenShudringli.png";
import yaproq from "../../../assets/img/Icons_GreenYaproq.png";
import yer from "../../../assets/img/Icons_Green.png";
import yer2 from "../../../assets/img/Icons_Green2.png";
//import axios from "axios";

const Products = () => {
  // const [pictures, setPictures] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://64.225.50.8/Student")
  //     .then((res) => {
  //       // To'liq URL'ni shakllantirish
  //       const imageUrls = res.data.map(
  //         (item) => `http://64.225.50.8/${item.pictureUrl}`
  //       );
  //       setPictures(imageUrls);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setError("Ma'lumotni olishda xatolik yuz berdi!");
  //     });
  // }, []);

  // if (error) return <p>{error}</p>;

  // if (!pictures.length) return <p>Rasmlar yuklanmoqda...</p>;

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 text-green-500">
        Маҳсулотларимиз
      </h2>

      {/* Ikki Katta Kartochka */}
      <div className="flex flex-wrap justify-between gap-6 mx-auto container px-4">
        {/* Kartochka 1 */}
        <div className="flex flex-col xs:justify-between xs:pb-2 md:pb-0 md:text-start xs:items-center md:h-[200px] xs:w-[300px] text-center md:flex-row w-full xs:h-[320px] md:w-[45%]  bg-white shadow-md">
          <img
            src={agroVertimaks}
            alt="O'simliklarni himoya qilish"
            className="md:w-1/2 xs:h-[70%] h-[200px] xs:w-[200px] md:h-full text-center"
          />
          <div className="p-4 flex flex-col justify-between">
            <h3 className="text-xl xs:text-[17px] md:text-xl font-semibold mb-2 text-green-600">
              Ўсимликларни химоя қилиш воситалар
            </h3>
            <NavLink
              to="/catalog"
              className="text-green-600 xs:text-[13px] md:text-[16px] font-medium hover:underline">
              Каталогга ўтиш
            </NavLink>
          </div>
        </div>

        {/* Kartochka 2 */}
        <div className="flex flex-col xs:justify-between md:text-start xs:pb-2 md:pb-0 xs:items-center md:h-[200px] xs:w-[300px] text-center md:flex-row w-full xs:h-[320px] md:w-[45%]  bg-green-600 shadow-md">
          <img
            src={kalsiyCom}
            alt="Ogitlar"
            className="md:w-1/2 xs:h-[70%] h-[200px] xs:w-[100%]  md:h-full text-center"
          />
          <div className="p-4 flex flex-col justify-between text-white">
            <h3 className="text-xl xs:text-[17px] md:text-xl font-semibold mb-2">
              Ўсимликларни озиқлантириш воситалари
            </h3>
            <NavLink
              to="/catalog"
              className="text-white xs:text-[13px] md:text-[16px] font-medium hover:underline">
              Каталогга ўтиш
            </NavLink>
          </div>
        </div>
      </div>

      {/* Ikonalar Qatori (Rasmlar bilan) */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        {[
          { title: "Гербицидлар", icon: shudring },
          { title: "Фунгицидлар", icon: gerbli },
          { title: "Инсектоакарацидлар", icon: qongiz },
          { title: "Дефолиантлар", icon: yer },
          { title: "Сирт фаол модда", icon: yer2 },
          { title: "Уруғдорилагичлар", icon: yaproq }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-500 text-white p-4 w-32 rounded-md shadow-md">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-center text-[12px] font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-2 gap-4 p-4">
        {pictures.map((url, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={url}
              alt={`Student ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/150")
              } // Fallback image
            />
            <p className="mt-2 text-sm font-medium">Student {index + 1}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
