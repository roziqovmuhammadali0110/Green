import React, { useState } from "react"; // Ensure useState is imported
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandFacebook } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import logo from "../../assets/img/Logo final-07.png";
import { NavLink } from "react-router-dom";
import ModalForm from "../modal/ModalForm";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // Declare state for modal visibility

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility on button click
  };

  return (
    <div className="footer w-full bg-green-600 text-white">
      <div className="container mx-auto pt-7 px-[5%] py-[1%]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-10">
          {/* Logo Section */}
          <div className="rounded-sm rounded-tr-[55px] rounded-bl-[30px] bg-white p-1 h-[70px] w-[210px]">
            <NavLink to="/" className="flex items-center justify-between gap-3">
              <img
                src={logo}
                alt="logo"
                className="rounded-[17px] w-[80px] h-[55px]"
              />
              <div className="w-full text-end">
                <h3 className="font-bold text-[#0E644D] text-start text-[26px]">
                  Agro<span className="text-green-500">Com</span>
                </h3>
                <span className="text-green-600 text-end w-full font-medium text-[12px] hover:text-slate-300">
                  Ishonchli himoya
                </span>
              </div>
            </NavLink>
          </div>
          {/* Address Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-500">Манзил</h3>
            <p className="max-w-[300px]">
              Тошкент Шахар, Мирзо Улуғбек тумани, Сайрам МФЙ, Ясси кўчаси, 38
              уй
            </p>
          </div>
          {/* Contact Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-500">Алоқа</h3>
            <div className="flex items-center gap-3 font-medium text-white justify-center md:justify-start">
              <div className="flex-col flex">
                <a
                  href="tel:+998998510018"
                  className="text-white hover:underline">
                  +998998510018
                </a>
                <a
                  href="tel:+998998210018"
                  className="text-white hover:underline">
                  +998998210018
                </a>
                <a
                  href="tel:+998772997700"
                  className="text-white hover:underline">
                  +998772997700
                </a>
              </div>
            </div>
            <a href="mailto:info@aag-group.uz" className="text-green-500">
              info@aag-group.uz
            </a>
          </div>
          {/* Social Media Section */}
          <div className="font-normal text-white space-y-2 text-center md:text-left">
            <h3 className="font-medium text-green-500">
              Бизни ижтимоий тармоқларда
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="https://www.facebook.com/100090505449159/">
                <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                  <TbBrandFacebook />
                </div>
              </a>
              <a href="https://www.instagram.com/agrocom_uz?igsh=OXRyOTA3YXo5enhq">
                <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                  <RxInstagramLogo />
                </div>
              </a>
              <a href="https://t.me/agrocomguruh">
                <div className="w-[35px] h-[35px] flex items-center justify-center p-1 rounded-md border border-slate-300">
                  <PiTelegramLogo />
                </div>
              </a>
            </div>

            {/* Footer Button to Open Modal */}
            <button
              onClick={toggleModal} // Open modal when button is clicked
              className="text-green-500 font-medium px-2 py-2 rounded-lg hover:text-green-600">
              КАЙТА АЛОКА УЧУН АРИЗА
            </button>
          </div>
          {/* Modal Form */}
          {isOpen && <ModalForm toggleModal={toggleModal} />}{" "}
          {/* Render modal when isOpen is true */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
