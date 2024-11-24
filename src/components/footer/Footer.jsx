import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandFacebook } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import logo from "../../assets/img/logo1.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full bg-green-600 text-white">
      <div className="container mx-auto pt-7 px-[5%] py-[1%]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-10">
          {/* Logo Section */}
          <div className="rounded-sm rounded-tr-[30px] rounded-bl-[30px] bg-slate-100 p-1 w-[250px]">
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

          {/* Address Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-100">Manzil</h3>

            <p>Toshkent shahar, Begubor ko‘chasi 24</p>
          </div>

          {/* Contact Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-100">Aloqa</h3>
            <div className="flex items-center gap-3 font-medium text-white justify-center md:justify-start">
              <div className="flex-col flex ">
                <button>+998900624341</button>
                <button>+998998210018</button>
                <button>+998998510018</button>
              </div>
            </div>
            <p className="text-green-100">Info@Infoda.uz</p>
          </div>

          {/* Social Media Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-100">
              Bizni ijtimoiy tarmoqlarda
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
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
            <p className="text-green-100">Info@Infoda.uz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
