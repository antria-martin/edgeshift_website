import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import ProblemSolving from '@/components/ProblemSolving';
import BusinessFocus from '@/components/BusinessFocus';
import Customization from '@/components/Customization';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <ProblemSolving />
        <BusinessFocus />
        <Customization />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
