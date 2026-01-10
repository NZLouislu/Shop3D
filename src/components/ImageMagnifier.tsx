'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import styles from './ImageMagnifier.module.css';

interface ImageMagnifierProps {
    src: string;
    alt: string;
}

export default function ImageMagnifier({ src, alt }: ImageMagnifierProps) {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifierStyle, setMagnifierStyle] = useState({ x: 0, y: 0 });
    const imgContainerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imgContainerRef.current) return;

        const { left, top, width, height } = imgContainerRef.current.getBoundingClientRect();

        // Calculate cursor position relative to the image
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;

        // Check if cursor is outside
        if (x < 0 || y < 0 || x > width || y > height) {
            setShowMagnifier(false);
            return;
        }

        setShowMagnifier(true);

        // Calculate percentage for background position
        const xPerc = (x / width) * 100;
        const yPerc = (y / height) * 100;

        setMagnifierStyle({ x: xPerc, y: yPerc });
    };

    return (
        <div
            className={styles.magnifierContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowMagnifier(false)}
            ref={imgContainerRef}
        >
            <div className={styles.mainImageWrapper}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>

            {showMagnifier && (
                <div
                    className={styles.magnifierWindow}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `${magnifierStyle.x}% ${magnifierStyle.y}%`,
                        backgroundSize: '250%' // Zoom level
                    }}
                />
            )}
        </div>
    );
}
