import { Canvas } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function BouquetModel(props) {
  const { scene } = useGLTF('/bouquet.glb')
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} scale={0.5} />
    </group>
  )
}

export function BouquetAccent() {
  return (
    <div style={{
      position: 'absolute',
      right: '8%',
      bottom: '15%',
      width: '120px',
      height: '120px',
      opacity: 0.6,
      pointerEvents: 'none',
      zIndex: 1
    }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <BouquetModel position={[0, 0, 0]} />
          </Float>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} intensity={0.5} />
        </Suspense>
      </Canvas>
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '9px',
        fontFamily: 'Inter, sans-serif',
        color: '#666',
        textAlign: 'center',
        whiteSpace: 'nowrap'
      }}>
        Bouquet by Naira — CC BY 4.0
      </div>
    </div>
  )
}
