import React, { useEffect } from "react";
import useStore from "../../../store/useStore";
import dayjs from "dayjs";
const News = () => {
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
              className="max-w-[450px] h-[130px] rounded-lg flex items-center justify-between gap-4 bg-slate-100">
              <div className="p-1">
                <img
                  src={news.newPicture}
                  alt=""
                  className="h-[120px] rounded-l-lg w-[230px]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 h-full w-full">
                <h3 className="text-[#654848]">{news.titleUz}</h3>
                <p className="text-slate-700 text-[13px]">
                  {news.describtionUz}
                </p>
                <p className="text-green-500">
                  {" "}
                  {dayjs(news.date).format("DD.MM.YYYY")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
