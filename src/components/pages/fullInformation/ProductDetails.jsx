import React, { useRef, useEffect } from "react";
import agroVertimaks from "../../../assets/img/agro.png";

const ProductDetails = ({ src, zoom = 3 }) => {
  const imgRef = useRef(null);
  const glassRef = useRef(null);
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
    <div className="flex flex-col lg:flex-row justify-center gap-10 w-full items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      {/* Dori rasmi */}
      <div className="bg-green-700 w-full lg:w-[100%] py-3 rounded-lg space-y-5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
          <div className="relative flex items-center justify-evenly w-full lg:w-[40%]">
            <div
              ref={glassRef}
              className="absolute w-[180px] h-[180px] bg-white rounded-full border-2 shadow-lg cursor-none"
              style={{ display: "none" }}></div>
            <img
              ref={imgRef}
              src={agroVertimaks}
              alt="Dori rasmi"
              className="w-[300px] h-[350px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
              onMouseEnter={() => {
                const glass = glassRef.current;
                if (glass) glass.style.display = "block";
              }}
              onMouseLeave={() => {
                const glass = glassRef.current;
                if (glass) glass.style.display = "none";
              }}
            />
            <hr className="hidden lg:block border border-white h-[300px]" />
          </div>

          {/* Dori haqidagi to‘liq ma'lumotlar */}
          <div className="space-y-5 px-3 w-full lg:w-[60%] text-white">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Агро-Топшит
            </h2>

            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                Шолида бир йиллик ва кўп йиллик бошоқли, икки паллали ҳамда кенг
                баргли ботқоқ бегона ўтларга қарши гербицид.
              </span>{" "}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                Таъсир этувчи модда:
              </span>{" "}
              Цигалофон бутил + пеноксулан (cyhalofop-butyl + penoxsulam)
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Кимёвий синфи:</span>{" "}
              Триазолпиримидинлар
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Препарат шакли:</span>{" "}
              Мойли дисперсия
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Қадоқ:</span> 1 л.
            </p>
          </div>
        </div>

        {/* Tarifi va qo'shimcha ma'lumotlar */}
        <div className="w-full px-5 space-y-2 text-white">
          <h1 className="text-xl lg:text-3xl font-bold">Тариф</h1>
          <h3 className="font-semibold text-[18px]">Қўлланилиши:</h3>
          <p className="text-sm lg:text-[16px] mb-4">
            Галма, майсазорлар, беда ва шолини ўсиш даврида сув зоҳоти ва бошқа
            бегона ўтларга қарши қўлланилади.
          </p>
        </div>

        {/* Jadval */}
        <div className="overflow-x-auto pb-5">
          <table className="min-w-[600px] w-full text-white border-2 mx-2">
            <thead className="border-2 bg-green-800">
              <tr className="border-2">
                <th className="border-2 px-2 py-1">Ekin turi</th>
                <th className="border-2 px-2 py-1">
                  Qaysi begona o'tlarga qarshi ishlatilinadi
                </th>
                <th className="border-2 px-2 py-1">Sarf meyori l/ga</th>
                <th className="border-2 px-2 py-1">
                  Ishlatish muddati, usuli va tavsiya etilgan cheklovlar
                </th>
                <th className="border-2 px-2 py-1">
                  Bir mavsumda ko'pi bilan necha marta ishlatiladi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 px-2 py-1">Sholi</td>
                <td className="border-2 px-2 py-1">
                  Bir yillik va ko'p yillik boshoqli, ikki pallali hamda keng
                  bargli botqoq begona o'tlari
                </td>
                <td className="border-2 px-2 py-1">2.0-3.0</td>
                <td className="border-2 px-2 py-1">
                  Begona o'tlarning 2-3 barg-tuplash davrida ham tuproqqa yoki
                  sholipoyada suv sathi 5-10 sm bo'lganda purkaladi
                </td>
                <td className="border-2 px-2 py-1">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
