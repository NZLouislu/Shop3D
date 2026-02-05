import React from 'react';
import { useGLTF } from '@react-three/drei';
import { staticFile } from 'remotion';

export const ProductModel: React.FC<{
    url: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
}> = ({ url, position, rotation, scale }) => {
    // Wrap the public URL with staticFile() for Remotion rendering compatibility
    const { scene } = useGLTF(staticFile(url));
    return (
        <primitive
            object={scene}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    );
};
