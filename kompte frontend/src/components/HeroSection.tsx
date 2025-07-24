import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, TrendingUp, Target, Clock } from "lucide-react";
import heroCourt from "@/assets/hero-court.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-kompte-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/5 to-kompte-navy" />
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tight">
                KOMPTE<span className="text-primary">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
                Crafting Champions Since 2022.
              </p>
              <p className="text-2xl md:text-3xl text-foreground font-semibold">
                Ready Set KOMPTE.
              </p>
            </div>
            
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Upload your badminton match video to unlock professional-grade 
                performance insights with AI-powered court visualization and analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="kompte" size="lg" className="text-lg px-8 py-6 font-bold">
                <Play className="w-5 h-5" />
                Start Analysis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:bg-card">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Hero Image/Graphic */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroCourt} 
                alt="Badminton Court"
                className="w-full h-[400px] object-cover rounded-2xl shadow-performance opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kompte-navy/60 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-kompte-purple rounded-full flex items-center justify-center mb-4 mx-auto shadow-performance">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-semibold">See Analytics in Action</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-performance transition-smooth hover:bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accuracy-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Court Heatmaps</h3>
                <p className="text-muted-foreground">
                  Visualize shuttle impact zones with precision heat mapping
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-performance transition-smooth hover:bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-velocity-orange rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Velocity Analysis</h3>
                <p className="text-muted-foreground">
                  Track shuttle speed and performance trends over time
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-performance transition-smooth hover:bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-data-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Reaction Insights</h3>
                <p className="text-muted-foreground">
                  Analyze pickup timing and reaction performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;