import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Clock, Zap, BarChart3 } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Performance Dashboard</h2>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
            Real-time analytics and insights from your badminton performance data
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
  {/* Total Pickups */}
  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl glow-secondary">
    <div className="absolute inset-0 bg-gradient-to-br from-accuracy-green/5 to-transparent"></div>
    <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-2xl font-medium font-semibold text-muted-foreground">Total<br/>Pickups</CardTitle>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accuracy-green/20 to-accuracy-green/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Target className="w-10 h-11 text-accuracy-green" />
      </div>
    </CardHeader>
    <CardContent className="relative">
      <div className="text-5xl font-bold text-foreground mb-2 tracking-tight">247</div>
      <div className="flex items-center text-sm">
        <TrendingUp className="w-6 h-8 text-accuracy-green mr-2" />
        <span className="text-accuracy-green font-medium">12% from last match</span>
      </div>
    </CardContent>
  </Card>

  {/* Avg Stamina */}
  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl glow-primary">
    <div className="absolute inset-0 bg-gradient-to-br from-velocity-orange/5 to-transparent"></div>
    <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-2xl font-medium font-semibold text-muted-foreground">Average<br/>Stamina</CardTitle>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-velocity-orange/20 to-velocity-orange/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Zap className="w-10 h-11 text-velocity-orange" />
      </div>
    </CardHeader>
    <CardContent className="relative">
      <div className="text-5xl font-bold text-foreground mb-2 tracking-tight">82%</div>
      <div className="flex items-center text-sm">
        <TrendingUp className="w-6 h-8 text-velocity-orange mr-2" />
        <span className="text-velocity-orange font-medium">5.2% faster</span>
      </div>
    </CardContent>
  </Card>

  {/* Reaction Time */}
  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-data-blue/5 to-transparent"></div>
    <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-2xl font-medium font-semibold text-muted-foreground">Reaction<br/>Time</CardTitle>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-data-blue/20 to-data-blue/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Clock className="w-10 h-11 text-data-blue" />
      </div>
    </CardHeader>
    <CardContent className="relative">
      <div className="text-5xl font-bold text-foreground mb-2 tracking-tight">0.34s</div>
      <div className="flex items-center text-sm">
        <TrendingDown className="w-6 h-8 text-destructive mr-2" />
        <span className="text-destructive font-medium">0.02s slower</span>
      </div>
    </CardContent>
  </Card>

  {/* Accuracy */}
  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/5 to-transparent"></div>
    <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-2xl font-medium font-semibold text-muted-foreground">Player<br/>Accuracy</CardTitle>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-kompte-purple/20 to-kompte-purple/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <BarChart3 className="w-10 h-11 text-kompte-purple" />
      </div>
    </CardHeader>
    <CardContent className="relative">
      <div className="text-5xl font-bold text-foreground mb-2 tracking-tight">87.3%</div>
      <div className="flex items-center text-sm">
        <TrendingUp className="w-6 h-8 text-accuracy-green mr-2" />
        <span className="text-accuracy-green font-medium">3.1% better</span>
      </div>
    </CardContent>
  </Card>
</div>



        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Court Heatmap */}
          <Card className="lg:col-span-2 hover:shadow-lg transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-6 h-6 bg-accuracy-green rounded flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Court Impact Heatmap
              </CardTitle>
              <CardDescription>
                Shuttle landing positions with impact intensity
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                {/* Zone Visit Heatmap */}
                <div className="bg-card rounded-lg border p-4">
                  <h4 className="text-sm font-medium text-center mb-4">Zone Visit Heatmap</h4>
                  
                  <div className="grid grid-cols-3 gap-1 max-w-md mx-auto">
                    {/* Row 1 */}
                    <div className="aspect-square bg-blue-500 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>8.7%</div>
                      <div className="text-[10px] opacity-75">(2,0)</div>
                    </div>
                    <div className="aspect-square bg-blue-600 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>0.0%</div>
                      <div className="text-[10px] opacity-75">(2,1)</div>
                    </div>
                    <div className="aspect-square bg-blue-600 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>0.0%</div>
                      <div className="text-[10px] opacity-75">(2,2)</div>
                    </div>

                    {/* Row 2 */}
                    <div className="aspect-square bg-orange-500 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>28.9%</div>
                      <div className="text-[10px] opacity-75">(1,0)</div>
                    </div>
                    <div className="aspect-square bg-yellow-400 text-black rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>41.9%</div>
                      <div className="text-[10px] opacity-75">(1,1)</div>
                    </div>
                    <div className="aspect-square bg-blue-600 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>0.0%</div>
                      <div className="text-[10px] opacity-75">(1,2)</div>
                    </div>

                    {/* Row 0 */}
                    <div className="aspect-square bg-blue-500 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>9.8%</div>
                      <div className="text-[10px] opacity-75">(0,0)</div>
                    </div>
                    <div className="aspect-square bg-blue-500 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>8.7%</div>
                      <div className="text-[10px] opacity-75">(0,1)</div>
                    </div>
                    <div className="aspect-square bg-blue-600 text-white rounded text-center flex flex-col justify-center text-xs font-medium">
                      <div>0.0%</div>
                      <div className="text-[10px] opacity-75">(0,2)</div>
                    </div>
                  </div>

                  {/* Axis Labels */}
                  <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                    <span className="transform -rotate-90 origin-center">Court Rows</span>
                    <span>Court Columns</span>
                  </div>
                  
                  {/* Color Scale */}
                  <div className="flex items-center justify-center mt-4 space-x-2">
                    <span className="text-xs text-muted-foreground">Visit Count</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-3 bg-blue-600 rounded-sm"></div>
                      <div className="w-4 h-3 bg-blue-500 rounded-sm"></div>
                      <div className="w-4 h-3 bg-orange-500 rounded-sm"></div>
                      <div className="w-4 h-3 bg-yellow-400 rounded-sm"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">0 → 70+</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Insights */}
          <Card className="hover:shadow-lg transition-smooth">
            <CardHeader>
              <CardTitle>Performance Insights</CardTitle>
              <CardDescription>
                Strengths and areas for improvement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Center Court Control (41.9%)</span>
                  <Badge variant="default" className="bg-yellow-500 text-black hover:bg-yellow-500">Dominant</Badge>
                </div>
                <div className="w-full bg-yellow-500/20 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Front Court Coverage (28.9%)</span>
                  <Badge variant="secondary" className="bg-velocity-orange text-white">Strong</Badge>
                </div>
                <div className="w-full bg-velocity-orange/20 rounded-full h-2">
                  <div className="bg-velocity-orange h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Back Court Presence (18.5%)</span>
                  <Badge variant="default" className="bg-kompte-purple text-white">Moderate</Badge>
                </div>
                <div className="w-full bg-kompte-purple/20 rounded-full h-2">
                  <div className="bg-kompte-purple h-2 rounded-full w-[55%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Right Court Coverage (0%)</span>
                  <Badge variant="destructive">Weak</Badge>
                </div>
                <div className="w-full bg-destructive/20 rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full w-[10%]"></div>
                </div>
              </div>
              
              <Button variant="data" className="w-full mt-6">
                <BarChart3 className="w-4 h-4" />
                View Detailed Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;