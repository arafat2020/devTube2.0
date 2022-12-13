import React from "react";
import Menu from "../components/Menu";
import VIdeoBox from "../components/VIdeoBox";

function index() {
  return (
    <div className="scrollbar-hide">
      <main className="flex p-3 space-x-2 ">
        <Menu />
        <VIdeoBox />
      </main>
    </div>
  );
}

export default index;
