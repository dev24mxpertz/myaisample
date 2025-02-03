import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { CombinedMeshes } from '../CombinedMeshes';
import FrontendPageSection from './FrontendPageSection';
import Menu from '../menuPage/Menu';

const FrontendPage = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [section, setSection] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);
    const [isShowoverlay, setIsShowoverlay] = useState(false);
    const [scrollPages, setScrollPages] = useState(3);
    const navigate = useNavigate();
    const FrontendPageSectionRef = useRef(null);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
      const calculateScrollPages = () => {
        if (FrontendPageSectionRef.current) {
          const indexSectionHeight =
            FrontendPageSectionRef.current?.clientHeight;
          const windowHeight = window.innerHeight;
          const pages = indexSectionHeight / windowHeight;
          setScrollPages(Math.max(pages, 2));
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
              <FrontendPageSection
                ref={FrontendPageSectionRef}
                onScrollPagesChange={updateScrollPages}
              />
              <CombinedMeshes position={[0, 0, -3]} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      )}

      <Menu
        onsectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        isShowoverlay={isShowoverlay}
        setIsShowoverlay={setIsShowoverlay}
      />

      <div className={`menu_overlay ${isShowoverlay ? "open" : ""}`}></div>
    </div>
  );
}

export default FrontendPage