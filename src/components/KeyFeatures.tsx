'use client';
import { useEffect, useRef } from 'react';
import styles from './KeyFeatures.module.css';

const features = [
    {
        icon: '🏠',
        title: 'Engaging Homepage',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        icon: '🏢',
        title: 'About Us',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
        icon: '⚙️',
        title: 'Services & Products',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
        icon: '📩',
        title: 'Contact Page',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
        icon: '⭐',
        title: 'Testimonials & Case Studies',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    },
];

export default function KeyFeatures() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        const el = ref.current;
        if (el) el.querySelectorAll('.fade-in').forEach(c => observer.observe(c));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.header} fade-in`}>
                    <p className={styles.eyebrow}>What We Offer</p>
                    <h2 className={styles.title}>Key Features</h2>
                    <p className={styles.subtitle}>
                        Everything you need to transform your business — all in one place.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`${styles.card} fade-in`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.icon}>{f.icon}</div>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                            <div className={styles.line} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
