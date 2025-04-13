import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Component, Suspense } from "react";
import ComputerModal from "./ComputerModal";

const ComputerModalContainer = () => {
  return (
    <Canvas >
      <Suspense fallback="loading...">
        <Stage environment={"city"}>
          <ComputerModal/>
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={true}/>
      
    </Canvas>
  );
};

export default ComputerModalContainer;
