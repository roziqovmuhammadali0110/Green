import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandFacebook } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import logo from "../../assets/img/logo1.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer w-full h-[300px]">
      <div className="container mx-auto pt-7 px-[5%] py-[1%]">
        <div className="flex items-center justify-between ">
          <div className="rounded-lg rounded-tr-[30px] rounded-bl-[30px] bg-slate-100 p-1 w-[250px]">
            <NavLink to="/" className="flex items-center justify-between gap-3">
              <img src={logo} alt="logo" className="rounded-[17px] w-[80px]" />
              <div className="w-full text-end">
                <h3 className="font-bold text-[#0E644D] text-start text-[28px]">
                  Agro<span className="text-green-500">Com</span>
                </h3>
                <span className="text-green-600 text-end w-full font-medium text-[12px] hover:text-slate-300">
                  Birgalikda erishamiz
                </span>
              </div>
            </NavLink>
          </div>
          <div className="font-normal text-white space-y-2">
            <h3 className="font-medium text-green-600">Manzil</h3>
            <p>Qarshi shahar, Begubor kochasi 24</p>
            <p>Toshkent shahar, Begubor kochasi 24</p>
          </div>
          <div className="font-normal text-white space-y-2">
            <h3 className="font-medium text-green-600">Aloqa</h3>
            <p>+998900624341</p>
            <p className="text-green-600">Info@Infoda.uz</p>
          </div>
          <div className="font-normal text-white space-y-2">
            <h3 className="font-medium text-green-600">
              Bizni ijtimoiy tarmoqlarda
            </h3>
            <div className="flex items-center justify-between">
              <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                <TbBrandFacebook />
              </div>
              <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                <RxInstagramLogo />
              </div>
              <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                <PiTelegramLogo />
              </div>
            </div>
            <p className="text-green-600">Info@Infoda.uz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
