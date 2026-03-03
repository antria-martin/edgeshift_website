'use client';
import { useEffect, useRef } from 'react';
import styles from './BusinessFocus.module.css';

const items = [
    {
        num: '01',
        title: 'Futuristic Consulting',
        desc: 'As your technology partner, we help you achieve smooth transformation with simple, secure steps tailored to your specific business requirements. Even first small steps toward extra steady and balanced IT surroundings optimise operational expenses, like excessive protection prices for outdated IT assets.',
        imgSrc: '/hero.png',
        flip: false,
    },
    {
        num: '02',
        title: 'Digitalization',
        desc: 'The panorama of IT technology and improvements is tremendous and growing. We guide agencies through the process of navigating and making sensible IT investments in areas where you can meet the real profit potential. When making plans for an IT strategy, we explicitly plan the value of changes commonly focused on price reduction, workflow automation, growth into new sales channels, or improving the service. Modernise your legacy software to leverage your scalability and assist you in overcoming innovation constraints.',
        imgSrc: '/hero.png',
        flip: true,
    },
    {
        num: '03',
        title: 'Software System Engineering',
        desc: "We handle IT transformation projects — we plan, design, put in force, and constantly aid adjustments envisaged within the IT strategy. You don't need to leap among numerous groups down the street of your transition to an optimised IT infrastructure or digitally converted processes. We help SMBs and SMEs achieve their objectives by developing smart web/mobile applications and providing Cloud-based services and embedded platform solutions.",
        imgSrc: '/hero.png',
        flip: false,
    },
    {
        num: '04',
        title: 'Artificial Intelligence',
        desc: 'We leverage AI for strategic technology and tackle pressing challenges. Putting the power of artificial intelligence to sensible use, we help your organization make intelligent decisions and drive efficiency across all operations.',
        imgSrc: '/hero.png',
        flip: true,
    },
];

export default function BusinessFocus() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        const el = ref.current;
        if (el) {
            el.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(c => observer.observe(c));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={`${styles.headerWrap} fade-in`}>
                <p className={styles.eyebrow}>What We Do</p>
                <h2 className={styles.sectionTitle}>Our Business Focus</h2>
            </div>

            {items.map((item) => (
                <div key={item.num} className={`${styles.item} ${item.flip ? styles.flipped : ''}`}>
                    <div className={styles.divider} />
                    <div className={styles.container}>
                        <div className={`${styles.visual} ${item.flip ? 'fade-in-right' : 'fade-in-left'}`}>
                            <div className={styles.illustrationBox}>
                                <div className={styles.numBg}>{item.num}</div>
                                <img src={item.imgSrc} alt={item.title} className={styles.illus} />
                            </div>
                        </div>
                        <div className={`${styles.text} ${item.flip ? 'fade-in-left' : 'fade-in-right'}`}>
                            <div className={styles.numLabel}>{item.num}</div>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDesc}>{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
