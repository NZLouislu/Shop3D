import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';
import styles from './product.module.css';
import Link from 'next/link';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <main className="container">
            <div className={styles.backLink}>
                <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 8px', color: '#999' }}>{'>'}</span>
                <span style={{ color: '#333', fontWeight: 500 }}>{product.name}</span>
            </div>

            <ProductGallery product={product} />
        </main>

    );
}
