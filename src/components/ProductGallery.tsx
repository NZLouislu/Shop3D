"use client";

import { useState } from 'react';
import Image from 'next/image';
import ThreeViewer from './ThreeViewer';
import styles from '../app/product/[id]/product.module.css';
import { Product } from '@/data/products';

export default function ProductGallery({ product }: { product: Product }) {
    const [activeMedia, setActiveMedia] = useState<'3d' | number>('3d');

    return (
        <div className={styles.productContent}>
            {/* Thumbnails Sidebar */}
            <div className={styles.thumbnails}>
                <div
                    className={`${styles.thumbItem} ${activeMedia === '3d' ? styles.active : ''}`}
                    onClick={() => setActiveMedia('3d')}
                >
                    <Image src={product.image} alt="3D View" fill style={{ objectFit: 'cover' }} />
                    <div className={styles.thumb3DLabel}>3D</div>
                </div>
                {product.images.map((img, index) => (
                    <div
                        key={index}
                        className={`${styles.thumbItem} ${activeMedia === index ? styles.active : ''}`}
                        onClick={() => setActiveMedia(index)}
                    >
                        <Image src={img} alt={`${product.name} ${index}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                ))}
            </div>

            {/* Main Media Display */}
            <div className={styles.viewerColumn}>
                {activeMedia === '3d' ? (
                    <ThreeViewer modelUrl={product.model} />
                ) : (
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src={product.images[activeMedia as number]}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                )}
                {activeMedia === '3d' && (
                    <p className={styles.hint} style={{ textAlign: 'center', marginTop: '1rem', color: '#999', position: 'absolute', bottom: '10px', width: '100%' }}>
                        3D Interactive Viewer • Drag to explore
                    </p>
                )}
            </div>

            <div className={styles.infoColumn}>
                <h1 className={styles.title}>{product.name}</h1>

                <div className={styles.priceBox}>
                    <div className={styles.priceLabel}>Promotion Price</div>
                    <div className={styles.priceWrapper}>
                        <span className={styles.currency}>$</span>
                        <span className={styles.price}>{product.price}</span>
                    </div>
                    <div className={styles.tags}>
                        <span className={styles.tag}>Flash Sale</span>
                        <span className={styles.tag}>Free Shipping</span>
                    </div>
                </div>

                <div className={styles.specs}>
                    <div className={styles.specRow}>
                        <span className={styles.specLabel}>Shipping</span>
                        <span>Free shipping from Overseas</span>
                    </div>
                    <div className={styles.specRow}>
                        <span className={styles.specLabel}>Service</span>
                        <span>7 Days Return • Genuine Guarantee</span>
                    </div>
                    <div className={styles.specRow}>
                        <span className={styles.specLabel}>Selection</span>
                        <span>Standard Edition / {product.name}</span>
                    </div>
                </div>

                <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {product.description}
                </p>

                <div className={styles.actions}>
                    <button className={styles.buyNow}>Buy Now</button>
                    <button className={styles.addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
