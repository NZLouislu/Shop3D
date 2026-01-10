import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';

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
        <main className="container" style={{ marginTop: '80px' }}>
            <div className="py-4 text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
            </div>


            <ProductGallery product={product} />
        </main>

    );
}
