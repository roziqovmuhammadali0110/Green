import React, { useState } from "react";

import kompImg from "../../../assets/img/kompImg.jpg";
import kompImg2 from "../../../assets/img/kompImg2.jpg";
import kompImg3 from "../../../assets/img/Logo final-07.png";
// Har bir tab uchun alohida komponentlar
const Content1 = () => {
  return (
    <div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        Маълумки, мамлакатимизда қишлоқ хўжалиги соҳасига бўлган эътибор тобора
        ортиб, шиддат билан ривожланиб бормоқда. Агрокластерлар, фермер
        хўжаликлари ва бошқа замонавий ташаббусларнинг жорий этилиши бу соҳадаги
        ислоҳотларнинг яққол мисолидир. Ҳозирги даврда сифатли озиқ-овқат
        маҳсулотларини етиштириш, аҳолининг саломатлиги ва хавфсизлигини
        таъминлаш устувор аҳамият касб этмоқда. Шу мақсадда "AgroCom" компанияси
        таркибидаги “Agro Alliance Group” ва “Agro Aziya Group” МЧЖлари қишлоқ
        хўжалигида замонавий талабларга жавоб берадиган самарали маҳсулотларни
        етказиб бериб келмоқда. Жумладан, ўсимликларни зараркунандалар,
        касалликлар ва бегона ўтлардан ҳимоя қилишга мўлжалланган кимёвий ва
        биологик маҳсулотлар (инсектицидлар, гербицидлар, фунгицидлар ва
        акарицидлар), органик ҳамда минерал ўғитлар, биостимуляторлар қишлоқ
        хўжалиги соҳасида ўзининг инновацион усулларда ишлаб чиқарилган
        махсулотлари билан танилган компаниялардан келтирилади ва тарқатилади.
        Компаниянинг мақсади — фермерлар ва деҳқон хўжаликларини замонавий
        воситалар билан таъминлаш орқали қишлоқ хўжалик экинларини ҳимоя қилиш,
        ҳосилдорликни ошириш ва маҳсулот сифатини янада юқори даражага
        кўтаришдан иборат. Шу билан бирга, атроф-муҳитга зарар етказмаслик ҳам
        асосий тамойиллардан биридир. Биз доимий равишда инновацион ечимларни
        жорий этиш ва фермерларнинг меҳнатини самарали қилиш учун барча
        имкониятларни ишга соламиз. Ҳар бир фермер ва деҳқон учун ишончли ҳамкор
        бўлишга интилмоқдамиз.
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg3} alt="kompImg" className="w-[450px]" />
      </div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        <span className="font-bold xs:text-lg md:text-xl">
          Agro Alliance Group
        </span>{" "}
        2014 йилда ташкил этилган бўлиб, синовдан ўтган ҳамда ишончли
        ўсимликларни ҳимоя қилиш воситалари ва органик ҳамда минерал ўғитларни
        қишлоқ хўжалиги соҳасида ўз ўрнига эга бўлган Syngenta Agro AG, SHANDONG
        RAINBOW AGROSCIENCES CO., LTD, NANJING EGROW CROP PROTECTION CO., LTD.,
        SHANDONG BINNONG TECHNOLOGY CO. LTD., MAJOR RETAIL SUPPLIES L.P.,
        AGROCOM L.P., ADAFER GUBRE VE TERIM ILACLARI SAN LTD, Сахалин Гумат
        компанияларидан етказиб беради. Ўзбекистон қишлоқ хўжалиги фермер ва
        деҳқонларига таклиф этаётган маҳсулотларимиз ўзига хос бўлиб, ҳозирда
        аналоглари йўқ. Бугунги кунга қадар ушбу маҳсулотлар Ўзбекистон
        Республикасида ишлаб чиқарилмайди ва фақат четдан олиб келинади.
        Қолаверса, маҳсулотларимизга талаб йилдан-йилга ортиб бормоқда. Маълум
        қиламизки, ғалла, пахта, боғ, сабзавот ва бошқа экинларни зарарли
        организмлардан ҳимоялаш учун барча зарур бўлган маҳсулотларимиз Тошкент,
        Самарқанд, Урганч, Фарғона, Андижон, Жиззах, Қарши, Навоий ва Денов
        шахарларидаги омборларимизда мавжуд. Агро кластер, фермер ва деҳқонларга
        қулайлик яратиш мақсадида маҳсулотларимизни Республиканинг турли
        ҳудудларига махсус дўкон ва омборхоналарига етказиб бераяпмиз.
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg} alt="kompImg" />
      </div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        <span className="font-bold xs:text-lg md:text-xl">
          Agro Aziya Group
        </span>{" "}
        2017 йилда ташкил топган бўлиб, хорижий давлат компанияларидан импорт
        қилинган ўсимликларни ҳимоя қилиш воситаларини “Ўзбекистон Республикаси
        қишлоқ хўжалигида ўсимлик зараркунандалари, касалликларига ва бегона
        ўтларга қарши фойдаланиш учун рухсат этилган кимёвий ва биологик ҳимоя
        воситалари, дефолиантлар ҳамда ўсимликларнинг ўсишини бошқарувчи
        воситалар рўйхати”га киритиш билан шуғулланади. Компания ҳозирги вақтга
        қадар инсектисидлардан 25 та, фунгицидлардан 15 та, гербицидлардан 21
        та, уруғдорилагич препаратлардан 4 та, дефолиант ва десикантлардан 2 та,
        ўсимликларни ўсишини бошқарувчи воситалардан 4 та, жами 71 та препаратни
        рўйхатга киритишга эришди. Яна бир неча ўнлаб препаратларнинг синов
        тажрибалари ўтказилмоқда ва рўйхатга киритиш устида ишлар олиб
        борилмоқда.
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg2} alt="kompImg2" />
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0); // Faol tabning indeksi
  const tabs = [{ id: 0, label: null, content: <Content1 /> }];
  return (
    <section>
      <div className="mx-auto container px-[5%] py-10">
        <h1 className="font-semibold text-green-500 text-[30px]">
          Компания ҳақида
        </h1>
        <div className="w-full mt-10">
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
          <div className="p-6 xs:p-1 md:p-6 bg-[#F7F7F7] mt-4 rounded-b-lg shadow-md">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
