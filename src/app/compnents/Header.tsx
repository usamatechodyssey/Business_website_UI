"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <div>
      <header className="bg-[#043873] flex justify-between items-center text-white xm:h-[56px] p-[16px] md:h-[66px] pl-[32px] pr-[32px] lg:h-[92px]">
        <div className="xm:h-[24px] w-[134px] md:h-[34px] md:w-[191px]">
          <Link href="/">
            <Image
              src="/Logo.svg" // Ensure this file is in the `/public` folder
              alt="Logo"
              width={191}
              height={43}
              priority // Optimized for first load
            />
          </Link>
        </div>

        <div className="flex items-center gap-[75.5px]">
          <ul className="xm:hidden md:hidden lg:hidden xl:flex gap-[32px] items-center">
            <li>
              <Link href="#product">Products</Link>
            </li>
            <li>
              <Link href="#solution">Solutions</Link>
            </li>
            <li>
              <Link href="#resources">Resources</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>

          <div className="lg:flex gap-[20px]">
            <button className="font rounded-[8px] text-[black] bg-[#FFE492] h-[60px] w-[126px] justify-center items-center xm:hidden md:hidden lg:flex">
              Login
            </button>

            <button className="w-[227px] h-[60px] rounded-[8px] items-center justify-center bg-[#4F9CF9] xm:hidden md:hidden lg:flex">
              Try Whitepace free
            </button>

            <div className="xm:flex xl:hidden">
              <button
                className="xm:flex items-center justify-center"
                onClick={handleNavToggle}
              >
                <Image
                  src="/Btn.svg" // Ensure this file is in the `/public` folder
                  alt="Menu Button"
                  width={42}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
