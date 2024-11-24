import React, { useState } from "react";

// Har bir tab uchun alohida komponentlar
const Content1 = () => {
  return (
    <div className="p-4 text-lg text-gray-700">
      Agro Alliance Group 2014 yilda tashkil etilgan bo'lib, sinovdan o'tgan
      hamda ishonchli o'simliklarni himoya qilish vositalari va organik hamda
      mineral o'g'itlarni qishloq xo'jaligi sohasida o'z o'rniga ega bo'lgan
      Syngenta Agro AG, SHANDONG RAINBOW AGROSCIENCES CO., LTD, NANJING EGROW
      CROP PROTECTION CO., LTD., SHANDONG BINNONG TECHNOLOGY CO. LTD., MAJOR
      RETAIL SUPPLIES L.P., AGROCOM L.P., ADAFER GUBRE VE TERIM ILACLARI SAN
      LTD, "Sakhalin Gumat" kompaniyalaridan yetkazib beradi. O'zbekiston
      qishloq xo'jaligi fermer va dehqonlariga taklif etayotgan mahsulotlarimiz
      o'ziga xos bo'lib, hozirda analoglari yo'q. Bugungi kungacha ushbu
      mahsulotlar O'zbekiston Respublikasida ishlab chiqarmaydi va faqat chetdan
      olib kelinadi. Qolaversa, mahsulotlarimizga talab yildan-yilga ortib
      bormoqda. Ma'lum qilamizki, g'alla, paxta, bog', sabzavot va boshqa
      ekinlarni zararli organizmlardan himoya qilish uchun barcha zarur bo'lgan
      mahsulotlarimiz Toshkent, Samarqand, Urganch, Farg'ona, Andijon, Jizzax,
      Qarshi, Navoi va Denov shaharlaridagi omborlarimizda mavjud. Agro klaster,
      fermer va dehqonlarga qulaylik yaratish maqsadida mahsulotlarimizni
      Respublikanning turli hududlariga maxsus do'kon va omborxonalariga
      yetkazib berayapmiz.
    </div>
  );
};

const Content2 = () => {
  return (
    <div className="p-4 text-lg text-gray-700">Bu 2-tabning kontenti.</div>
  );
};

const Content3 = () => {
  return (
    <div className="p-4 text-lg text-gray-700">Bu 3-tabning kontenti.</div>
  );
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0); // Faol tabning indeksi
  const tabs = [
    { id: 0, label: "Biz haqimizda", content: <Content1 /> },
    { id: 1, label: "Agronomlar", content: <Content2 /> },
    { id: 2, label: "Sertifikatlar", content: <Content3 /> }
  ];
  return (
    <section>
      <div className="mx-auto container px-[5%] py-10">
        <h1 className="font-semibold text-green-500 text-[30px]">
          Agro Kimyo Himoya
        </h1>
        <div className="w-full max-w-4xl mx-auto mt-10">
          {/* Tabs Header */}
          <div className="flex border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 text-center font-semibold ${
                  activeTab === index
                    ? "border-b-4 border-blue-500 text-blue-500"
                    : "text-gray-600"
                } hover:text-blue-500`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="p-6 bg-gray-50 mt-4 rounded-b-lg shadow-md">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
