import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Clock, Zap, BarChart3 } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time analytics and insights from your badminton performance data
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Pickups</p>
                  <p className="text-2xl font-bold">247</p>
                  <p className="text-xs text-accuracy-green flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% from last match
                  </p>
                </div>
                <div className="w-12 h-12 bg-accuracy-green/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accuracy-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Stamina</p>
                  <p className="text-2xl font-bold">89.5 km/h</p>
                  <p className="text-xs text-velocity-orange flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +5.2% faster
                  </p>
                </div>
                <div className="w-12 h-12 bg-velocity-orange-light rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-velocity-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reaction Time</p>
                  <p className="text-2xl font-bold">0.34s</p>
                  <p className="text-xs text-destructive flex items-center mt-1">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    +0.02s slower
                  </p>
                </div>
                <div className="w-12 h-12 bg-data-blue-light rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-data-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Accuracy</p>
                  <p className="text-2xl font-bold">87.3%</p>
                  <p className="text-xs text-accuracy-green flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +3.1% better
                  </p>
                </div>
                <div className="w-12 h-12 bg-kompte-purple/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-kompte-purple" />
                </div>
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
                    {/* Row 2 */}
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

                    {/* Row 1 */}
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