
import * as React from "react";
import { SearchBar } from "./SearchBar";
import { NavigationIcons } from "./NavigationIcons";

export const Navigation: React.FC = () => {
  const navigationIcons = [
    {
      src: "/images/1.svg",
      alt: "Navigation icon 1",
      className: "w-11 rounded-none",
      link: "/details"
    },
    {
      src: "/images/2.svg",
      alt: "Navigation icon 2",
      className: "w-11 rounded-none",
      link: "/category"
    },
    {
      src: "/images/3.svg",
      alt: "Navigation icon 3",
      className: "w-11 rounded-none",
      link: "/admin"
    },
    {
      src: "/images/4.png",
      alt: "Profile icon",
      className: "w-11 rounded-[90px]",
      link: "/payment"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 py-6 bg-white border border-solid border-slate-300 border-opacity-40 shadow-md">
      {/* Logo and Search Bar */}
      <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
        <div className="text-3xl font-bold tracking-tighter text-[#3563E9]">
          MORENT
        </div>
        <div className="flex-grow md:flex-grow-0">
          <SearchBar />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center gap-5">
        <NavigationIcons icons={navigationIcons} />
      </div>
    </div>
  );
};



































