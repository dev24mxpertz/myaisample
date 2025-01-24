import React, { useState, useEffect } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import IndexSection from "./IndexSection";
import { CombinedMeshes } from "../CombinedMeshes";

const IndexCanva = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls
        enableZoom={false}
        enableRotate={!isMobile}
        enablePan={true}
      />
      <ScrollControls pages={isMobile ? 13 : 8} damping={1.25}>
        <Scroll>
          <IndexSection />
          <CombinedMeshes position={[0, 0, -3]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default IndexCanva;
