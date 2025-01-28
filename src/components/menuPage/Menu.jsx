import React from "react";
import logoimage from "../../assets/Logo_image.png";
import menusymbol from "../../assets/menusymbol.png";
import crossimage from "../../assets/crossimage4.png";
import { motion } from "framer-motion";

const Menu = (props) => {
  const { menuOpened, setMenuOpened, setisShowoverlay, isShowoverlay } = props;

  const menuchangehandler = () => {
    setisShowoverlay(!isShowoverlay);
    setTimeout(() => {
      setMenuOpened(!menuOpened);
    }, 1000);
  };

  return (
    <div className="menuicondiv p-2  z-20 fixed top-8 flex justify-between items-center">
      <motion.img
        src={logoimage}
        alt="logoimage"
        className="w-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.img
        onClick={menuchangehandler}
        src={menuOpened ? crossimage : menusymbol}
        alt="menusymbol"
        className="w-8 text-black-800 cursor-pointer bg-white"
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: menuOpened ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default Menu;
