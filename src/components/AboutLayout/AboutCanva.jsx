import React from 'react'
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { CombinedMeshes } from "../CombinedMeshes";
import AboutSection from './AboutSection';
import "./About.css"

const AboutCanva = () => {
    const totalPages = 5; 
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls damping={1.25} pages={totalPages}>
        <Scroll>
          <AboutSection />
          <CombinedMeshes position={[0, 0, -3]} totalPages={totalPages} />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default AboutCanva