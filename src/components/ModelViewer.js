// src/components/ModelViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas style={{ height: 400, width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <Suspense>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
};

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2} />;
};

export default ModelViewer;
