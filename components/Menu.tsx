"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "./MenuIcon";
import Link from "next/link";

const Menu = ({ classProperties }: {classProperties: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      display: "block",
      transition: { staggerChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      transitionEnd: { display: "none" },
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <div className={classProperties}>
      <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} />
      <motion.div
        className="menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <motion.ul>
          {[
            ["Home", "#home-section"],
            ["About", "#about-section"],
            ["Experiences", "#experiences-section"],
            ["Projects", "#projects-section"],
          ].map(([title, url], idx) => (
            <motion.li key={idx}>
              <Link
                href={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 hover:text-slate-900 sm:text-base md:text-2xl"
              >
                {title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Menu;
