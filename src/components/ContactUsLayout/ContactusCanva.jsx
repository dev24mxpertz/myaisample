import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { CombinedMeshes } from "../CombinedMeshes";
import ContactusSection from "./ContactusSection";
import "./ContactUs.css"

const ContactusCanva = () => {
  const totalPages = 1.2; // Define the total number of scroll pages

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls damping={1.25} pages={totalPages}>
        <Scroll>
          <ContactusSection />
          <CombinedMeshes position={[0, 0, -3]} totalPages={totalPages} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ContactusCanva;
