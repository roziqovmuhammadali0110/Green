import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-auto container px-[5%] py-9 flex-wrap">
        <div className="w-full md:w-[50%] space-y-3 mb-8 md:mb-0">
          <h1 className="font-semibold text-[30px] text-green-600">
            Компания ҳақида
          </h1>
          <div>
            <p className="font-medium text-[15px] sm:text-[13px] md:text-[15px]">
              Агро Аллианcе Груп 2014 йилда ташкил этилган бўлиб, синовдан ўтган
              ҳамда ишончли ўсимликларни ҳимоя қилиш воситалари ва органик ҳамда
              минерал ўғитларни қишлоқ хўжалиги соҳасида ўз ўрнига эга бўлган
              Сйнгента Агро АГ, ШАНДОНГ РАИНБОW АГРОСCИEНCEС CО., ЛТД, НАНЖИНГ
              ЭГРОW CРОП ПРОТECТИОН CО., ЛТД., ШАНДОНГ БИННОНГ ТEЧНОЛОГЙ CО.
              ЛТД., МАЖОР РEТАИЛ СУППЛИEС Л.П., АГРОCОМ Л.П., АДАФEР ГУБРE ВE
              ТEРИМ ИЛАCЛАРИ САН ЛТД, "Сакҳалин Гумат" компанияларидан етказиб
              беради. Ўзбекистон қишлоқ хўжалиги фермер ва деҳқонларига таклиф
              этаётган маҳсулотларимиз ўзига хос бўлиб, ҳозирда аналоглари йўқ.
              Бугунги кунгача ушбу маҳсулотлар Ўзбекистон Республикасида ишлаб
              чиқармайди ва фақат четдан олиб келинади. Қолаверса,
              маҳсулотларимизга талаб йилдан-йилга ортиб бормоқда. Маълум
              қиламизки, ғалла, пахта, боғ, сабзавот ва бошқа экинларни зарарли
              организмлардан ҳимоя қилиш учун барча зарур бўлган маҳсулотларимиз
              Тошкент, Самарқанд, Урганч, Фарғона, Андижон, Жиззах, Қарши, Навои
              ва Денов шаҳарларидаги омборларимизда мавжуд. Агро кластер, фермер
              ва деҳқонларга қулайлик яратиш мақсадида маҳсулотларимизни
              Республиканнинг турли ҳудудларига махсус дўкон ва омборхоналарига
              етказиб бераяпмиз.
            </p>
          </div>
          <div>
            <NavLink to="/about">
              <button className="text-green-600 font-medium">Батафсил</button>
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center border p-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=duDOjHJ1j5w"
            controls
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
