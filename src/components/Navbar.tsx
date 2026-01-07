"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const items = [
        { label: "Home", href: "/" },
        { label: "Toys", href: "/#toys" },
        { label: "Clothing", href: "/#clothing" },
        { label: "Shoes", href: "/#shoes" },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="https://www.nzlouis.com" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                    <Image
                        src="/images/nzlouis-logo.png"
                        alt="Nzlouis logo — Lu Louis"
                        width={100}
                        height={30}
                        priority
                        style={{ width: '100px', height: '30px', objectFit: 'contain' }}
                    />
                </Link>

                <div className={styles.desktopMenu}>
                    {items.map((i) => (
                        <Link
                            key={i.href}
                            href={i.href}
                            className={styles.navLink}
                            prefetch
                        >
                            {i.label}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className={styles.mobileToggle}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileLinks}>
                        {items.map((i) => (
                            <Link
                                key={i.href}
                                href={i.href}
                                className={styles.mobileLink}
                                onClick={() => setOpen(false)}
                                prefetch
                            >
                                {i.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
