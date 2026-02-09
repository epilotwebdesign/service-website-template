import HeroSection from "../components/sections/HeroSection";
import ServicesOverview from "../components/sections/ServicesOverview";
import FeaturedTestimonial from "../components/sections/FeaturedTestimonial";
import CTASection from "../components/sections/CTASection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FeaturedTestimonial />
      <CTASection />
    </div>
  );
}
