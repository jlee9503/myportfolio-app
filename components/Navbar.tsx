"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const isBrowser = () => typeof window !== "undefined";

const scrollToTop = () => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed z-50 top-0 px-[7%] py-[4%] lg:py-[2%] w-full flex justify-between items-center ${
          scrollY > 150
            ? "bg-white shadow-md transition-all duration-500 ease-in-out"
            : "bg-transparent transition-all duration-500 ease-in-out"
        }`}
      >
        <Link href="/" onClick={scrollToTop}>
          <Image
            src="/logo-light.png"
            alt="logo-img"
            width={80}
            height={30}
            className="object-cover"
          />
        </Link>
        <Menu classProperties="block lg:hidden" />
        <div className="hidden lg:block">
          {[
            ["Home", "#home-section"],
            ["About", "#about-section"],
            ["Experiences", "#experiences-section"],
            ["Projects", "#projects-section"],
          ].map(([title, url], idx) => (
            <Link
              key={idx}
              href={url}
              className="rounded-lg px-3 py-2 mr-4 last:mr-0 text-slate-700 font-medium hover:bg-slate-200 hover:text-slate-900"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
