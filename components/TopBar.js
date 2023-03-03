import React from "react";
import Link from "next/dist/client/link";
import CogIcon from "../icons/CogIcon";

const TopBar = ({ children }) => {
  return (
    <nav className="w-full flex flex-row h-8 justify-between">
      <img src="Capgemini_Logo_Leaf.png"></img>
      <Link href="/settings">
        <CogIcon className="w-8 h-8" stroke="currentColor" />
      </Link>
    </nav>
  );
};

export default TopBar;
