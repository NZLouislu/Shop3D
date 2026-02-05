import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { ProductModel } from './ProductModel';
import { Environment, PerspectiveCamera } from '@react-three/drei';

export const Scene: React.FC = () => {
    const frame = useCurrentFrame();

    // Timing constants (frames)
    const segmentLength = 150; // 5 seconds each

    // Opacity and visibility logic
    const getVisibility = (index: number) => {
        const start = index * segmentLength;
        const end = (index + 1) * segmentLength;

        // Smooth fade in/out
        return interpolate(
            frame,
            [start, start + 15, end - 15, end],
            [0, 1, 1, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
    };

    // Camera Animation
    const cameraZ = interpolate(
        frame % segmentLength,
        [0, segmentLength],
        [5, 4], // Back to original zoom
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    const rotationY = interpolate(
        frame,
        [0, 450],
        [Math.PI, Math.PI + Math.PI * 4], // Offset by PI to start with the face (Front)
    );

    // Deterministic Float Logic
    const floatingMovement = (index: number, speed: number, range: number) => {
        return Math.sin(frame * speed) * range;
    };

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Environment preset="city" />

            {/* Octopus Sequence (0-150) */}
            {frame < 155 && (
                <group
                    scale={getVisibility(0)}
                    position={[0, -1.2 + floatingMovement(0, 0.05, 0.1), 0]} // Deterministic float
                    rotation={[floatingMovement(0, 0.02, 0.05), rotationY, 0]}
                >
                    <ProductModel
                        url="/models/octopus.glb"
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={2.5}
                    />
                </group>
            )}

            {/* Bell Sequence (150-300) */}
            {frame >= 145 && frame < 305 && (
                <group
                    scale={getVisibility(1)}
                    position={[0, -1.2 + floatingMovement(1, 0.04, 0.08), 0]}
                    rotation={[floatingMovement(1, 0.03, 0.06), rotationY, 0]}
                >
                    <ProductModel
                        url="/models/bell.glb"
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={2.5}
                    />
                </group>
            )}

            {/* Adidas Shoe Sequence (300-450) */}
            {frame >= 295 && (
                <group
                    scale={getVisibility(2)}
                    position={[0, -0.8 + floatingMovement(2, 0.06, 0.05), 0]}
                    rotation={[floatingMovement(2, 0.02, 0.04), rotationY, 0]}
                >
                    <ProductModel
                        url="/models/multi-image-Adidas-shoe.glb"
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={2.5}
                    />
                </group>
            )}

            {/* Cinematic Camera */}
            <PerspectiveCamera
                makeDefault
                position={[0, 0, cameraZ]}
                fov={45}
            />
        </>
    );
};
