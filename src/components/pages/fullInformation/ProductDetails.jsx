import React, { useEffect } from "react";
import useStore from "../../../store/useStore";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { selectedProduct, fetchProductDetails, loading, error } = useStore();
  const { type, id } = useParams();

  useEffect(() => {
    console.log("Effect ishga tushdi:", type, id);
    fetchProductDetails(id, type);
  }, [type, id]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi: {error}</p>;
  if (!selectedProduct) return <p>Mahsulot topilmadi!</p>;
  console.log(selectedProduct, "rasmmmmmmkerak");

  const productData =
    type === "productOne"
      ? selectedProduct.productOne
      : selectedProduct.productTwo;
  console.log(productData, "rasmmmmmmkerak");
  const productData2 =
    type === "productOne"
      ? selectedProduct.tableOnes
        ? selectedProduct.tableOnes[0]
        : selectedProduct.tableOnes
      : selectedProduct.tableTwo;

  console.log(productData2, "rasmmmmmmker tableeeeeeeeeeeeee");

  if (!productData) return <p>Ma'lumot mavjud emas!</p>;
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 w-full items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      {/* Mahsulot kartochkasi */}

      <div className="bg-green-700 w-full lg:w-[100%] py-3 rounded-lg space-y-5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
          {/* Mahsulot rasmi */}

          <div className="relative flex items-center justify-evenly w-full lg:w-[40%]">
            <img
              src={productData.productPicture}
              alt="Dori rasmi"
              className="w-[300px] h-[350px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <hr className="hidden lg:block border border-white h-[300px]" />
          </div>

          {/* Mahsulot haqida ma’lumot */}

          <div className="space-y-5 px-3 w-full lg:w-[60%] text-white">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {productData.titleUz}
            </h2>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                {productData.descriptionUZ}
              </span>
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">
                Таъсир этувчи модда:
              </span>{" "}
              {productData.sarfUz}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Кимёвий синфи:</span>{" "}
              {productData.chemicalClassUz || "Триазолпиримидинлар"}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Препарат шакли:</span>{" "}
              {productData.formUz || "Мойли дисперсия"}
            </p>
            <p className="text-md lg:text-md mb-4">
              <span className="font-semibold text-[16px]">Қадоқ:</span> 1 л.
            </p>
          </div>
        </div>

        {/* Тариф haqida ma’lumot */}

        <div className="w-full px-5 space-y-2 text-white">
          <h1 className="text-xl lg:text-3xl font-bold">Тариф</h1>
          <h3 className="font-semibold text-[18px]">Қўлланилиши:</h3>
          <p className="text-sm lg:text-[16px] mb-4">
            Ғалла, майсазорлар, беда ва шолини ўсиш даврида сув зоҳоти ва бошқа
            бегона ўтларга қарши қўлланилади.
          </p>
        </div>

        {/* Tabel formatida qo‘llanishi */}

        <div className="overflow-x-auto pb-5">
          <table className="min-w-[600px] w-full text-white border-2 mx-2">
            <thead className="border-2 bg-green-800">
              <tr className="border-2">
                <th className="border-2 px-2 py-1">Экин тури</th>
                <th className="border-2 px-2 py-1">
                  Қайси бегона ўтларга қарши ишлатилинади
                </th>
                <th className="border-2 px-2 py-1">Сарф меёри л/га</th>
                <th className="border-2 px-2 py-1">
                  Ишлатиш муддати, усули ва тавсия этилган чекловлар
                </th>
                <th className="border-2 px-2 py-1">
                  Бир мавсумда кўпи билан неча марта ишлатилади
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 px-2 py-1 text-center">
                  {productData2.ekinTuriUz ? productData2.ekinTuriUz : " "}
                </td>
                <td className="border-2 px-2 py-1 text-center">
                  {productData2.begonaQarshiUz
                    ? productData2.begonaQarshiUz
                    : " "}
                </td>
                <td className="border-2 px-2 py-1 text-center">
                  {productData2.sarfMeyoriUz ? productData2.sarfMeyoriUz : " "}
                </td>
                <td className="border-2 px-2 py-1 text-center">
                  {productData2.ekinTuriUz ? productData2.ekinTuriUz : " "}
                </td>
                <td className="border-2 px-2 py-1 text-center">
                  {" "}
                  {productData2.onlsum ? productData2.onlsum : " "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
