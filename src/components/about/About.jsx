import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-auto container px-[5%] py-9 flex-wrap">
        <div className="w-full md:w-[50%] space-y-3 mb-8 md:mb-0">
          <h1 className="font-semibold text-[30px] text-green-600">
            Kompaniya haqida
          </h1>
          <div>
            <p className="font-medium text-[15px]">
              Agro Alliance Group 2014 yilda tashkil etilgan bo'lib, sinovdan
              o'tgan hamda ishonchli o'simliklarni himoya qilish vositalari va
              organik hamda mineral o'g'itlarni qishloq xo'jaligi sohasida o'z
              o'rniga ega bo'lgan Syngenta Agro AG, SHANDONG RAINBOW
              AGROSCIENCES CO., LTD, NANJING EGROW CROP PROTECTION CO., LTD.,
              SHANDONG BINNONG TECHNOLOGY CO. LTD., MAJOR RETAIL SUPPLIES L.P.,
              AGROCOM L.P., ADAFER GUBRE VE TERIM ILACLARI SAN LTD, "Sakhalin
              Gumat" kompaniyalaridan yetkazib beradi. O'zbekiston qishloq
              xo'jaligi fermer va dehqonlariga taklif etayotgan mahsulotlarimiz
              o'ziga xos bo'lib, hozirda analoglari yo'q. Bugungi kungacha ushbu
              mahsulotlar O'zbekiston Respublikasida ishlab chiqarmaydi va faqat
              chetdan olib kelinadi. Qolaversa, mahsulotlarimizga talab
              yildan-yilga ortib bormoqda. Ma'lum qilamizki, g'alla, paxta,
              bog', sabzavot va boshqa ekinlarni zararli organizmlardan himoya
              qilish uchun barcha zarur bo'lgan mahsulotlarimiz Toshkent,
              Samarqand, Urganch, Farg'ona, Andijon, Jizzax, Qarshi, Navoi va
              Denov shaharlaridagi omborlarimizda mavjud. Agro klaster, fermer
              va dehqonlarga qulaylik yaratish maqsadida mahsulotlarimizni
              Respublikanning turli hududlariga maxsus do'kon va omborxonalariga
              yetkazib berayapmiz.
            </p>
          </div>
          <div>
            <NavLink to="/about">
              <button className="text-green-600 font-medium">Batafsil</button>
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
