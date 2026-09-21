import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import InfoStrip from "../components/sections/InfoStrip";
import CategorySection from "../components/sections/CategorySection";
import ContactSection from "../components/sections/ContactSection";
import { categories } from "../data/categories";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <InfoStrip />
        {categories.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            tinted={index % 2 === 1}
          />
        ))}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
