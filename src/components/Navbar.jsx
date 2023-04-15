import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("hidden");

  return (
    <div className="py-4 lg:flex lg:justify-between lg:items-center">
      <div className="flex justify-between items-center lg:block">
        <img src={logo} alt="" />
        <img
          className="w-14 cursor-pointer lg:hidden"
          onClick={() => {
            menu === "hidden" ? setMenu("absolute") : setMenu("hidden");
          }}
          src={hamburger}
          alt=""
        />
      </div>
      <div
        className={`${menu} bg-customBlack-700 inset-x-20 top-14 py-4 lg:flex lg:bg-inherit lg:space-x-6 lg:m-0 lg:p-0`}
      >
        <a href="#">
          <p className="py-2">Home</p>
        </a>
        <a href="#">
          <p className="py-2">What is GPT?</p>
        </a>
        <a href="#">
          <p className="py-2">Open AI</p>
        </a>
        <a href="#">
          <p className="py-2">Case Studies</p>
        </a>
        <a href="#">
          <p className="py-2">Library</p>
        </a>
      </div>
      <div
        className={`${menu} bg-customBlack-700 inset-x-20 top-72 py-4 lg:flex lg:bg-inherit lg:p-0 lg:m-0 lg:space-x-6`}
      >
        <a href="#">
          <p className="py-2"> Sign in</p>
        </a>
        <a href="#">
          <p className="bg-customOrange-500 px-4 py-2 rounded">Sign up</p>
        </a>
      </div>
    </div>
  );
}
