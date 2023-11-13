import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto py-4 ">
          <div className="lg:flex lg:justify-between items-center mb-4 flex lg:items-center  lg:mr-5  ">
            <div className="">
              <img
                src={"/img/logo.png"}
                alt=""
                className="h-20 w-28 lg:w-24 lg:h-24"
              />
            </div>
            <div className="lg:space-x-3 space-x-3 flex items-center ml-5 flex-wrap">
              <Link href={"/"}>Inicio</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contacto"}>Contacto</Link>
              <Link
                href={"/auth/login"}
                className="bg-teal-600 text-white hover:bg-teal-400 hover:text-black  py-2 px-3 rounded-xl"
              >
                Login
              </Link>
              <Link
                href={"/auth/register"}
                className="bg-teal-600 text-white hover:bg-teal-400 hover:text-black  py-2 px-3 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
