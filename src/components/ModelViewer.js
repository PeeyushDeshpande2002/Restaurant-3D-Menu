import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Box, Button } from "@mui/material";

const ModelViewer = ({ modelPath }) => {
  const handleOpenInAR = () => {
    window.location.href = `/ar.html?model=${encodeURIComponent(modelPath)}`;
  };

  return (
    <Box>
      <Canvas
        style={{ height: 400, width: "100%" }}
        camera={{ position: [7, 45, 0], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} />
        <Suspense>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenInAR}
        sx={{ marginTop: "20px" }}
      >
        Open in AR
      </Button>
    </Box>
  );
};

export default ModelViewer;
