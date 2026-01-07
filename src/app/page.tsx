import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import styles from './page.module.css';

export default function Home() {
  const categories = ['All Items', 'Toys', 'Clothing', 'Shoes', 'Electronics', 'Home'];

  return (
    <main className="container">
      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <h3>Categories</h3>
          <ul>
            {categories.map((cat, i) => (
              <li key={cat} className={i === 0 ? styles.active : ''}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.content}>
          <div className={styles.grid}>
            {products.map((product) => (
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

