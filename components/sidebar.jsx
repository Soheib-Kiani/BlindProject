/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiCctv } from 'react-icons/bi';

import {
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlinePresentationChartLine,
} from 'react-icons/hi';
import Videoloadhh from './report';
import Report from './report';
const Sidebar = ({ toggle }) => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "کزارش", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Inbox", src: "Chat" },
    //   { title: "Accounts", src: "User", gap: true },
    ];
  return (
    // <div className="bg-white w-[200px] h-screen  text-gray-700 py-4 border-l-2 border-gray-200">
    //   <div className="justify-center my-2 items-center justify-items-center w-full text-center">
    //     <div className="h-[120px] w-[120px] bg-blue-50 border-2 border-black rounded-full relative mx-auto"></div>
    //     <h3>username</h3>
    //   </div>
    //   <ul className="px-4 space-y-2  font-semibold">
    //     <li>
    //       <Link
    //         href="/admin/main"
    //         className="flex space-x-2 text-white items-center hover:text-blue-700"
    //       >
    //         <HiOutlineEye className="mx-2"></HiOutlineEye>
    //         <span>پخش زنده</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/admin/main"
    //         className="flex space-x-2 items-center  hover:text-blue-700"
    //       >
    //         <HiOutlinePresentationChartLine className="mx-2"></HiOutlinePresentationChartLine>
    //         <span>گزارشات </span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/admin/main"
    //         className="flex space-x-2  items-center hover:text-blue-700"
    //       >
    //         <BiCctv className="mx-2"></BiCctv>
    //         <span>تنظیمات دوربین </span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/admin/main"
    //         className="flex space-x-2 items-center  hover:text-blue-700"
    //       >
    //         <HiOutlineUserGroup className="mx-2"></HiOutlineUserGroup>
    //         <span>مدیریت کاربران</span>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    <div className="flex bg-gray-700">
      <div
        className={` ${
          open ? "w-auto" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/icon/control.png"
          className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/icon/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/icon/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};

export default Sidebar;
