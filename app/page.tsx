import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CompanyProfile from "@/components/CompanyProfile"
import ClientSlider from "@/components/shared/ClientSlider"
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile/>
      <WhyChooseUs/>
      <ClientSlider/>
      <ServicesSection />
    </main>
  );
}