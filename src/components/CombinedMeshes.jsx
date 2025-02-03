// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useScroll, useTexture } from "@react-three/drei";
// import { Mesha } from "./Mesha";
// import { Meshb } from "./Meshb";
// import { Meshc } from "./Meshc";
// import { Meshd } from "./Meshd";
// import { Mounta } from "./Mounta";
// import { Mountb } from "./Mountb";
// import { Mountc } from "./Mountc";
// import { Mountd } from "./Mountd";
// import firsttexture from "../assets/blacktexture.jpg";
// import orangestriplinetexture from "../assets/orangestriplinetexture.jpg";

// // Constants for scroll progress markers
// const Floor_Height = 10;
// const radius = 3;

// export const CombinedMeshes = ({ position, ...props }) => {
//   const ref = useRef();
//   const scroll = useScroll();

//   // Load textures
//   const textures = [useTexture(firsttexture)];
//   const mountTextures = [useTexture(orangestriplinetexture)];

//   // Camera position ref to smoothly interpolate camera movement
//   const cameraPosition = useRef({ x: 0.19, y: 1.5, z: -0.19 });

//   // Handle mesh position updates and texture assignments based on scroll offset
//   useFrame(({ camera }) => {
//     const progress = scroll.offset;
//     let activeTexture = null;

//     const quarterProgress = 0.25;
//     const halfProgress = 0.5;
//     const threeQuarterProgress = 0.75;
//     const fullProgress = 1.0;

//     // Camera positioning logic based on scroll progress
//     if (progress <= quarterProgress) {
//       const localProgress = progress / quarterProgress;
//       cameraPosition.current = { x: 0.19, y: 1.5, z: -0.19 };
//       activeTexture = textures[0];

//       if (ref.current) {
//         ref.current.position.x = localProgress;
//         ref.current.position.y = 0;
//         ref.current.position.z = -localProgress * 4;
//       }
//     } else if (progress > quarterProgress && progress <= halfProgress) {
//       const localProgress = (progress - quarterProgress) / halfProgress;
//       cameraPosition.current.z = localProgress - 0.2;
//       activeTexture = textures[0];
//     } else if (progress > halfProgress && progress <= threeQuarterProgress) {
//       const localProgress = (progress - halfProgress) / quarterProgress;
//       cameraPosition.current.y = localProgress + 6;
//       cameraPosition.current.z = localProgress + 0.29;
//       activeTexture = textures[0];
//     } else if (progress > threeQuarterProgress && progress <= fullProgress) {
//       const localProgress = (progress - threeQuarterProgress) / quarterProgress;
//       activeTexture = textures[0];
//       console.log(localProgress ,  "local progress at the final of the Quater")

//       if (ref.current) {
//         console.log(ref.current.position , "ref position at final quater")
//         ref.current.position.y = -localProgress - 2;
//         ref.current.position.z = -localProgress - 3;
//       }
//     }

//     // Update camera position smoothly
//     camera.position.set(
//       cameraPosition.current.x,
//       cameraPosition.current.y,
//       cameraPosition.current.z
//     );
//     camera.lookAt(0, 0, 0);

//     // Ensure ref.current exists before accessing children
//     if (ref.current) {
//       const mountGroups = [
//         ref.current.children[4],
//         ref.current.children[5],
//         ref.current.children[6],
//         ref.current.children[7],
//       ];

//       // Update mesh materials based on the scroll progress
//       ref.current.children.forEach((group) => {
//         group.children.forEach((subgrp) => {
//           subgrp.children.forEach((mesh) => {
//             if (mesh.material) {
//               if (mountGroups.includes(group)) {
//                 // Assign mount texture for Mount groups
//                 mesh.material.map = mountTextures[0];
//               } else {
//                 // Otherwise, assign active texture
//                 mesh.material.map = activeTexture;
//               }
//               mesh.material.needsUpdate = true;
//             }
//           });
//         });
//       });
//     }
//   });

//   return (
//     <group {...props} ref={ref} position={position}>
//       <group>
//         <Mesha />
//       </group>
//       <group>
//         <Meshb />
//       </group>
//       <group>
//         <Meshc />
//       </group>
//       <group>
//         <Meshd />
//       </group>
//       <group>
//         <Mounta />
//       </group>
//       <group>
//         <Mountb />
//       </group>
//       <group>
//         <Mountc />
//       </group>
//       <group>
//         <Mountd />
//       </group>
//     </group>
//   );
// };

///-------------- The Perfect Clockwise code

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

const Floor_Height = 10;
const radius = 3;

export const CombinedMeshes = ({ position, ...props }) => {
  const ref = useRef();
  const scroll = useScroll();

  const textures = [useTexture(firsttexture)];
  const mountTextures = [useTexture(orangestriplinetexture)];

  const cameraPosition = useRef({
    x: 0.19,
    y: 6.98,
    z: 1.27,
  });

  const rotationAxis = useRef(0);

  useFrame(({ camera }) => {
    const progress = scroll.offset;
    let activeTexture = textures[0];

    const fullProgress = 1.0;
    const localProgress = progress / fullProgress;

    if (ref.current) {
      
      rotationAxis.current = localProgress * Math.PI * 4; 
      ref.current.rotation.y = rotationAxis.current;

     
      cameraPosition.current.y = 6.98 + Math.sin(localProgress * Math.PI) * 2;

      ref.current.position.x = 0; 
      ref.current.position.z = 0; 
    }


    camera.position.set(
      cameraPosition.current.x,
      cameraPosition.current.y,
      cameraPosition.current.z
    );
    camera.lookAt(0, 0, 0);

    if (ref.current) {
      const mountGroups = [
        ref.current.children[4],
        ref.current.children[5],
        ref.current.children[6],
        ref.current.children[7],
      ];

      ref.current.children.forEach((group) => {
        group.children.forEach((subgrp) => {
          subgrp.children.forEach((mesh) => {
            if (mesh.material) {
              if (mountGroups.includes(group)) {
                mesh.material.map = mountTextures[0];
              } else {
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


///----getting infinity sign at the last

// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useScroll, useTexture } from "@react-three/drei";
// import { Mesha } from "./Mesha";
// import { Meshb } from "./Meshb";
// import { Meshc } from "./Meshc";
// import { Meshd } from "./Meshd";
// import { Mounta } from "./Mounta";
// import { Mountb } from "./Mountb";
// import { Mountc } from "./Mountc";
// import { Mountd } from "./Mountd";
// import firsttexture from "../assets/blacktexture.jpg";
// import orangestriplinetexture from "../assets/orangestriplinetexture.jpg";

// const Floor_Height = 10;
// const radius = 3;

// export const CombinedMeshes = ({ position, ...props }) => {
//   const ref = useRef();
//   const scroll = useScroll();

//   const textures = [useTexture(firsttexture)];
//   const mountTextures = [useTexture(orangestriplinetexture)];

//   const cameraPosition = useRef({
//     x: 0.19,
//     y: 0.98,
//     z: 3.01,
//   });

//   const rotationAxis = useRef(0);

//   const initialZPosition = 0;
//   const maxBackwardDistance = -18;

//   useFrame(({ camera }) => {
//     const progress = scroll.offset;
//     let activeTexture = textures[0];

//     const fullProgress = 1.0;
//     const localProgress = progress / fullProgress;

//     if (ref.current) {
//       rotationAxis.current = localProgress * Math.PI * 4;
//       ref.current.rotation.y = rotationAxis.current;

//       if (localProgress <= 0.5) {
//         ref.current.position.z =
//           initialZPosition + maxBackwardDistance * (localProgress * 2);
//       } else {
//         ref.current.position.z =
//           maxBackwardDistance * (1 - (localProgress - 0.5) * 2);
//       }

//       cameraPosition.current.y = 5.98 + localProgress * Math.PI * -12;

//       ref.current.position.x = 0;
//     }

//     camera.position.set(
//       cameraPosition.current.x,
//       cameraPosition.current.y,
//       cameraPosition.current.z
//     );
//     camera.lookAt(0, 0, 0);

//     if (ref.current) {
//       const mountGroups = [
//         ref.current.children[4],
//         ref.current.children[5],
//         ref.current.children[6],
//         ref.current.children[7],
//       ];

//       ref.current.children.forEach((group) => {
//         group.children.forEach((subgrp) => {
//           subgrp.children.forEach((mesh) => {
//             if (mesh.material) {
//               if (mountGroups.includes(group)) {
//                 mesh.material.map = mountTextures[0];
//               } else {
//                 mesh.material.map = activeTexture;
//               }
//               mesh.material.needsUpdate = true;
//             }
//           });
//         });
//       });
//     }
//   });

//   return (
//     <group {...props} ref={ref} position={position}>
//       <group>
//         <Mesha />
//       </group>
//       <group>
//         <Meshb />
//       </group>
//       <group>
//         <Meshc />
//       </group>
//       <group>
//         <Meshd />
//       </group>
//       <group>
//         <Mounta />
//       </group>
//       <group>
//         <Mountb />
//       </group>
//       <group>
//         <Mountc />
//       </group>
//       <group>
//         <Mountd />
//       </group>
//     </group>
//   );
// };



// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useScroll, useTexture } from "@react-three/drei";
// import { Mesha } from "./Mesha";
// import { Meshb } from "./Meshb";
// import { Meshc } from "./Meshc";
// import { Meshd } from "./Meshd";
// import { Mounta } from "./Mounta";
// import { Mountb } from "./Mountb";
// import { Mountc } from "./Mountc";
// import { Mountd } from "./Mountd";
// import firsttexture from "../assets/blacktexture.jpg";
// import orangestriplinetexture from "../assets/orangestriplinetexture.jpg";

// // Constants for scroll progress markers
// const Floor_Height = 10;
// const radius = 3;

// export const CombinedMeshes = ({ position, ...props }) => {
//   const ref = useRef();
//   const scroll = useScroll();

//   const textures = [useTexture(firsttexture)];
//   const mountTextures = [useTexture(orangestriplinetexture)];

//   const cameraPosition = useRef({
//     x: 0.19,
//     y: 0.98,
//     z: 3.01,
//   });

//   const rotationAxis = useRef(0);

//   const initialZPosition = 0;
//   const maxBackwardDistance = -18;

//   useFrame(({ camera }) => {
//     const progress = scroll.offset;
//     let activeTexture = textures[0];

//     const fullProgress = 1.0;
//     const adjustedProgress = Math.min(progress / (9.7 / 11), 1); 

//     if (ref.current) {
//       rotationAxis.current = adjustedProgress * Math.PI * 4;
//       ref.current.rotation.y = rotationAxis.current;

//       if (adjustedProgress <= 0.5) {
//         ref.current.position.z =
//           initialZPosition + maxBackwardDistance * (adjustedProgress * 2);
//       } else {
//         ref.current.position.z =
//           maxBackwardDistance * (1 - (adjustedProgress - 0.5) * 2);
//       }

//       // Slight left shift and vertical movement till the 9th section
//       cameraPosition.current.y = 5.98 + adjustedProgress * Math.PI * -12;
//       ref.current.position.x = 0.19 + adjustedProgress * -1; // Subtle left shift

//     }

//     camera.position.set(
//       cameraPosition.current.x,
//       cameraPosition.current.y,
//       cameraPosition.current.z
//     );

//     camera.lookAt(0, 0, 0);

//     if (ref.current) {
//       const mountGroups = [
//         ref.current.children[4],
//         ref.current.children[5],
//         ref.current.children[6],
//         ref.current.children[7],
//       ];

//       ref.current.children.forEach((group) => {
//         group.children.forEach((subgrp) => {
//           subgrp.children.forEach((mesh) => {
//             if (mesh.material) {
//               if (mountGroups.includes(group)) {
//                 mesh.material.map = mountTextures[0];
//               } else {
//                 mesh.material.map = activeTexture;
//               }
//               mesh.material.needsUpdate = true;
//             }
//           });
//         });
//       });
//     }
//   });

//   return (
//     <group {...props} ref={ref} position={position}>
//       <group>
//         <Mesha />
//       </group>
//       <group>
//         <Meshb />
//       </group>
//       <group>
//         <Meshc />
//       </group>
//       <group>
//         <Meshd />
//       </group>
//       <group>
//         <Mounta />
//       </group>
//       <group>
//         <Mountb />
//       </group>
//       <group>
//         <Mountc />
//       </group>
//       <group>
//         <Mountd />
//       </group>
//     </group>
//   );
// };
