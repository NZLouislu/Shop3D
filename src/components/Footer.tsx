import { ComponentPropsWithoutRef } from "react";
import styles from "./Footer.module.css";

export default function Footer({ className, ...props }: ComponentPropsWithoutRef<"footer">) {
    return (
        <footer className={`${styles.footerWrapper} ${className}`} {...props}>
            <div className={styles.container}>
                <div className={styles.footerCard}>

                    {/* Top Content: Brand Only */}
                    <div className={styles.topSection}>
                        <div className={styles.brandSection}>
                            <h3 className={styles.brandTitle}>
                                NZLouis Shop
                            </h3>
                            <p className={styles.brandDesc}>
                                Exploring the future of e-commerce with interactive 3D product showcases.
                                Experience shopping in a new dimension.
                            </p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    {/* Bottom Content: Copyright Only */}
                    <div className={styles.bottomSection}>
                        <p>© {new Date().getFullYear()} NZLouis | Louis Lu. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
