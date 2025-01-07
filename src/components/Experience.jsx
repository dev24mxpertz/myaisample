import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Infinitydouter from "../Infinitydouter";
import HeroSection from "./HeroSection";
import { CombinedMeshes } from "./CombinedMeshes";

const Experience = () => {
  const totalPages = 9.2; // Define the total number of scroll pages

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls damping={1.25} pages={totalPages}>
        <Scroll>
          <HeroSection />
          <CombinedMeshes position={[0, 0, -3]} totalPages={totalPages} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
