import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="absolute z-20 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden cursor-pointer max-lg:block"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
      <div className={`max-lg:block hidden fixed h-full p-28 bg-coral-red top-0 ${openMenu?"  left-0 right-0":"left-full right-0"} transition-all duration-300`}>
        <ul className="flex flex-col items-center justify-center flex-1 gap-16">
          <div className="absolute text-base font-bold leading-normal text-white cursor-pointer top-8 right-20 sm:text-lg font-montserrat" onClick={()=>setOpenMenu(false)}>X</div>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base leading-normal text-white sm:text-lg font-montserrat"
                onClick={()=>setOpenMenu(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
