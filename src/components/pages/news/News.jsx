import React, { useEffect, useState } from "react";
import useStore from "../../../store/useStore";
import dayjs from "dayjs";

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const { newsS, loading, error, fetchNewsS } = useStore();

  useEffect(() => {
    fetchNewsS(); // TO‘G‘RI chaqirish
  }, [fetchNewsS]);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }
  if (error) {
    return <p>Xatolik: {error}</p>;
  }

  console.log(newsS);
  return (
    <section>
      <div className="px-[5%] container mx-auto font-medium py-10">
        <div>
          <h1 className=" text-slate-700 text-[20px] py-5">
            Янгиликларни кузатиб боринг
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-center">
          {newsS.map((news) => (
            <div
              key={news.id}
              className="max-w-[450px] h-[170px] rounded-lg flex items-center justify-between gap-4 bg-slate-100">
              <div className="p-1">
                <img
                  src={news.newPicture}
                  alt=""
                  className="h-[130px] rounded-l-lg w-[230px]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-[2px] h-full w-full">
                <h3 className="text-[#654848]">{news.titleUz}</h3>
                <p className="text-slate-700 text-[13px]">
                  {news.describtionUz}
                </p>
                <p className="text-green-500">
                  {dayjs(news.date).format("DD.MM.YYYY")}
                </p>
                <button
                  onClick={() => {
                    setSelectedNews(news);
                    setIsOpen(true);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Батафсил
                </button>
              </div>
            </div>
          ))}
          {isOpen && selectedNews && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedNews.titleUz}
                </h2>
                <img
                  src={selectedNews.newPicture}
                  alt=""
                  className="w-full rounded-md mb-4"
                />
                <p className="text-gray-600">{selectedNews.describtionUz}</p>
                <p className="text-green-500 mt-2">
                  {dayjs(selectedNews.date).format("DD.MM.YYYY")}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
