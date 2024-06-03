"use client";

import Image from "next/image";
import Link from "next/link";
import { ImArrowDown } from "react-icons/im";
import { motion } from "framer-motion";
import { getUrls } from "../app/getUrls";

const Main = () => {
  const urls = getUrls();

  return (
    <section
      id="home-section"
      className="flex justify-center items-center min-h-dvh"
    >
      <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#d0dce6]"></div>
      <div className="z-10 flex justify-center items-center flex-col gap-5">
        <h3 className="uppercase text-base font-extrabold tracking-[4px] text-blue-800">
          Hey! I am
        </h3>
        <h1 className="font-extrabold text-5xl lg:text-7xl tracking-wider">
          Jung Lee
        </h1>
        <div className="flex gap-4 mt-8">
          <Link
            href={urls.LinkedIn}
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin-page"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>
          <Link href={urls.github} target="_blank">
            <Image
              src="/github.svg"
              alt="github-page"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>
        </div>
      </div>

      <Link
        href="#about-section"
        className="flex justify-center items-center w-16 h-16 absolute bottom-32 after:bg-[#d0dce6] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-full"
      >
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="z-10"
        >
          <ImArrowDown className="z-10 text-blue-800" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Main;
