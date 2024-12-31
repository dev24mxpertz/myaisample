import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";

// Import the texture from src/assets
import orangeTexturePath from "./assets/photo-1530982011887-3cc11cc85693.jpg";

const Floor_Height = 2.3;

export default function Infinitydouter({ position, totalPages, ...props }) {
  const { nodes } = useGLTF("./models/infinitydouter.gltf");
  const orangeTexture = useLoader(TextureLoader, orangeTexturePath);

  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    const progress = scroll.offset; // Get scroll offset (0 to 1)
    tl.current.seek(progress * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    const sectionDuration = 1 / totalPages; // Each section's duration based on the number of pages

    // Create dynamic animations for each page
    for (let i = 1; i <= totalPages; i++) {
      const rotationAngle = (i * 2 * Math.PI) / totalPages; // Rotation angle for each section
      const triggerPoint = (i - 1) * sectionDuration; // Trigger point for each section

      // Add rotation animation
      tl.current.to(
        ref.current.rotation,
        {
          duration: sectionDuration * 2, // Double the section duration for smooth rotation
          y: rotationAngle, // Rotate dynamically
          onStart: () => console.log(`Triggered: Rotate to ${rotationAngle} radians`),
        },
        triggerPoint
      );
    }

    // Add vertical animation over the scroll
    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 1, // Total scroll duration (aligned with full progress)
    //     y: -Floor_Height * (totalPages - 1), // Move vertically based on the number of floors
    //     onStart: () => console.log("Triggered: Vertical movement through floors"),
    //   },
    //   0
    // );
  }, [totalPages]);

  return (
    <group {...props} dispose={null} ref={ref} position={position}>
      <mesh geometry={nodes.Node1.geometry}>
        <meshStandardMaterial map={orangeTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/infinitydouter.gltf");
