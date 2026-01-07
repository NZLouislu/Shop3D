import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock WebGL and ResizeObserver which are used by Three.js
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock HTMLCanvasElement.getContext
HTMLCanvasElement.prototype.getContext = vi.fn();
