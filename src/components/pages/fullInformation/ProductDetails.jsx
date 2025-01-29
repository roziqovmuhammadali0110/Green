import React, { useRef, useEffect } from "react";
import useStore from "../../../store/useStore";
import { useParams } from "react-router-dom";

const ProductDetails = ({ zoom = 3 }) => {
  const imgRef1 = useRef(null);
  const glassRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const glassRef2 = useRef(null);

  useEffect(() => {
    const magnify = () => {
      const img1 = imgRef1.current;
      const glass1 = glassRef1.current;
      const img2 = imgRef2.current;
      const glass2 = glassRef2.current;
      if (!img1 || !glass1 || !img2 || !glass2) return;

      glass1.style.backgroundImage = `url('${img1.src}')`;
      glass1.style.backgroundRepeat = "no-repeat";
      glass1.style.backgroundSize = `${img1.width * zoom}px ${
        img1.height * zoom
      }px`;
      glass2.style.backgroundImage = `url('${img2.src}')`;
      glass2.style.backgroundRepeat = "no-repeat";
      glass2.style.backgroundSize = `${img2.width * zoom}px ${
        img2.height * zoom
      }px`;

      const bw = 3;
      const w = glass1.offsetWidth / 2;
      const h = glass1.offsetHeight / 2;

      const moveMagnifier = (e) => {
        e.preventDefault();
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;

        // Restrict magnifier to image boundaries
        x = Math.max(Math.min(x, img1.width - w / zoom), w / zoom);
        y = Math.max(Math.min(y, img1.height - h / zoom), h / zoom);

        glass1.style.left = `${x - w}px`;
        glass1.style.top = `${y - h}px`;
        glass1.style.backgroundPosition = `-${x * zoom - w + bw}px -${
          y * zoom - h + bw
        }px`;

        glass2.style.left = `${x - w}px`;
        glass2.style.top = `${y - h}px`;
        glass2.style.backgroundPosition = `-${x * zoom - w + bw}px -${
          y * zoom - h + bw
        }px`;
      };

      const getCursorPos = (e) => {
        const rect = img1.getBoundingClientRect();
        const x = e.pageX - rect.left - window.pageXOffset;
        const y = e.pageY - rect.top - window.pageYOffset;
        return { x, y };
      };

      img1.addEventListener("mousemove", moveMagnifier);
      glass1.addEventListener("mousemove", moveMagnifier);
      img2.addEventListener("mousemove", moveMagnifier);
      glass2.addEventListener("mousemove", moveMagnifier);

      img1.addEventListener("touchmove", moveMagnifier);
      glass1.addEventListener("touchmove", moveMagnifier);
      img2.addEventListener("touchmove", moveMagnifier);
      glass2.addEventListener("touchmove", moveMagnifier);
    };

    magnify();
  }, [zoom]);

  const {
    selectedProduct,
    fetchProductOneDetails,
    fetchProductTwoDetails,
    loading,
    error
  } = useStore();
  const { type, id } = useParams();

  useEffect(() => {
    if (type === "productOne") {
      fetchProductOneDetails(id);
    } else if (type === "productTwo") {
      fetchProductTwoDetails(id);
    }
  }, [type, id]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi: {error}</p>;
  if (!selectedProduct) return <p>Mahsulot topilmadi!</p>;

  const isProductOne = type === "productOne" && selectedProduct;
  const isProductTwo = type === "productTwo" && selectedProduct;

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 w-full items-center p-6 py-10 bg-white shadow-lg rounded-md mx-auto">
      <div className="bg-green-700 w-full lg:w-[100%] py-3 rounded-lg space-y-5">
        {isProductOne && (
          <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
            <div className="relative flex items-center justify-evenly w-full lg:w-[40%]">
              <div
                ref={glassRef1}
                className="absolute w-[180px] h-[180px] bg-white rounded-full border-2 shadow-lg cursor-none"
                style={{ display: "none" }}></div>
              <img
                ref={imgRef1}
                src={selectedProduct.productOne.productPicture}
                alt="Dori rasmi"
                className="w-[300px] h-[350px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
                onMouseEnter={() => {
                  if (glassRef1.current)
                    glassRef1.current.style.display = "block";
                }}
                onMouseLeave={() => {
                  if (glassRef1.current)
                    glassRef1.current.style.display = "none";
                }}
              />
              <hr className="hidden lg:block border border-white h-[300px]" />
            </div>

            <div className="space-y-5 px-3 w-full lg:w-[60%] text-white">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {selectedProduct.productOne.titleUz}
              </h2>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  {selectedProduct.productOne.descriptionUZ}
                </span>
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Таъсир этувчи модда:
                </span>{" "}
                {selectedProduct.productOne.sarfUz}
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Кимёвий синфи:
                </span>{" "}
                Триазолпиримидинлар
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Препарат шакли:
                </span>{" "}
                Мойли дисперсия
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">Қадоқ:</span> 1 л.
              </p>
            </div>
          </div>
        )}

        {isProductTwo && (
          <div className="flex flex-col lg:flex-row items-center justify-evenly p-5 rounded-lg">
            <div className="relative flex items-center justify-evenly w-full lg:w-[40%]">
              <div
                ref={glassRef2}
                className="absolute w-[180px] h-[180px] bg-white rounded-full border-2 shadow-lg cursor-none"
                style={{ display: "none" }}></div>
              <img
                ref={imgRef2}
                src={selectedProduct.productTwo.productPicture}
                alt="Dori rasmi"
                className="w-[300px] h-[350px] lg:w-[250px] lg:h-[300px] object-cover rounded-md"
                onMouseEnter={() => {
                  if (glassRef2.current)
                    glassRef2.current.style.display = "block";
                }}
                onMouseLeave={() => {
                  if (glassRef2.current)
                    glassRef2.current.style.display = "none";
                }}
              />
              <hr className="hidden lg:block border border-white h-[300px]" />
            </div>

            <div className="space-y-5 px-3 w-full lg:w-[60%] text-white">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {selectedProduct.productTwo.titleUz}
              </h2>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  {selectedProduct.productTwo.descriptionUZ}
                </span>
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Таъсир этувчи модда:
                </span>{" "}
                {selectedProduct.productTwo.sarfUz}
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Кимёвий синфи:
                </span>{" "}
                Триазолпиримидинлар
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">
                  Препарат шакли:
                </span>{" "}
                Мойли дисперсия
              </p>
              <p className="text-md lg:text-md mb-4">
                <span className="font-semibold text-[16px]">Қадоқ:</span> 1 л.
              </p>
            </div>
          </div>
        )}

        <div className="w-full px-5 space-y-2 text-white">
          <h1 className="text-xl lg:text-3xl font-bold">Тариф</h1>
          <h3 className="font-semibold text-[18px]">Қўлланилиши:</h3>
          <p className="text-sm lg:text-[16px] mb-4">
            Ғалла, майсазорлар, беда ва шолини ўсиш даврида сув зоҳоти ва бошқа
            бегона ўтларга қарши қўлланилади.
          </p>
        </div>

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
                <td className="border-2 px-2 py-1 text-center">Шоли</td>
                <td className="border-2 px-2 py-1 text-center">
                  Бир йиллик ва кўп йиллик бошоқли, икки паллали ҳамда кенг
                  баргли ботқоқ бегона ўтлари
                </td>
                <td className="border-2 px-2 py-1 text-center">2.0-3.0</td>
                <td className="border-2 px-2 py-1 text-center">
                  Бегона ўтларнинг 2-3 барг-туплаш даврида ҳам тупроққа ёки
                  шолипояда сув сатҳи 5-10 см бўлганда пуркалади
                </td>
                <td className="border-2 px-2 py-1 text-center">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
