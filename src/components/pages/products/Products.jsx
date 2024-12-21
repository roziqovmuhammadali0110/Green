import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Rasm importlari
import kalsiyCom from "../../../assets/img/kalsiyCom.jpg";
import agroVertimaks from "../../../assets/img/Agro-Vertimeks.png";
import shudring from "../../../assets/img/Icons_GreenShudringli.png";
import gerbli from "../../../assets/img/Icons_GreenGerbli.png";
import qongiz from "../../../assets/img/Icons_GreenQongiz.png";
import yaproq from "../../../assets/img/Icons_GreenYaproq.png";
import yer from "../../../assets/img/Icons_Green.png";
import yer2 from "../../../assets/img/Icons_Green2.png";
import green5 from "../../../assets/img/Icons_Green5.png";

const ProductCard = ({
  src,
  title,
  catalogLink,
  bgColor = "bg-white",
  textColor = "text-green-600"
}) => {
  const imgRef = useRef(null);
  const glassRef = useRef(null);
  const zoom = 3;

  useEffect(() => {
    const magnify = () => {
      const img = imgRef.current;
      const glass = glassRef.current;
      if (!img || !glass) return;

      glass.style.backgroundImage = `url('${img.src}')`;
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize = `${img.width * zoom}px ${
        img.height * zoom
      }px`;

      const bw = 3;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;

      const moveMagnifier = (e) => {
        e.preventDefault();
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;

        if (x > img.width - w / zoom) x = img.width - w / zoom;
        if (x < w / zoom) x = w / zoom;
        if (y > img.height - h / zoom) y = img.height - h / zoom;
        if (y < h / zoom) y = h / zoom;

        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
        glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${
          y * zoom - h + bw
        }px`;
      };

      const getCursorPos = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.pageX - rect.left - window.pageXOffset;
        const y = e.pageY - rect.top - window.pageYOffset;
        return { x, y };
      };

      img.addEventListener("mousemove", moveMagnifier);
      glass.addEventListener("mousemove", moveMagnifier);

      img.addEventListener("touchmove", moveMagnifier);
      glass.addEventListener("touchmove", moveMagnifier);
    };

    magnify();
  }, [zoom]);

  return (
    <div
      className={`flex relative flex-col xs:justify-between xs:pb-2 md:pb-0 xs:items-center md:h-[200px] xs:w-[300px] text-center md:flex-row w-full xs:h-[320px] md:w-[45%] ${bgColor} shadow-md`}>
      <div
        ref={glassRef}
        className="absolute w-[180px] h-[180px] bg-white rounded-full border-2 shadow-lg cursor-none"
        style={{ visibility: "hidden" }}></div>
      <img
        ref={imgRef}
        src={src}
        alt={title}
        className="md:w-1/2 xs:h-[70%] h-[200px] xs:w-[200px] md:h-full "
        onMouseEnter={() => {
          const glass = glassRef.current;
          if (glass) glass.style.visibility = "visible";
        }}
        onMouseLeave={() => {
          const glass = glassRef.current;
          if (glass) glass.style.visibility = "hidden";
        }}
      />

      <div className="p-4 flex text-start flex-col justify-between">
        <h3
          className={`text-xl xs:text-[17px] md:text-xl font-semibold mb-4 ${textColor}`}>
          {title}
        </h3>
        <NavLink
          to={catalogLink}
          className={`${textColor} xs:text-[13px] md:text-[16px] font-medium hover:underline`}>
          Каталогга ўтиш
        </NavLink>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 text-green-500">
        Маҳсулотларимиз
      </h2>

      <div className="flex flex-wrap text-start justify-between gap-6 mx-auto container px-4">
        <ProductCard
          src={agroVertimaks}
          title="Ўсимликларни химоя қилиш воситалар"
          catalogLink="/catalog"
        />
        <ProductCard
          src={kalsiyCom}
          title="Ўсимликларни озиқлантириш воситалари"
          catalogLink="/catalog"
          bgColor="bg-green-600"
          textColor="text-white"
        />
      </div>

      <div className="flex justify-center flex-wrap gap-6 mt-10">
        {[
          {
            title: "Гербицидлар",
            icon: shudring
          },
          {
            title: "Фунгицидлар",
            icon: gerbli
          },
          {
            title: "Инсектоакарацидлар",
            icon: qongiz
          },
          {
            title: "Дефолиантлар",
            icon: yer
          },
          {
            title: "Сирт фаол модда",
            icon: yer2
          },
          {
            title: "Уруғдорилагичлар",
            icon: yaproq
          },
          {
            title: "Ўсимликларни ўсишини бошқарувчи",
            icon: green5
          }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-500 text-white p-4 w-36 rounded-md shadow-md">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-center text-[12px] font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
