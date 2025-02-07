import React, { useEffect } from "react";
import useStore from "../../../store/useStore";
import { useParams } from "react-router-dom";
import DynamicTable from "../DynamicTable";

const ProductDetails = () => {
  const { selectedProduct, fetchProductDetails, loading, error } = useStore();
  const { type, id } = useParams();

  useEffect(() => {
    fetchProductDetails(id, type);
  }, [type, id]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi: {error}</p>;
  if (!selectedProduct) return <p>Mahsulot topilmadi!</p>;

  const productData =
    type === "productOne"
      ? selectedProduct?.productOne
      : selectedProduct?.productTwo;

  const tableData =
    type === "productOne"
      ? selectedProduct?.tableOnes || []
      : selectedProduct?.tableTwo || [];

  if (!productData) return <p>Ma'lumot mavjud emas!</p>;

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 w-full items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      <div className="bg-green-700 w-full lg:w-[100%] py-3 rounded-lg space-y-5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
          <div className="relative flex items-center justify-evenly w-full lg:w-[40%]">
            <img
              src={productData?.productPicture}
              alt="Dori rasmi"
              className="w-[300px] h-[350px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <hr className="hidden lg:block border border-white h-[300px]" />
          </div>
          <div className="space-y-5 px-3 w-full lg:w-[60%] text-white">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {productData?.titleUz}
            </h2>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                {productData?.descriptionUZ}
              </span>
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                Таъсир этувчи модда:
              </span>{" "}
              {productData?.sarfUz}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Кимёвий синфи:</span>{" "}
              {productData?.chemicalClassUz || "Триазолпиримидинлар"}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Препарат шакли:</span>{" "}
              {productData?.formUz || "Мойли дисперсия"}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Қадоқ:</span> 1 л.
            </p>
          </div>
        </div>

        {/* DynamicTable komponentini ishlatish */}
        <DynamicTable data={tableData} />
      </div>
    </div>
  );
};

export default ProductDetails;
