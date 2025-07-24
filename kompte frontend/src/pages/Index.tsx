import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import UploadSection from "@/components/UploadSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import StaminaSection from "@/components/StaminaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UploadSection />
      <Dashboard />
      <StaminaSection />
      <AnalyticsSection />
    </div>
  );
};

export default Index;
