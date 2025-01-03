/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/INFINITY-D.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/INFINITY-D.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry} material={materials.x1} />
    </group>
  )
}

useGLTF.preload('/INFINITY-D.glb')
