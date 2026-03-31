import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

function Model() {
  // Fixed the path to match your public folder structure
  const gltf = useGLTF("../public/3Dmodel/scene.gltf");

  return <primitive object={gltf.scene} scale={1} position={[0, -1, 0]} />;
}

export const ThreeDExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet && !isMobile}
          maxDistance={8}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        
        {/* Added Suspense to handle the loading state */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};