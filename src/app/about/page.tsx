import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About Us | Howe TechWorks',
    description: 'Learn about Howe TechWorks — our mission, values, and the expert team behind our technology consultancy services in Markham, CA.',
};

const teamMembers = [
    { name: 'Howe Johnson', role: 'Founder & CEO', emoji: '👨‍💻' },
    { name: 'Amara Williams', role: 'Head of Salesforce', emoji: '👩‍💼' },
    { name: 'David Chen', role: 'Lead Data Analyst', emoji: '👨‍🔬' },
    { name: 'Priya Nair', role: 'Digital Marketing Director', emoji: '👩‍🎨' },
];

const values = [
    { icon: '🎯', title: 'Purpose-driven', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    { icon: '🤝', title: 'Partnership', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.' },
    { icon: '🚀', title: 'Innovation', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
    { icon: '🔒', title: 'Integrity', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magnam aliquam quaerat voluptatem totam rem aperiam.' },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Who We Are</p>
                        <h1 className={styles.heroTitle}>About <span>Howe TechWorks</span></h1>
                        <p className={styles.heroSub}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are a technology consultancy based in Markham, CA, dedicated to transforming businesses through cutting-edge digital solutions.
                        </p>
                    </div>
                    <div className={styles.heroBg} />
                </section>

                {/* Mission */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.missionGrid}>
                            <div className={styles.missionText}>
                                <p className={styles.eyebrowDark}>Our Mission</p>
                                <h2 className={styles.sectionTitle}>Empowering businesses through intelligent technology</h2>
                                <p className={styles.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                </p>
                                <p className={styles.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                </p>
                            </div>
                            <div className={styles.statsGrid}>
                                {[['10+', 'Years Experience'], ['150+', 'Projects Delivered'], ['50+', 'Happy Clients'], ['4', 'Service Areas']].map(([num, label]) => (
                                    <div key={label} className={styles.statCard}>
                                        <span className={styles.statNum}>{num}</span>
                                        <span className={styles.statLabel}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className={`${styles.section} ${styles.valueBg}`}>
                    <div className={styles.container}>
                        <div className={styles.centeredHeader}>
                            <p className={styles.eyebrow}>Core Principles</p>
                            <h2 className={styles.sectionTitleW}>Our Values</h2>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((v) => (
                                <div key={v.title} className={styles.valueCard}>
                                    <div className={styles.valueIcon}>{v.icon}</div>
                                    <h3 className={styles.valueTitle}>{v.title}</h3>
                                    <p className={styles.valueDesc}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.centeredHeaderDark}>
                            <p className={styles.eyebrowDark}>The People</p>
                            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
                            <p className={styles.subDark}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A diverse team of experts united by a passion for technology.</p>
                        </div>
                        <div className={styles.teamGrid}>
                            {teamMembers.map((m) => (
                                <div key={m.name} className={styles.teamCard}>
                                    <div className={styles.teamAvatar}>{m.emoji}</div>
                                    <h3 className={styles.teamName}>{m.name}</h3>
                                    <p className={styles.teamRole}>{m.role}</p>
                                    <p className={styles.teamBio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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
