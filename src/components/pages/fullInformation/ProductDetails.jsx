import React from "react";
import agroVertimaks from "../../../assets/img/agro.png";
const ProductDetails = () => {
  return (
    <div className="flex justify-center gap-10 w-[100%] items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      {/* Dori rasmi */}
      <div className="flex items-center justify-between border-2 bg-green-700 p-5 rounded-lg">
        <img
          src={agroVertimaks}
          alt="Dori rasmi"
          className="w-[250px] h-[300px] object-cover mb-4 border-r-2 border-white"
        />

        {/* Dori haqidagi to‘liq ma'lumotlar */}
        <div className="space-y-3 px-3">
          <h2 className="text-2xl font-bold text-white mb-2">Агро-Топшит</h2>
          <p className="text-md text-white mb-4 space-y-3">
            <span className="font-semibold">Хусусиятлар:</span> Гербицид <br />
            <span className="font-semibold">Таркиби:</span> Бентоназа (48%){" "}
            <br />
            <span className="font-semibold">Қўлланилиши:</span> Сув зоҳоти қарши
            фойдаланиладиган гербицид. <br />
          </p>

          <p className="text-md text-white mb-4">
            <span className="font-semibold">Тавсиф:</span>
            Галма, майсазорлар, беда ва шолини ўсиш даврида сув зоҳоти ва бошқа
            бегона ўтларга қарши қўлланилади.
          </p>

          {/* Miqdor va savatga qo‘shish tugmasi */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
