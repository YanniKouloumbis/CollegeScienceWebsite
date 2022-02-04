import React, { useRef, useState } from "react";
import { Billboard, Text } from "@react-three/drei";


export default function Node({ text, color, position }) {
  const mRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  //useFrame((state, delta) => {})
  return (
    <group>
      <mesh
        ref={mRef}
        visible={hovered}
        position={[position[0], position[1] + 0.3, position[2]]}
      >
        <Billboard follow={true}>
          <Text color={color} anchorX="center" anchorY="middle" fontSize={0.3}>
            {text}
          </Text>
          <meshNormalMaterial attach="material" color="red" />
        </Billboard>
      </mesh>
      <mesh
        ref={mRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        position={position}
      >
        <sphereBufferGeometry args={[0.2, 32, 32]} />
        <meshPhongMaterial color={color} attach="material" />
      </mesh>
    </group>
  );
}
