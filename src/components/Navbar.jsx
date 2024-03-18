import { appleImg } from "../utils";
import { searchImg } from "../utils";
import { bagImg } from "../utils";

import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex items-center w-full screen-max-width">
        <img
          src={appleImg}
          alt="Apple Logo"
          width={15}
          height={15}
          className="cursor-pointer"
        />

        <div className="flex flex-1 justify-center">
          {navLists.map((nav, i) => (
            <div
              key={nav}
              className="px-4 text-xs cursor-pointer text-gray hover:text-white transition-all max-lg:hidden"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="Search Image"
            width={15}
            height={15}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
