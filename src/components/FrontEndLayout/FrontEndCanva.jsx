import React from 'react'
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { CombinedMeshes } from '../CombinedMeshes';
import FrontEndSection from './FrontEndSection';
import "./FrontEndPage.css";

const FrontEndCanva = () => {
 const totalPages = 8; 

 return (
   <>
     <ambientLight intensity={1} />
     <directionalLight position={[5, 5, 5]} />
     <OrbitControls enableZoom={false} />
     <ScrollControls damping={1.25} pages={totalPages}>
       <Scroll>
         <FrontEndSection />
         <CombinedMeshes position={[0, 0, -3]} totalPages={totalPages} />
       </Scroll>
     </ScrollControls>
   </>
 );

}

export default FrontEndCanva