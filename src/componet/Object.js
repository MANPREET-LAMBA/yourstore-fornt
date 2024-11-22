import * as THREE from 'three';
import {useTexture} from "@react-three/drei"
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

 const Object = ()=>{
    const text = useTexture("./texture.png");
    let object = useRef(null)
    useFrame(()=>{
        object.current.rotation.y += 0.010
    })
    return(
       <group rotation={[0,1.5,0.5]}>
         <mesh ref={object} >
            <cylinderGeometry args={[1,1,1,30,30,true]} />
            <meshStandardMaterial map={text} transparent side={THREE.DoubleSide}/>
        </mesh>
       </group>
    )
}

export default Object;