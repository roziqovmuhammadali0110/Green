import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/img/Logo final-07.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-green-600">
      <div className="container mx-auto px-[5%] xs:pb-[3%] py-[1%]">
        {/* Header */}
        <div className="flex items-center justify-between p-1 mb-3">
          {/* Logo and tagline */}
          <div className="rounded-sm rounded-tr-[55px] rounded-bl-[30px] bg-white p-1 h-[70px] w-[210px]">
            <NavLink to="/" className="flex items-center justify-between gap-2">
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
            <div className="md:hidden py-2 flex font-medium text-white gap-1">
              <p>Tel:</p>
              <a
                href="tel:+998998510018"
                className="text-white hover:underline">
                +998 99 851 00 18
              </a>
            </div>
          </div>

          {/* Contact and Language */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-3 font-medium text-white">
              <FiPhone />
              <div className="flex-col flex">
                <a
                  href="tel:+998998510018"
                  className="text-white hover:underline">
                  +998 99 851 00 18
                </a>
                <a
                  href="tel:+998998210018"
                  className="text-white hover:underline">
                  +998 99 821 00 18
                </a>
                <a
                  href="tel:+998772997700"
                  className="text-white hover:underline">
                  +998 77 299 77 00
                </a>
              </div>
            </div>
            <select
              className="w-[100px] bg-white text-green-800 p-2 rounded-lg font-medium"
              defaultValue="Uzb">
              <option value="Uzb">Uzb</option>
              <option value="Rus">Rus</option>
            </select>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block bg-green-600 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:justify-between md:items-center text-[18px] font-normal gap-6 text-white">
            <li className="relative group">
              <NavLink
                to="/"
                className="text-white font-bold hover:text-slate-300">
                Бош саҳифа
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink to="#" className="font-bold hover:text-slate-300">
                Компания
              </NavLink>
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Компания ҳақида
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Филиалларимиз ҳақида
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Кадрлар ва бўш иш ўринлари
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <NavLink to="#" className="font-bold hover:text-slate-300">
                Махсулотларимиз
              </NavLink>
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="/catalog"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Ўсимликларни ҳимоя қилиш воситалари
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/catalog2"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Ўсимликларни озиқлантириш воситалар
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/blog" className="font-bold hover:text-slate-300">
                Блог
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/news"
                className="text-white font-bold hover:text-slate-300">
                Янгиликлар
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="#"
                className="text-white font-bold hover:text-slate-300">
                Медиа
              </NavLink>
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Фото
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Видео
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact" className="font-bold hover:text-slate-300">
                Алоқа
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="#"
                className="text-white font-bold hover:text-slate-300">
                Журнал
              </NavLink>
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="/journal"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Журнал
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Лифлет
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
