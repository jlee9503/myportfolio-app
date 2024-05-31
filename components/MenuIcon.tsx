interface MenuIconInterface {
  toggleMenu: () => void;
  isOpen: boolean;
}

import React from "react";
import { motion } from "framer-motion";

const MenuIcon = ({ toggleMenu, isOpen }: MenuIconInterface) => {
  return (
    <div
      onClick={toggleMenu}
      className="cursor-pointer bg-blue-900 p-3 rounded-md"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        className="menubar"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        className="menubar"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
        className="menubar"
      />
    </div>
  );
};

export default MenuIcon;