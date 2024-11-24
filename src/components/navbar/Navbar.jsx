//import logo from "../../assets/img/man-holding-plant-pot.svg";
import { NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
// import plant from "../../assets/img/plant.svg";
import logo from "../../assets/img/logo1.webp";
const Navbar = () => {
  return (
    <div className="w-full bg-green-600">
      <div className="container mx-auto px-[5%] py-[1%]">
        {/* Header */}
        <div className="flex items-center justify-between p-1 mb-3">
          {/* Logo and tagline */}
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

          {/* Contact and Language */}
          <div className="flex items-center gap-7">
            <button className="flex items-center gap-3 font-medium text-white">
              <FiPhone />
              +998900624341
            </button>
            <select
              className="w-[100px] bg-white text-green-800 p-1 rounded-lg font-medium"
              defaultValue="Uzb">
              <option value="Uzb">Uzb</option>
              <option value="Rus">Rus</option>
            </select>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center justify-between text-[18px] font-normal gap-6 text-white">
            <li className="relative group">
              <NavLink
                to="/"
                className="text-white font-bold hover:text-slate-300">
                Bosh sahifa
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink to="/about" className="font-bold hover:text-slate-300">
                Kompanya
              </NavLink>
              {/* Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Kompanya haqida
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Strategyalar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Filiallarimiz haqida
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Kadrlar va bosh ish orinlari
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <NavLink to="/catalog" className="font-bold hover:text-slate-300">
                Maxsulotlarimiz
              </NavLink>
              {/* Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Osimliklarni himoya qilish vositalari
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Ogitlar
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <NavLink
                to="/blog"
                className="text-white font-bold hover:text-slate-300">
                Blog
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="#"
                className="text-white font-bold hover:text-slate-300">
                Yangiliklar
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="#"
                className="text-white font-bold hover:text-slate-300">
                Media
              </NavLink>
              {/* Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Foto
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Video
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 font-bold hover:bg-gray-500 rounded-lg">
                Aloqa
              </NavLink>
            </li>
            <li className="relative group">
              <NavLink
                to="#"
                className="text-white font-bold hover:text-slate-300">
                Jurnal
              </NavLink>
              {/* Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-green-400 shadow-lg p-4 rounded-lg z-10">
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Agro jurnali
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-500 rounded-lg">
                    Liflet
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
