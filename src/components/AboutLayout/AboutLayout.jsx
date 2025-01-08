import { Canvas } from '@react-three/fiber'
import React from 'react'
import AboutCanva from './AboutCanva'

const AboutLayout = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{zIndex:2}}
    >
      <AboutCanva />
    </Canvas>
  )
}

export default AboutLayout