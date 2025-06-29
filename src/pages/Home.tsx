import HeroSection from '../components/Home/HeroSection';
import FeaturedProperties from '../components/Home/FeaturedProperties';
import ServiceCategories from '../components/Home/ServiceCategories';
import CitiesSection from '../components/Home/CitiesSection';
import AgentsSection from '../components/Home/AgentsSection';
import NewsSection from '../components/Home/NewsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProperties />
      <ServiceCategories />
      <CitiesSection />
      <AgentsSection />
      <NewsSection />
    </div>
  );
}