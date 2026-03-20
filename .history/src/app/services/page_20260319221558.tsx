import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './services.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Services | Howe TechWorks',
    description: 'Explore Howe TechWorks services: Salesforce, Data Analytics, Digital Marketing, and AI solutions tailored for your business.',
};

const services = [
    {
        icon: '☁️',
        title: 'Salesforce Services',
        tag: 'CRM',
        features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Custom Development', 'Data Migration', 'Training & Support'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our certified Salesforce experts design and implement tailored CRM solutions that streamline your operations, drive revenue, and create exceptional customer experiences.',
    },
    {
        icon: '📊',
        title: 'Data Analytics',
        tag: 'Insights',
        features: ['Business Intelligence', 'Data Visualization', 'Predictive Modelling', 'ETL Pipelines', 'Dashboard Design', 'Reporting Automation'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate. We transform raw data into actionable insights, building custom analytics pipelines and dashboards that empower your teams to make informed, data-driven decisions.',
    },
    {
        icon: '📢',
        title: 'Digital Marketing',
        tag: 'Growth',
        features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'PPC Campaigns', 'Email Marketing', 'Analytics & ROI'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident. Our digital marketing experts craft integrated strategies that increase your online visibility, attract quality leads, and convert them into loyal customers.',
    },
    {
        icon: '🤖',
        title: 'Artificial Intelligence',
        tag: 'AI & ML',
        features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation', 'Predictive Analytics', 'AI Consulting'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. We harness the power of AI and machine learning to automate processes, uncover patterns, and build intelligent systems that give your business a competitive edge.',
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>What We Do</p>
                        <h1 className={styles.heroTitle}>Our <span>Services</span></h1>
                        <p className={styles.heroSub}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive technology services designed to accelerate your digital transformation journey.
                        </p>
                    </div>
                </section>

                {/* Services */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        {services.map((s, i) => (
                            <div key={s.title} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.flipped : ''}`}>
                                <div className={styles.serviceVisual}>
                                    <div className={styles.iconBox}>
                                        <span className={styles.bigIcon}>{s.icon}</span>
                                        <span className={styles.tag}>{s.tag}</span>
                                    </div>
                                    <ul className={styles.featureList}>
                                        {s.features.map(f => (
                                            <li key={f} className={styles.featureItem}>
                                                <span className={styles.tick}>✓</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.serviceText}>
                                    <span className={styles.num}>0{i + 1}</span>
                                    <h2 className={styles.serviceTitle}>{s.title}</h2>
                                    <p className={styles.serviceDesc}>{s.desc}</p>
                                    <Link href="/contact" className={styles.learnBtn}>Get Started →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA strip */}
                <section className={styles.ctaStrip}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>Ready to get started?</h2>
                        <p className={styles.ctaSub}>Talk to our experts and find the right solution for your business.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Contact Us Today</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
