'use client'
import { Environment, Lightformer, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Room from "./Room";
import { Suspense, useEffect } from "react";
import { RectAreaLight } from "three";

const App = () => {

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={<Loader />}>
          <Canvas shadows camera={{ position: [8, 0, 0] }}>
            <ambientLight intensity={0.7} />
            <Room />
            <OrbitControls />
            <Environment
              files="/Modern_Industrial_013.exr"
              background
              near={1}
              far={1000}
              resolution={256}
              ground
            />
          </Canvas>
        </Suspense>
      </div>
    );
}

export default App;