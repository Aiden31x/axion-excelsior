import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SolutionsOverview from '@/components/SolutionsOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import AlternatingFeatures from '@/components/AlternatingFeatures';
import CustomerSegments from '@/components/CustomerSegments';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <SolutionsOverview /> */}
      {/* <WhyChooseUs /> */}
      <AlternatingFeatures />
      <CustomerSegments />
      <CTASection />
      <Footer />
    </div>
  );
}