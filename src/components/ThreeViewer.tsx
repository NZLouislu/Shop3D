'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';

function Model({ url, onLoaded }: { url: string; onLoaded: () => void }) {
    const { scene } = useGLTF(url);
    useEffect(() => {
        if (scene) {
            onLoaded();
        }
    }, [scene, onLoaded]);
    return <primitive object={scene} />;
}

function Loader({ previewImage }: { previewImage?: string }) {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            pointerEvents: 'none'
        }} className="skeleton">
            {previewImage && (
                <div style={{ position: 'relative', width: '80%', height: '80%', opacity: 0.5 }}>
                    <Image
                        src={previewImage}
                        alt="Loading..."
                        fill
                        style={{ objectFit: 'contain', filter: 'grayscale(100%)' }}
                    />
                </div>
            )}
        </div>
    );
}

export default function ThreeViewer({ modelUrl, previewImage }: { modelUrl: string; previewImage?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, #ffffff 0%, #f5f5f5 100%)',
            borderRadius: '12px',
            cursor: 'grab',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {!isLoaded && <Loader previewImage={previewImage} />}
            <Suspense fallback={null}>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45 }}
                    gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
                    style={{ position: 'absolute', inset: 0, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
                >
                    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment="city" intensity={0.6} shadows={false}>
                            <Model url={modelUrl} onLoaded={() => setIsLoaded(true)} />
                        </Stage>
                    </PresentationControls>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </Suspense>
        </div>
    );
}
