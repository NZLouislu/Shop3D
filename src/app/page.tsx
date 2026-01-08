"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import styles from './page.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const categories = ['All Items', 'Toys', 'Clothing', 'Shoes', 'Electronics', 'Home'];

  const filteredProducts = activeCategory === 'All Items'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="container">
      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={activeCategory === cat ? styles.active : ''}
                onClick={() => setActiveCategory(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.content}>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain', padding: '1rem' }}
                  />
                </div>
                <div className={styles.info}>
                  <h2>{product.name}</h2>
                  <div className={styles.priceWrapper}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

