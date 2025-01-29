import { Canvas } from "@react-three/fiber";
import "./aboutPage.css";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { CombinedMeshes } from "../CombinedMeshes";
import Menu from "../menuPage/Menu";
import { useNavigate } from "react-router-dom";
import AboutSection from "./AboutSection";

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isShowoverlay, setIsShowoverlay] = useState(false);
  const [scrollPages, setScrollPages] = useState(7.2);
  const navigate = useNavigate();

 const aboutSectionRef = useRef(null);

 const handleResize = () => {
   setIsMobile(window.innerWidth <= 768);
   calculateScrollPages();
 };

 const calculateScrollPages = () => {
   if (aboutSectionRef.current) {
     const aboutSectionHeight = aboutSectionRef.current.offsetHeight;
     const windowHeight = window.innerHeight;
     const pages = aboutSectionHeight / windowHeight;
     const newScrollPages = Math.max(pages, 3);
     setScrollPages(newScrollPages);
   }
 };

 useLayoutEffect(() => {
   if (aboutSectionRef.current) {
     handleResize(); 
   }

   const handleResizeEvent = () => {
     if (aboutSectionRef.current) {
       handleResize();
     }
   };

   window.addEventListener("resize", handleResizeEvent);

   return () => {
     window.removeEventListener("resize", handleResizeEvent);
   };
 }, []);


  const Navigate_Home = () => navigate("/");
  const Navigate_AboutUs = () => navigate("/AboutUs");
  const Navigate_ContactUs = () => navigate("/ContactUs");
  const Navigate_FrontendPage = () => navigate("/FrontendPage");
  const Navigate_BackendPage = () => navigate("/BackendPage");

  return (
    <div className="Main_Layout_Container relative">
      {menuOpened ? (
        <div className={`menu_container ${menuOpened ? "open" : ""}`}>
          <div className="w-full px-6 py-8 flex flex-col justify-evenly items-start">
            <button onClick={Navigate_Home} className="menu_link">
              HOME
            </button>
            <button onClick={Navigate_AboutUs} className="menu_link">
              About Us
            </button>
            <button onClick={Navigate_ContactUs} className="menu_link">
              Contact us
            </button>
            <button onClick={Navigate_FrontendPage} className="menu_link">
              AI ASSISTANT FOR CUSTOMER SUPPORT
            </button>
            <button onClick={Navigate_BackendPage} className="menu_link">
              AI Workforce for Backend Operations
            </button>
          </div>
        </div>
      ) : (
        <Canvas
          camera={{
            fov: 64,
            position: [0.19, 1.5, -0.19],
          }}
          style={{ zIndex: 2 }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls enableZoom={false} />
          <ScrollControls pages={scrollPages} damping={1.25} infinite={false}>
            <Scroll>
              {/* Pass aboutSectionRef to the AboutSection */}
              <AboutSection ref={aboutSectionRef} />
              <CombinedMeshes position={[0, 0, -3]} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      )}

      <Menu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        isShowoverlay={isShowoverlay}
        setIsShowoverlay={setIsShowoverlay}
      />

      <div className={`menu_overlay ${isShowoverlay ? "open" : ""}`}></div>
    </div>
  );
};

export default AboutPage;
