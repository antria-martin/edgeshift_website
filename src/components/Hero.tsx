'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const slides = [
    {
        id: 1,
        heading: 'The Era Of Diversified',
        highlight: 'Engineering Experience',
        sub: 'We help you achieve smooth transformation with simple, secure steps tailored to your specific business requirements.',
        img: '/hero.png',
    },
    {
        id: 2,
        heading: 'Revolutionise Your',
        highlight: 'Product Development',
        sub: 'We collaborate with you to outline the problem statement, roadmap features, and build success stories for the future.',
        img: '/hero.png',
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 5000);
    };

    useEffect(() => {
        startInterval();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    const goTo = (idx: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setCurrent(idx);
        startInterval();
    };

    return (
        <section className={styles.hero}>
            {/* Morphing blob backgrounds */}
            <div className={`${styles.blob1} animMorph animFloat`} />
            <div className={`${styles.blob2} animMorph animFloatX`} style={{ animationDelay: '-3s' }} />
            <div className={`${styles.blob3} animMorph`} style={{ animationDelay: '-6s' }} />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.particle} style={{
                    left: `${10 + i * 15}%`,
                    bottom: `${20 + (i % 3) * 10}%`,
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${4 + i * 0.8}s`,
                }} />
            ))}

            {/* Dot grid overlay */}
            <div className={styles.dotGrid} />

            <div className={styles.container}>
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${idx === current ? styles.active : ''}`}
                    >
                        <div className={`${styles.content} fade-in`}>
                            <h1 className={styles.heading}>
                                {slide.heading}{' '}
                                <span className={styles.highlight}>{slide.highlight}</span>
                            </h1>
                            <p className={styles.sub}>{slide.sub}</p>
                            <div className={styles.actions}>
                                <a href="/contact" className={styles.btnPrimary}>Get Started</a>
                                <a href="/about" className={styles.btnSecondary}>Learn More</a>
                            </div>
                        </div>
                        <div className={`${styles.imageWrap} fade-in-right`}>
                            <Image
                                src={slide.img}
                                alt={slide.heading}
                                width={520}
                                height={420}
                                priority={idx === 0}
                                className={`${styles.heroImg} animBreathe`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button className={`${styles.arrow} ${styles.prev}`} onClick={() => goTo((current - 1 + slides.length) % slides.length)}>&#8592;</button>
            <button className={`${styles.arrow} ${styles.next}`} onClick={() => goTo((current + 1) % slides.length)}>&#8594;</button>

            {/* Dots */}
            <div className={styles.dots}>
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
                        onClick={() => goTo(idx)}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
