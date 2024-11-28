import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const XRModel = ({ modelPath }) => {
    const Model = ()=> {
        const gltf = useGLTF(modelPath);
        return <primitive object={gltf.scene} scale={2} />;
    }
    return(
        <>
    <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <Suspense>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls autoRotate />
    </>
    )
  };
export default XRModel;