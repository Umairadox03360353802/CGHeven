'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Suspense} from 'react'
import ModelItem from './robot'




function Modals() {
  return (
    <>
      <Canvas gl={{ antialias: true }} dpr={[1,1.5]}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <ModelItem />
          </Suspense>
        
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Modals;