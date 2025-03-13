// import React from 'react'
import { useState } from "react"
import { assets } from "../assets/assets"
import { NavLink, Link } from "react-router-dom"



const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-6 flex items-center justify-between font-medium bg-slate-900 flex-wrap fixed top-0 left-0 w-full z-50">
      <h1 className="text-white text-3xl">MOCKINT</h1>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {/* Adjust NavLink hover effect */}
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-white">ASOSIY</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/directions" className="flex flex-col items-center gap-1">
          <p className="text-white">YO'NALISHLAR</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-white">LOYIHA HAQIDA</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/experts" className="flex flex-col items-center gap-1">
          <p className="text-white">MUTAXASSISLAR</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search}
          className="w-5 cursor-pointer hidden md:block sm:block"
          alt=""
        />
        <div className="group relative">
          <Link to="/login">
            <img className="w-5 cursor-pointer" src={assets.person} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <div className="flex gap-3">
                  <img
                    className="w-4 h-[17px]  mt-2"
                    src={assets.profile_icon}
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-black mt-1">Profil</p>
                </div>
                <div className="flex gap-2">
                  <img className="w-5 h-5" src={assets.interview} alt="" />
                  <p className="cursor-pointer hover:text-black">
                    Interviewlar
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    className="w-4 h-4 mt-1"
                    src={assets.logOut}
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-red-500">Chiqish</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/contact" className="relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.support}
            alt=""
          />
        </Link>
        <Link to="/faq" className="relative hidden md:block">
          <img
            className="w-6 cursor-pointer"
            src={assets.faq}
            alt=""
          />
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar for small screens */}
      {/* <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gradient-to-r bg-[rgb(42,112,56)] bg-opacity-60 transition-all duration-500 delay-300 ease-in-out ${
          visible ? "w-[68%] translate-x-0 " : "w-0"
        }`}
      >
        <div className="flex flex-col text-white overflow-x-hidden min-w-0">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>ORQAGA</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-10"
            to="/"
          >
            ASOSIY{" "}
            <hr className="w-14 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-10"
            to="/directions"
          >
            YO'NALISHLAR{" "}
            <hr className="w-2/5 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-10"
            to="/about"
          >
            LOYIHA HAQIDA{" "}
            <hr className="w-2/5 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-10"
            to="/experts"
          >
            MUTAHASISSLAR{" "}
            <hr className="w-2/5 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
          </NavLink>
        </div>
      </div> */}
      <div
  className={`absolute top-0 right-0 bottom-0 bg-slate-900  bg-opacity-90 transition-transform duration-300 ease-in-out ${
    visible ? "translate-x-0 w-[70%]" : "translate-x-full w-0"
  } min-h-screen z-50`}
>
  <div className="flex flex-col text-white overflow-x-hidden min-w-0">
    {/* Back Button */}
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-4 p-3 cursor-pointer text-white hover:text-gray-300 transition duration-200"
    >
      <img
        className="h-4 rotate-180"
        src={assets.dropdown_icon}
        alt="Close Sidebar"
      />
      <p>ORQAGA</p>
    </div>

    {/* Sidebar Links */}
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 px-6 text-white hover:text-gray-300 transition duration-200"
      to="/"
    >
      ASOSIY
      <hr className="w-14 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
    </NavLink>
    
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 px-6 text-white hover:text-gray-300 transition duration-200"
      to="/directions"
    >
      YO'NALISHLAR
      <hr className="w-24 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 px-6 text-white hover:text-gray-300 transition duration-200"
      to="/about"
    >
      LOYIHA HAQIDA
      <hr className="w-24 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 px-6 text-white hover:text-gray-300 transition duration-200"
      to="/experts"
    >
      MUTAHASISSLAR
      <hr className="w-24 border-none h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
    </NavLink>
  </div>
</div>

    </div>
  );
};

export default Navbar;

