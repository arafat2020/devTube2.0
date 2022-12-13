import { Search } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { defaultAvater } from "../dummy_data/movie";
import { devContext } from "../provider/DevProvider";

const Nav = () => {
  const searchRef = useRef(null);
  const [term, setTerm] = useState(false);
  const ctx = useContext(devContext);
  const router = useRouter();

  const searchHAnseler = async () => {
    await ctx.setTerm("");
    await ctx.setTerm(searchRef.current.value);
    router.push("/");
  };
  useEffect(() => {
    const yt_form = document.getElementById("yt_form");

    yt_form.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchHAnseler();
        yt_form.value = "";
      }
    });
  }, []);
  return (
    <header className="w-screen sticky top-0 bg-white z-50">
      <div className="flex p-1 sm:p-2 items-center justify-between">
        <Link href="/">
          <div className="w-[8%] sm:w-[15%]">
            <h1>
              <span className="text-xl md:text-4xl">d</span>
              <span className="text-xl md:text-4xl">e</span>
              <span className="text-xl md:text-4xl">v</span>
              <span className="text-2xl md:text-5xl font-bold">T</span>
              <span className="text-2xl md:text-5xl font-bold">u</span>
              <span className="text-2xl md:text-5xl font-bold">b</span>
              <span className="text-2xl md:text-5xl font-bold">e</span>
            </h1>
          </div>
        </Link>
        <div className="w-[60%] sm:w-[65%] border flex shadow-md  items-center rounded-full">
          <input
            ref={searchRef}
            className="flex-grow shadow-inner  sm:p-2 border outline-none rounded-full "
            id="yt_form"
            type="text"
            placeholder="   Search Video"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={searchHAnseler}
            className={` hidden sm:inline-flex font-bold transition duration-300 text-slate-800 ${
              term ? "md:inline-flex" : "hidden"
            }`}
          >
            <span className="hidden sm:inline-flex">
              {" "}
              <Search />
            </span>
          </Button>
        </div>
        <div className={`w-[5%] flex items-center justify-around `}>
          <Avatar
            className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]"
            alt="ava"
            src={defaultAvater}
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
