import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './testimonials.module.css';

export const metadata: Metadata = {
    title: 'Testimonials & Case Studies | Howe TechWorks',
    description: 'Read customer reviews and success stories from clients who have transformed their businesses with Howe TechWorks.',
};

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'CTO, NovaTech Solutions',
        emoji: '👩‍💼',
        rating: 5,
        category: 'Salesforce',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Howe TechWorks transformed our entire IT infrastructure with remarkable efficiency. Their team was professional, responsive, and delivered beyond our expectations. We saw immediate ROI within the first quarter.',
    },
    {
        name: 'James Okafor',
        role: 'CEO, PrimePath Logistics',
        emoji: '👨‍💼',
        rating: 5,
        category: 'Data Analytics',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Salesforce implementation was seamless. We saw a 40% improvement in our sales pipeline within two months. Their expertise and communication throughout the project was outstanding.',
    },
    {
        name: 'Priya Sharma',
        role: 'Head of Digital, RetailXpert',
        emoji: '👩‍🔬',
        rating: 5,
        category: 'Digital Marketing',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Their data analytics solution gave us real-time visibility into our customers. Best technology investment we have made. Our conversion rate improved by over 60% in six months.',
    },
    {
        name: 'Marcus Lee',
        role: 'VP Engineering, FinEdge',
        emoji: '👨‍🎓',
        rating: 5,
        category: 'AI Solutions',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The AI automation they built for our underwriting process cut review time by 70%. Incredibly talented engineers who truly understand business problems.',
    },
    {
        name: 'Olivia Fernandez',
        role: 'Operations Manager, HealthBridge',
        emoji: '👩‍⚕️',
        rating: 5,
        category: 'Salesforce',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We needed a Salesforce Health Cloud deployment done under a tight deadline. Howe TechWorks delivered ahead of schedule with zero defects. Exceptional work.',
    },
    {
        name: 'Daniel Park',
        role: 'Founder, GrowthLab',
        emoji: '👨‍💻',
        rating: 5,
        category: 'Digital Marketing',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Within 90 days of their digital marketing strategy, our organic traffic tripled and our cost-per-lead dropped by half. Results speak for themselves.',
    },
];

const caseStudies = [
    {
        tag: 'Salesforce • Enterprise',
        title: 'Scaling CRM for a National Logistics Company',
        impact: ['35% faster deal closure', '200+ users onboarded', '90-day delivery'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We implemented a multi-cloud Salesforce solution that unified the client\'s sales, service, and field operations teams, delivering measurable results within the first quarter.',
    },
    {
        tag: 'Data Analytics • Mid-Market',
        title: 'Real-Time Sales Dashboard for Retail Chain',
        impact: ['60% faster reporting', '$2M cost savings', 'Live BI dashboards'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. We built a full analytics pipeline from their ERP to a real-time Tableau dashboard, eliminating manual reporting and enabling daily data-driven decisions.',
    },
    {
        tag: 'AI & ML • FinTech',
        title: 'AI-Powered Underwriting Automation',
        impact: ['70% time reduction', '99.2% accuracy', 'Fully automated'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident. We designed and deployed a machine learning model to automate the underwriting review process, dramatically reducing processing time while improving accuracy.',
    },
];

export default function TestimonialsPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Social Proof</p>
                        <h1 className={styles.heroTitle}>Testimonials &amp; <span>Case Studies</span></h1>
                        <p className={styles.heroSub}>Proof is in the results. Hear directly from the businesses we've helped.</p>
                    </div>
                </section>

                {/* Testimonials grid */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.centeredHeader}>
                            <p className={styles.eyebrowDark}>What Clients Say</p>
                            <h2 className={styles.title}>Customer Reviews</h2>
                        </div>
                        <div className={styles.grid}>
                            {testimonials.map((t, i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
                                        <span className={styles.category}>{t.category}</span>
                                    </div>
                                    <p className={styles.quote}>"{t.text}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>{t.emoji}</div>
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

                {/* Case Studies */}
                <section className={`${styles.section} ${styles.darkBg}`}>
                    <div className={styles.container}>
                        <div className={styles.centeredHeader}>
                            <p className={styles.eyebrowLight}>In Depth</p>
                            <h2 className={styles.titleLight}>Case Studies</h2>
                        </div>
                        <div className={styles.caseGrid}>
                            {caseStudies.map((c, i) => (
                                <div key={i} className={styles.caseCard}>
                                    <span className={styles.caseTag}>{c.tag}</span>
                                    <h3 className={styles.caseTitle}>{c.title}</h3>
                                    <p className={styles.caseDesc}>{c.desc}</p>
                                    <div className={styles.impacts}>
                                        {c.impact.map(imp => (
                                            <span key={imp} className={styles.impact}>{imp}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
