import React from 'react'
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Indexpage = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{zIndex:2}}
    >
      <Experience />
    </Canvas>
  );
}

export default Indexpage;