import { Center, Gltf, Lightformer, SoftShadows, SpotLight } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { RectAreaLight } from "three";

const Room = () => {

    const modelRef = useRef();
    const spotLight1Ref = useRef();
    const spotLight2Ref = useRef();
    const spotLight3Ref = useRef()

    useEffect(() => {
      if (modelRef.current) {
        modelRef.current.castShadow = true;
        modelRef.current.receiveShadow = true;
        modelRef.current?.children.map((node) => {
          if (node.isMesh || node.isObject3D) {
            node.castShadow = true;
            node.receiveShadow = true;
          } else {
            node?.children.map((node) => {
              if (node?.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
          }
        });
      }
    }, [modelRef.current, spotLight1Ref.current, spotLight2Ref.current]);

    useFrame(()=>{
        if (spotLight1Ref.current) {
          spotLight1Ref?.current?.target.position.set(-3.45, 0, 1.7);
        }

        if (spotLight2Ref.current) {
          spotLight2Ref?.current?.target.position.set(0, 0, 1.7);
        }

        if (spotLight3Ref.current) {
          spotLight3Ref?.current?.target.position.set(-3.45, 0, -1.75);
        }
    })


    return (
      <>
        <pointLight color={"#fadcb9"} position={[0.5, 1, 0]} intensity={1} />
        <directionalLight
          color={"#fadcb9"}
          intensity={8}
          castShadow={true}
          position={[-1, 3, -4]}
          
        />
        <SpotLight
          ref={spotLight1Ref}
          attenuation={0.1}
          intensity={5}
          penumbra={0.1}
          radiusTop={0.05}
          radiusBottom={1}
          angle={0.7}
          power={10}
          color={"white"}
          position={[-3.45, 1.8, 1.7]}
          opacity={0.8}
        ></SpotLight>
        <pointLight
          intensity={0.2}
          position={[-3.45, 1.5, 1.7]}
          color={"white"}
        />
        <SpotLight
          ref={spotLight3Ref}
          attenuation={0.1}
          intensity={5}
          penumbra={0.1}
          radiusTop={0.05}
          radiusBottom={1}
          angle={0.7}
          power={10}
          color={"white"}
          position={[-3.45, 1.8, -1.75]}
          opacity={0.8}
        ></SpotLight>
        <pointLight
          intensity={0.2}
          position={[-3.45, 1.5, -1.75]}
          color={"white"}
        />
        <SpotLight
          ref={spotLight2Ref}
          attenuation={0.1}
          intensity={1}
          penumbra={0.1}
          radiusTop={0.2}
          radiusBottom={1}
          angle={0.7}
          power={8}
          color={"#fadcb9"}
          position={[0, 2.44, 1.7]}
          opacity={0.8}
        ></SpotLight>
        <pointLight
          intensity={0.2}
          position={[0.07, 2.4, 1.7]}
          color={"#fadcb9"}
        />
        <Lightformer
          form="circle"
          color={"#ffffff"}
          position={[0.07, 2.43, -1.79]}
          scale={[0.15, 0.15]}
          target={[0.07, -1, -1.79]}
        />

        <pointLight
          intensity={0.2}
          position={[0.07, 2.4, -1.78]}
          color={"#fadcb9"}
        />
        <Lightformer
          form="circle"
          color={"#ffffff"}
          position={[0.07, 2.43, 1.72]}
          scale={[0.15, 0.15]}
          target={[0.07, -1, 1.72]}
        />
        <pointLight
          intensity={0.2}
          position={[1.9, 2.4, -1.78]}
          color={"#fadcb9"}
        />
        <Lightformer
          form="circle"
          color={"#ffffff"}
          position={[1.9, 2.43, 1.71]}
          scale={[0.15, 0.15]}
          target={[1.9, -1, 1.71]}
        />

        <pointLight
          intensity={0.2}
          position={[1.9, 2.4, 1.78]}
          color={"#ffffff"}
        />
        <Lightformer
          form="circle"
          color={"#ffffff"}
          position={[1.9, 2.43, -1.79]}
          scale={[0.15, 0.15]}
          target={[1.9, -1, -1.79]}
        />

        <pointLight color={"white"} intensity={5} position={[1, 2, -1]} />
        <Center>
          <Gltf ref={modelRef} src="/New room v3.gltf" />
        </Center>
        <SoftShadows samples={3} focus={0.5} size={3} />
      </>
    );
}

export default Room;