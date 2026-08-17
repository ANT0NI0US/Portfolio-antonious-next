"use client";

import Logo from "@/components/common/Logo";
import { useState } from "react";
import BigScreenLinks from "./BigScreenLinks";
import SmallScreenLinks from "./SmallScreenLinks";
import ToggleSidebar from "./ToggleSidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <nav className="bg-main text-primary shadow-secondary h-20 w-full shadow-md drop-shadow-md">
        <div className="flexBetween container h-full gap-1">
          {/* LOGO */}
          <Logo />

          {/* LINKS IN BIG SCREENS */}
          <BigScreenLinks />

          {/* TOGGLE SIDEBAR */}
          <ToggleSidebar toggleSidebar={toggleSidebar} />
        </div>
      </nav>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </>
  );
}
