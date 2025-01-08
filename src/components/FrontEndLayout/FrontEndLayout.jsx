
import { Canvas } from "@react-three/fiber";
import React from "react";
import FrontEndCanva from "./FrontEndCanva";

const FrontEndLayout = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{ zIndex: 2 }}
    >
      <FrontEndCanva />
    </Canvas>

  );
}

export default FrontEndLayout