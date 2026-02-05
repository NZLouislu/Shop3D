'use client';

import React from 'react';
import { Player } from '@remotion/player';
import { Main } from '@/remotion/Main';
import styles from './showcase.module.css';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function ShowcasePage() {
    return (
        <main className="container">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        <MoveLeft size={20} />
                        <span>Back to Shop</span>
                    </Link>
                    <h1 className={styles.title}>3D Product Cinematic Showcase</h1>
                    <p className={styles.subtitle}>Powered by Remotion & Three.js</p>
                </div>

                <div className={styles.playerContainer}>
                    <Player
                        component={Main}
                        durationInFrames={450}
                        compositionWidth={1920}
                        compositionHeight={1080}
                        fps={30}
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                        }}
                        controls
                        autoPlay
                        loop
                    />
                </div>

                <div className={styles.info}>
                    <div className={styles.infoCard}>
                        <h3>Automated Video Production</h3>
                        <p>This video is programmatically generated in real-time. We can render this as a high-quality MP4 for marketing materials with a single command.</p>
                        <div className={styles.command}>
                            <code>npx remotion render src/remotion/Root.tsx ProductShowcase out.mp4</code>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
