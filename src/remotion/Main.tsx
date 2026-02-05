import React from 'react';
import { AbsoluteFill } from 'remotion';
import { ThreeCanvas } from '@remotion/three';
import { Scene } from './Scene';

export const Main: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: '#eeeeee' }}>
            <ThreeCanvas
                width={1920}
                height={1080}
                gl={{ antialias: true, alpha: true }}
                camera={{ fov: 45 }}
            >
                <Scene />
            </ThreeCanvas>

            {/* Branding Overlay */}
            <div style={{
                position: 'absolute',
                top: 60,
                left: 60,
                color: '#ff4400',
                fontSize: 48,
                fontWeight: 800,
                fontFamily: 'system-ui',
                letterSpacing: -2
            }}>
                NZLouis Shop
            </div>

            <div style={{
                position: 'absolute',
                bottom: 60,
                right: 60,
                color: '#333',
                fontSize: 24,
                fontFamily: 'system-ui',
                opacity: 0.6
            }}>
                3D Product Experience
            </div>
        </AbsoluteFill>
    );
};
