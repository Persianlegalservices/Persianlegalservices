// components/Navbar.tsx
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b container mx-auto border-gray-200  lg:h-24 flex items-center ">
      <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className=" text-center text-sm ">
          <p className="text-gray-600 text-sm">
            14 Broad Foundry Trumpers Way,London W7 2QP
          </p>
          <p className="  font-semibold text-primary-400 text-sm">
            00447949362425
          </p>
        </div>

        {/* Logo Section */}
        <div className="text-center text-sm">
          <Image src="/images/Pls.webp" alt="logo" width={100} height={100} />
        </div>

        {/* Right Section */}
        <div className=" lg:block text-center text-sm">
          <p className=" text-gray-600 text-sm">
            Office Hours: 09:00am - 17:00pm
          </p>
          <p className=" text-primary-400 text-sm font-semibold">
            Info@persianlegalservices.com
          </p>
        </div>

        {/* Hamburger Menu Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
