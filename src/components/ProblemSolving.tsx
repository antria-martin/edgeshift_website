'use client';
import { useEffect, useRef } from 'react';
import styles from './ProblemSolving.module.css';

const points = [
    'We are a team of engineers who assist you in attaining the success phase of your business.',
    "You want to make the product to resolve an acute problem for your target client segment. Having a one-liner plan isn't enough. We'll collaborate with you to outline the matter statement and determine customer needs. Precisely, We know what to build to solve your problem statement.",
    "Having a tribulation and answer isn't sufficient to begin product development. You want to outline the product roadmap, info of features, wireframes, mockups, etc. This step wishes the assistance of a skilled Product Designer. Howe helps you create a constructive plan for your product to build success stories in the future.",
];

export default function ProblemSolving() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.15 }
        );
        const el = ref.current;
        if (el) {
            el.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(c => observer.observe(c));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.text} fade-in-left`}>
                    <p className={styles.eyebrow}>Why Choose Us</p>
                    <h2 className={styles.heading}>
                        Revolutionise your product <span>development with us</span>
                    </h2>
                    <ul className={styles.list}>
                        {points.map((p, i) => (
                            <li key={i} className={styles.listItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                    <p className={styles.learn}>We <strong>LEARN</strong></p>
                </div>
                <div className={`${styles.videoWrap} fade-in-right`}>
                    <div className={styles.videoBox}>
                        <div className={styles.playBtn}>
                            <svg viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                                <polygon points="23,18 46,30 23,42" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.videoLabel}>
                            <div className={styles.videoLogoH}>H</div>
                            <div className={styles.videoLogoText}>Howe<br />Techworks Ltd</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
