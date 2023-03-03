import React from "react";
import Link from "next/dist/client/link";
import FeedIcon from "../icons/FeedIcon";
import ReportsIcon from "../icons/ReportsIcon";
import ProfileIcon from "../icons/ProfileIcon";

const Nav = ({ children }) => {
  return (
    <nav className="block w-full">
      <ul className="flex flex-row justify-between w-full">
        <li>
          <Link href="/feed">
            <FeedIcon className="w-8 h-8" stroke="currentColor" />
          </Link>
        </li>
        <li>
          <Link href="/reports">
            <ReportsIcon className="w-8 h-8" stroke="currentColor" />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <ProfileIcon className="w-8 h-8" stroke="currentColor" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
