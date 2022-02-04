import React, { useRef } from "react";

import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import Node from "./Node";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const CameraController = () => {
    const {
      camera,
      gl: { domElement },
      scene,
    } = useThree();
  
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => {
      controls.current.update();
    });
    return (
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={0}
        minPolarAngle={0}
        enableDamping={true}
        zoomFactor={0.4}
        zoomSpeed={1}
        rotateSpeed={0.4}
        smoothZoom={true}
        zoomDampingFactor={4}
      />
    );
  };
  
export default function Graph({ dataPoints }) {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <directionalLight />
      {dataPoints.map((dataPoint) => (
        <Node
          key={dataPoint.text}
          text={dataPoint.text}
          position={dataPoint.position}
          color={dataPoint.color}
        />
      ))}
      <primitive object={new THREE.AxesHelper(100)} />
    </Canvas>
  );
}

