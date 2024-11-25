import React, { useState } from "react";

// Har bir tab uchun alohida komponentlar
const Content1 = () => {
  return (
    <div className="p-4 text-lg text-gray-700">
      Маълумки, мамлакатимизда қишлоқ хўжалиги соҳасига бўлган эътибор тобора
      ортиб, шиддат билан ривожланиб бормоқда. Агрокластерлар, фермер
      хўжаликлари ва бошқа замонавий ташаббусларнинг жорий этилиши бу соҳадаги
      ислоҳотларнинг яққол мисолидир. Ҳозирги даврда сифатли озиқ-овқат
      маҳсулотларини етиштириш, аҳолининг саломатлиги ва хавфсизлигини таъминлаш
      устувор аҳамият касб этмоқда. Шу мақсадда "AgroCom" компанияси таркибидаги
      “Agro Alliance Group” ва “Agro Aziya Group” МЧЖлари қишлоқ хўжалигида
      замонавий талабларга жавоб берадиган самарали маҳсулотларни етказиб бериб
      келмоқда. Жумладан, ўсимликларни зараркунандалар, касалликлар ва бегона
      ўтлардан ҳимоя қилишга мўлжалланган кимёвий ва биологик маҳсулотлар
      (инсектицидлар, гербицидлар, фунгицидлар ва акарицидлар), органик ҳамда
      минерал ўғитлар, биостимуляторлар ишлаб чиқарилади ва тарқатилади.
      Компаниянинг мақсади — фермерлар ва деҳқон хўжаликларини замонавий
      воситалар билан таъминлаш орқали қишлоқ хўжалик экинларини ҳимоя қилиш,
      ҳосилдорликни ошириш ва маҳсулот сифатини янада юқори даражага кўтаришдан
      иборат. Шу билан бирга, атроф-муҳитга зарар етказмаслик ҳам асосий
      тамойиллардан биридир. Биз доимий равишда инновацион ечимларни жорий этиш
      ва фермерларнинг меҳнатини самарали қилиш учун барча имкониятларни ишга
      соламиз. Ҳар бир фермер ва деҳқон учун ишончли ҳамкор бўлишга
      интилмоқдамиз.
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
