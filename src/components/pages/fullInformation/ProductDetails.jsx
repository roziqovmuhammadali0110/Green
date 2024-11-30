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
          className="w-[250px] h-[300px] object-cover mb-4"
        />

        {/* Dori haqidagi to‘liq ma'lumotlar */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white mb-2">Agro-Topshit</h2>
          <p className="text-md text-white mb-4 space-y-3">
            <span className="font-semibold">Xususiyatlar:</span> Gerbitsid{" "}
            <br />
            <span className="font-semibold">Tarkibi:</span> Bentonaza (48%){" "}
            <br />
            <span className="font-semibold">Qo‘llanilishi:</span> Suv zohoti
            qarshi foydalaniladigan gerbitsid. <br />
          </p>

          <p className="text-md text-white mb-4">
            <span className="font-semibold">Tavsif:</span>
            Galma, maysazorlar, beda va sholini oʻsish davrida suv zohoti va
            boshqa begona o'tlarga qarshi qo‘llaniladi.
          </p>

          {/* Miqdor va savatga qo‘shish tugmasi */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
