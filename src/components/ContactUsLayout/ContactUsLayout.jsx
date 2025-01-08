import { Canvas } from '@react-three/fiber';
import React from 'react'
import ContactusCanva from './ContactusCanva';

const ContactUsLayout = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{ zIndex: 2 }}
    >
      <ContactusCanva />
    </Canvas>
  );
}

export default ContactUsLayout