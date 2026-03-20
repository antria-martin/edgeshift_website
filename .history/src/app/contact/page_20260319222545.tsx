"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [form, setForm] =.heroInner {
    max-width: 700px;
    margin: 0 auto;
}

.eyebrow {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    margin-bottom: 12px;
}

.heroTitle {
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.15;
}

.heroSub {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.75;
} useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Reach Out</p>
            <h1 className={styles.heroTitle}>
              Contact <span>Us</span>
            </h1>
            <p className={styles.heroSub}>
              We'd love to hear from you. Send us a message and we'll respond
              within one business day.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Info cards */}
            <div className={styles.infoGrid}>
              {[
                {
                  icon: "📍",
                  label: "Our Location",
                  val: "Markham, Ontario, Canada",
                },
                { icon: "✉", label: "Email Us", val: "info@howetw.com" },
                { icon: "📞", label: "Call Us", val: "+1 437-849-3265" },
                {
                  icon: "🕐",
                  label: "Business Hours",
                  val: "Mon–Fri: 9am – 6pm EST",
                },
              ].map(({ icon, label, val }) => (
                <div key={label} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{icon}</div>
                  <div>
                    <p className={styles.infoLabel}>{label}</p>
                    <p className={styles.infoVal}>{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form + Map */}
            <div className={styles.formSection}>
              <div className={styles.formWrap}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                {sent ? (
                  <div className={styles.success}>
                    <span className={styles.successIcon}>✅</span>
                    <p>
                      Thank you! Your message has been sent. We'll be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label>Full Name *</label>
                        <input
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label>Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label>Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="+1 (000) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label>Subject *</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a service…</option>
                          <option>Salesforce Services</option>
                          <option>Data Analytics</option>
                          <option>Digital Marketing</option>
                          <option>AI Solutions</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label>Message *</label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us how we can help…"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Send Message →
                    </button>
                  </form>
                )}
              </div>

              {/* Map placeholder */}
              <div className={styles.mapWrap}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapPin}>📍</div>
                  <p className={styles.mapLabel}>Howe TechWorks</p>
                  <p className={styles.mapSub}>Markham, Ontario, CA</p>
                  <a
                    href="https://maps.google.com/?q=Markham,Ontario,Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
