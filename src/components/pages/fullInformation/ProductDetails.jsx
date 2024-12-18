import React from "react";
import agroVertimaks from "../../../assets/img/agro.png";

const ProductDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 w-full items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      {/* Dori rasmi */}
      <div className="bg-green-700 w-full lg:w-[100%] py-3 rounded-lg space-y-5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
          <div className="flex items-center justify-evenly w-full lg:w-[40%]">
            <img
              src={agroVertimaks}
              alt="Dori rasmi"
              className="w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
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
        <div className="overflow-x-auto">
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
