'use client';
import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'CTO, NovaTech Solutions',
        avatar: '👩‍💼',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Howe TechWorks transformed our entire IT infrastructure with remarkable efficiency. Their team was professional, responsive, and delivered beyond our expectations.',
    },
    {
        name: 'James Okafor',
        role: 'CEO, PrimePath Logistics',
        avatar: '👨‍💼',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Salesforce implementation was seamless. We saw a 40% improvement in our sales pipeline within just two months of working with the Howe TechWorks team.',
    },
    {
        name: 'Priya Sharma',
        role: 'Head of Digital, RetailXpert',
        avatar: '👩‍🔬',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Their data analytics solution gave us real-time visibility into our customers. Best technology investment we have made. Highly recommended.',
    },
];

export default function Testimonials() {
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
                    <p className={styles.eyebrow}>What Clients Say</p>
                    <h2 className={styles.title}>Testimonials & Case Studies</h2>
                    <p className={styles.subtitle}>Real stories from businesses we have helped grow.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`${styles.card} fade-in`}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
                            <p className={styles.quote}>"{t.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.avatar}</div>
                                <div>
                                    <p className={styles.name}>{t.name}</p>
                                    <p className={styles.role}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
