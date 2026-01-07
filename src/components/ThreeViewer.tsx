'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function ThreeViewer({ modelUrl }: { modelUrl: string }) {
    return (
        <div style={{ width: '100%', height: 'calc(50vh + 100px)', minHeight: '300px', maxHeight: '600px', background: '#111', borderRadius: '12px', cursor: 'grab' }}>
            <Canvas
                dpr={[1, 2]}
                camera={{ fov: 45 }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
            >
                <color attach="background" args={['#111']} />
                <Suspense fallback={null}>
                    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment="city" intensity={0.6} shadows={false}>
                            <Model url={modelUrl} />
                        </Stage>
                    </PresentationControls>
                </Suspense>
                <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
