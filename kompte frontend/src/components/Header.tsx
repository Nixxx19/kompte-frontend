import { Button } from "@/components/ui/button";
import { BarChart3, Upload, Settings, Home, Dumbbell } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BarChart3 className="w-8 h- text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">KOMPTE AI<span className="text-primary">.</span></h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm">
              <Home className="w-4 h-4" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
              Calibration
            </Button>
            <Button variant="ghost" size="sm">
              <Upload className="w-4 h-4" />
              Upload
            </Button>
            <Button variant="ghost" size="sm">
              <Dumbbell className="w-4 h-4" />
              Drill
            </Button>
            <Button variant="ghost" size="sm">
              <BarChart3 className="w-4 h-4" />
              Analytics 
            </Button>
          </nav>

          <Button variant="kompte" size="default" className="font-bold">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;