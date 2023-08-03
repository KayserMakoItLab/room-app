'use client'
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "./Room";
import { Suspense } from "react";

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