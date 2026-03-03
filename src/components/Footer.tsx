'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Subscribed: ${email}`);
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Col 1: Logo + newsletter */}
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#1a56db" />
                                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontFamily="Jost" fontWeight="700">H</text>
                            </svg>
                        </div>
                        <div>
                            <span className={styles.logoMain}>HOWE</span>
                            <span className={styles.logoSub}>TechWorks</span>
                        </div>
                    </div>
                    <form className={styles.newsletter} onSubmit={handleSubscribe}>
                        <div className={styles.inputWrap}>
                            <span className={styles.mailIcon}>✉</span>
                            <input
                                type="email"
                                placeholder="Newsletter"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>
                        <button type="submit" className={styles.subBtn}>Subscribe</button>
                    </form>
                </div>

                {/* Col 2: Quick Links */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><Link href="#">About us</Link></li>
                        <li><Link href="#">Career</Link></li>
                        <li><Link href="#">Privacy &amp; Policies</Link></li>
                    </ul>
                </div>

                {/* Col 3: Services */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Services</h4>
                    <ul className={styles.links}>
                        <li><Link href="#">Salesforce services</Link></li>
                        <li><Link href="#">Data Analytics</Link></li>
                        <li><Link href="#">Digital Marketing</Link></li>
                    </ul>
                </div>

                {/* Col 4: Contact */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Get in Touch</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <span className={styles.icon}>📍</span>
                            <span>Markham, CA</span>
                        </li>
                        <li>
                            <span className={styles.icon}>✉</span>
                            <Link href="mailto:info@howetw.com">info@howetw.com</Link>
                        </li>
                        <li>
                            <span className={styles.icon}>📱</span>
                            <Link href="tel:+14378493265">+1 437-849-3265</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} Howe TechWorks. All rights reserved.</p>
                <button
                    className={styles.backTop}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ↑ BACK TO TOP
                </button>
            </div>
        </footer>
    );
}
