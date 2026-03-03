'use client';
import { useEffect, useRef } from 'react';
import styles from './Customization.module.css';

const cards = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="12" width="40" height="28" rx="3" stroke="white" strokeWidth="2.5" />
                <path d="M14 32 L20 24 L26 28 L34 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="34" cy="18" r="2.5" fill="white" />
                <line x1="4" y1="20" x2="44" y2="20" stroke="white" strokeWidth="1.5" opacity="0.4" />
            </svg>
        ),
        title: 'Real-Time Analytics',
        desc: 'We work closely with clients to fully comprehend their needs and issues. Once the problem has been identified, our team of specialists will design a strategy based on the market analysis findings.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2.5" />
                <polyline points="16,24 21,30 32,18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="8" r="3" fill="white" opacity="0.5" />
                <circle cx="38" cy="32" r="3" fill="white" opacity="0.5" />
                <circle cx="10" cy="32" r="3" fill="white" opacity="0.5" />
            </svg>
        ),
        title: 'Fast and Intuitive',
        desc: 'Our UX team ensures that all software transitions are smooth and the transition will be smoothed down by lowering workflow turbulence, creating an intuitive experience for end users.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6 L38 12 L38 26 C38 34 24 42 24 42 C24 42 10 34 10 26 L10 12 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                <polyline points="18,24 22,28 30,20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Validate',
        desc: 'We employ test-driven development, quality assurance practices, and comprehensive validation before deploying the product to market, ensuring reliability and performance.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="18" width="14" height="14" rx="2" stroke="white" strokeWidth="2.5" />
                <rect x="28" y="18" width="14" height="14" rx="2" stroke="white" strokeWidth="2.5" />
                <rect x="17" y="8" width="14" height="10" rx="2" stroke="white" strokeWidth="2.5" />
                <line x1="20" y1="18" x2="28" y2="18" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
                <line x1="13" y1="25" x2="28" y2="25" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
            </svg>
        ),
        title: 'Well Integrated',
        desc: 'Proper integration of systems for productivity — we ensure all your platforms connect seamlessly, making workflows more productive and the overall process more smooth.',
    },
];

export default function Customization() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        const el = ref.current;
        if (el) {
            el.querySelectorAll('.fade-in').forEach(c => observer.observe(c));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            {/* decorative dots */}
            <div className={styles.dots1} />
            <div className={styles.dots2} />

            <div className={styles.container}>
                <div className={`${styles.header} fade-in`}>
                    <h2 className={styles.title}>We Customize Your Software to The Smart Ways</h2>
                </div>

                <div className={styles.grid}>
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`${styles.card} fade-in`}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <div className={styles.iconWrap}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDesc}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
