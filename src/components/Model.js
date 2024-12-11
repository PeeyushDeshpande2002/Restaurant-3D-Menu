import { useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={2} />;
  };

  export default Model;