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
  const contactSectionRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    const calculateScrollPages = () => {
      if (contactSectionRef.current) {
        const indexSectionHeight = contactSectionRef.current?.clientHeight || 0;
        const windowHeight = window.innerHeight || 1;
        const pages = indexSectionHeight / windowHeight;
        setScrollPages(Math.max(pages, 3));
      }
    };
    const handleResizeEvent = () => {
      handleResize();
      calculateScrollPages();
    };

    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);

  const updateScrollPages = (pages) => {
    setScrollPages(pages);
  };

  const Navigate_Home = () => navigate("/");
  const Navigate_AboutUs = () => navigate("/AboutUs");
  const Navigate_ContactUs = () => navigate("/ContactUs");
  const Navigate_FrontendPage = () => navigate("/FrontendPage");
  const Navigate_BackendPage = () => navigate("/BackendPage");

  return (
    <div className="Main_Layout_Container relative">
      {menuOpened ? (
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
             <ScrollControls pages={1} damping={1.25} infinite={false}>
               <Scroll>
                 <Scroll html className="w-full h-full">
                   <div className={`menu_container open`}>
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
                       <button
                         onClick={Navigate_FrontendPage}
                         className="menu_link"
                       >
                         AI ASSISTANT FOR CUSTOMER SUPPORT
                       </button>
                       <button
                         onClick={Navigate_BackendPage}
                         className="menu_link"
                       >
                         AI Workforce for Backend Operations
                       </button>
                     </div>
                   </div>
                 </Scroll>
                 <CombinedMeshes position={[0, 0, -3]} />
               </Scroll>
             </ScrollControls>
           </Canvas>
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
              <AboutSection
                onScrollPagesChange={updateScrollPages}
                ref={contactSectionRef}
              />
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
