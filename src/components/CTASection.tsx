'use client';
import { useEffect, useRef } from 'react';
import styles from './CTASection.module.css';
import Link from 'next/link';

export default function CTASection() {
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
        <section className={styles.section} id="contact" ref={ref}>
            {/* dots decoration */}
            <div className={styles.dotsGrid} />
            {/* teal shape */}
            <div className={styles.shapeRight} />

            <div className={styles.container}>
                {/* Illustration */}
                <div className={`${styles.visual} fade-in-left`}>
                    <div className={styles.supportIllustration}>
                        <div className={styles.supportAgent}>
                            <div className={styles.agentAvatar}>👩‍💼</div>
                            <div className={styles.screen}>
                                <div className={styles.screenLine} />
                                <div className={styles.screenLine} />
                                <div className={styles.screenLine} />
                            </div>
                        </div>
                        <div className={`${styles.bubble} ${styles.bubble1}`}>
                            <div className={styles.bubbleLine} />
                            <div className={styles.bubbleLine} />
                            <div className={styles.bubbleDot}>···</div>
                        </div>
                        <div className={`${styles.bubble} ${styles.bubble2}`}>
                            <div className={styles.avatarSmall}>😊</div>
                        </div>
                        <div className={`${styles.bubble} ${styles.bubble3}`}>
                            <div className={styles.avatarSmall}>🙋</div>
                        </div>
                    </div>
                </div>

                {/* Text + CTA */}
                <div className={`${styles.content} fade-in-right`}>
                    <h2 className={styles.heading}>
                        Consult our experts to crack the IT nuts, we are just a text away.
                    </h2>
                    <Link href="mailto:info@howetw.com" className={styles.btn}>
                        Contact Us &rsaquo;
                    </Link>
                </div>
            </div>
        </section>
    );
}
