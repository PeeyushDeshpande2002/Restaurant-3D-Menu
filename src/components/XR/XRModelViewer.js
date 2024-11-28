// src/components/ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import XRModel from './XRModel';
import {ARButton, XR, createXRStore } from '@react-three/xr';

const store = createXRStore()

const XRModelViewer = ({ modelPath }) => {
  return (
    <>
    <button onClick={() => store.enterAR()}>Enter AR</button>
    <Canvas style={{ height: 400, width: '100%' }}
    camera={{ position: [7,45,0], fov: 45 }}>
    <XR store = {store}>
        <XRModel modelPath={modelPath}/>
      </XR>
    </Canvas>
    </>
  );
};



export default XRModelViewer;
