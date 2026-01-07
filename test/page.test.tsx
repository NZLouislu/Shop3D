import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { products } from '@/data/products';
import { expect, test, vi } from 'vitest';

// Mock next/image
vi.mock('next/image', () => ({
    default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

// Mock next/link
vi.mock('next/link', () => ({
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    ),
}));

test('renders product list', () => {
    render(<Home />);

    expect(screen.getByText(/Categories/i)).toBeDefined();

    products.forEach((product) => {
        expect(screen.getByText(product.name)).toBeDefined();
        expect(screen.getByText(product.price.toString())).toBeDefined();
    });
});
