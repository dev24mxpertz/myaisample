import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTexture } from "@react-three/drei";
import { Mesha } from "./Mesha";
import { Meshb } from "./Meshb";
import { Meshc } from "./Meshc";
import { Meshd } from "./Meshd";
import { Mounta } from "./Mounta";
import { Mountb } from "./Mountb";
import { Mountc } from "./Mountc";
import { Mountd } from "./Mountd";
import firsttexture from "../assets/blacktexture.jpg";
import orangestriplinetexture from "../assets/orangestriplinetexture.jpg";

// Constants for scroll progress markers
const Floor_Height = 10;
const radius = 3;

export const CombinedMeshes = ({ position, ...props }) => {
  const ref = useRef();
  const scroll = useScroll();

  // Load textures
  const textures = [useTexture(firsttexture)];
  const mountTextures = [useTexture(orangestriplinetexture)];

  // Camera position ref to smoothly interpolate camera movement
  const cameraPosition = useRef({ x: 0.19, y: 1.5, z: -0.19 });

  // Handle mesh position updates and texture assignments based on scroll offset
  useFrame(({ camera }) => {
    const progress = scroll.offset;
    let activeTexture = null;

    const quarterProgress = 0.25;
    const halfProgress = 0.5;
    const threeQuarterProgress = 0.75;
    const fullProgress = 1.0;

    // Camera positioning logic based on scroll progress
    if (progress <= quarterProgress) {
      const localProgress = progress / quarterProgress;
      cameraPosition.current = { x: 0.19, y: 1.5, z: -0.19 };
      activeTexture = textures[0];

      if (ref.current) {
        ref.current.position.x = localProgress;
        ref.current.position.y = 0;
        ref.current.position.z = -localProgress * 4;
      }
    } else if (progress > quarterProgress && progress <= halfProgress) {
      const localProgress = (progress - quarterProgress) / halfProgress;
      cameraPosition.current.z = localProgress - 0.2;
      activeTexture = textures[0];
    } else if (progress > halfProgress && progress <= threeQuarterProgress) {
      const localProgress = (progress - halfProgress) / quarterProgress;
      cameraPosition.current.y = localProgress + 6;
      cameraPosition.current.z = localProgress + 0.29;
      activeTexture = textures[0];
    } else if (progress > threeQuarterProgress && progress <= fullProgress) {
      const localProgress = (progress - threeQuarterProgress) / quarterProgress;
      activeTexture = textures[0];

      if (ref.current) {
        ref.current.position.y = -localProgress - 2;
        ref.current.position.z = -localProgress - 3;
      }
    }

    // Update camera position smoothly
    camera.position.set(
      cameraPosition.current.x,
      cameraPosition.current.y,
      cameraPosition.current.z
    );
    camera.lookAt(0, 0, 0);

    // Ensure ref.current exists before accessing children
    if (ref.current) {
      const mountGroups = [
        ref.current.children[4],
        ref.current.children[5],
        ref.current.children[6],
        ref.current.children[7],
      ];

      // Update mesh materials based on the scroll progress
      ref.current.children.forEach((group) => {
        group.children.forEach((subgrp) => {
          subgrp.children.forEach((mesh) => {
            if (mesh.material) {
              if (mountGroups.includes(group)) {
                // Assign mount texture for Mount groups
                mesh.material.map = mountTextures[0];
              } else {
                // Otherwise, assign active texture
                mesh.material.map = activeTexture;
              }
              mesh.material.needsUpdate = true;
            }
          });
        });
      });
    }
  });

  return (
    <group {...props} ref={ref} position={position}>
      <group>
        <Mesha />
      </group>
      <group>
        <Meshb />
      </group>
      <group>
        <Meshc />
      </group>
      <group>
        <Meshd />
      </group>
      <group>
        <Mounta />
      </group>
      <group>
        <Mountb />
      </group>
      <group>
        <Mountc />
      </group>
      <group>
        <Mountd />
      </group>
    </group>
  );
};
