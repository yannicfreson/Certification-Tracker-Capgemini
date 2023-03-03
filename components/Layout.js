import React from "react";
import Link from "next/dist/client/link";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto flex h-[100vh] flex-col p-4 sm:p-8">
        <div className="flex-auto">{children}</div>
        {/* Nav bar for mobile */}
        {/* <nav className="absolute bottom-0 w-full block">
          <ul className="flex flex-row justify-around w-full">
            <li>
              <Link href="/feed">Feed</Link>
            </li>
            <li>
              <Link href="/reports">Reports</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Layout;
