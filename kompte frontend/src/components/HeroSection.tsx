import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, TrendingUp, Target, Zap, Clock } from "lucide-react";
import heroCourt from "@/assets/hero-court.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-kompte-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/5 to-kompte-navy" />
      <div className="relative container mx-auto px-6 py-20"/>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-foreground mb- tracking-tight">
                KOMPTE<span className="text-primary">.</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2 font-medium">
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

        {/* Feature Cards - Redesigned like Premium Stamina Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-1">
          {/* Court Heatmaps */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accuracy-green/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-4xl font-large text-foreground">Court Heatmaps</CardTitle>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accuracy-green/20 to-accuracy-green/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-11 h-11 text-accuracy-green" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-2xl text-muted-foreground">Visualize shuttle impact zones with precision heat mapping.</p>
            </CardContent>
          </Card>

          {/* Stamina Analysis */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-velocity-orange/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-4xl font-large text-foreground">Stamina Analysis</CardTitle>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-velocity-orange/20 to-velocity-orange/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="w-11 h-11 text-velocity-orange" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-2xl text-muted-foreground">Track shuttle speed and performance trends over time.</p>
            </CardContent>
          </Card>

          {/* Reaction Insights */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-data-blue/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-4xl font-medium text-foreground">Reaction Insights</CardTitle>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-data-blue/20 to-data-blue/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Clock className="w-11 h-11 text-data-blue" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-2xl text-muted-foreground">Analyze pickup timing and reaction performance of the player.</p>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export default HeroSection;