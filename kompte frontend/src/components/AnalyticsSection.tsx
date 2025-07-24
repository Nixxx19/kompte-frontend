import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Download, Filter, Calendar, Clock, Target, Zap } from "lucide-react";

const velocityData = [
  { time: '0:00', velocity: 85 },
  { time: '0:30', velocity: 92 },
  { time: '1:00', velocity: 78 },
  { time: '1:30', velocity: 95 },
  { time: '2:00', velocity: 88 },
  { time: '2:30', velocity: 91 },
  { time: '3:00', velocity: 86 },
];

const performanceData = [
  { category: 'Serve', score: 85 },
  { category: 'Return', score: 72 },
  { category: 'Net Play', score: 88 },
  { category: 'Smash', score: 91 },
  { category: 'Defense', score: 76 },
];

const shotTypeData = [
  { name: 'Smash', value: 35, color: '#8b5cf6' },
  { name: 'Clear', value: 28, color: '#f97316' },
  { name: 'Drop', value: 22, color: '#10b981' },
  { name: 'Net', value: 15, color: '#3b82f6' },
];

const AnalyticsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Analytics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into your performance with comprehensive statistical analysis
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4" />
            Last 7 Days
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4" />
            Filter by Shot Type
          </Button>
          <Button variant="outline" size="sm">
            <Target className="w-4 h-4" />
            Court Zones
          </Button>
          <Button variant="kompte" size="sm">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Velocity Trends */}
          <Card className="hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-velocity-orange" />
                Velocity Trends
              </CardTitle>
              <CardDescription>
                Shuttle speed throughout the match
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-card rounded-lg p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium">
                    <div className="bg-velocity-orange/20 p-2 rounded">Mon</div>
                    <div className="bg-kompte-purple/20 p-2 rounded">Tue</div>
                    <div className="bg-accuracy-green/20 p-2 rounded">Wed</div>
                    <div className="bg-data-blue/20 p-2 rounded">Thu</div>
                    <div className="bg-velocity-orange/20 p-2 rounded">Fri</div>
                    <div className="bg-kompte-purple/20 p-2 rounded">Sat</div>
                    <div className="bg-accuracy-green/20 p-2 rounded">Sun</div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-velocity-orange">89.5 km/h</p>
                    <p className="text-sm text-muted-foreground">Average velocity this week</p>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accuracy-green" />
                      <span className="text-sm text-accuracy-green">+12% from last week</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Radar */}
          <Card className="hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accuracy-green" />
                Performance Breakdown
              </CardTitle>
              <CardDescription>
                Skill assessment across different areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm font-bold">{item.score}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-kompte-purple h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shot Type Distribution */}
          <Card className="hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle>Shot Distribution</CardTitle>
              <CardDescription>
                Breakdown of shot types used
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {shotTypeData.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-border rounded-lg hover:bg-card/50 transition-colors">
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.value}%
                    </div>
                    <p className="text-sm font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Match Summary */}
          <Card className="hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle>Match Summary</CardTitle>
              <CardDescription>
                Key statistics from this session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Rally Time</span>
                  <Badge variant="outline">18:42</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Longest Rally</span>
                  <Badge variant="outline">32 shots</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg Rally Duration</span>
                  <Badge variant="outline">12.4s</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Peak Velocity</span>
                  <Badge className="bg-velocity-orange">127 km/h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Winners</span>
                  <Badge className="bg-accuracy-green">23</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Unforced Errors</span>
                  <Badge variant="destructive">8</Badge>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Performance Score</span>
                  <span className="text-2xl font-bold text-kompte-purple">8.7</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-kompte-purple h-2 rounded-full w-[87%]"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Excellent performance! Focus on reducing reaction time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Training Recommendations */}
          <Card className="hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-kompte-purple" />
                Training Focus
              </CardTitle>
              <CardDescription>
                AI-powered improvement suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-accuracy-green/10 rounded-lg border border-accuracy-green/20">
                  <h4 className="font-medium text-accuracy-green mb-1">Strength</h4>
                  <p className="text-sm text-muted-foreground">
                    Excellent net play control with 88% accuracy
                  </p>
                </div>
                
                <div className="p-3 bg-velocity-orange/10 rounded-lg border border-velocity-orange/20">
                  <h4 className="font-medium text-velocity-orange mb-1">Improve</h4>
                  <p className="text-sm text-muted-foreground">
                    Work on reaction time - 15% slower than optimal
                  </p>
                </div>
                
                <div className="p-3 bg-kompte-purple/10 rounded-lg border border-kompte-purple/20">
                  <h4 className="font-medium text-kompte-purple mb-1">Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Increase right court coverage for better positioning
                  </p>
                </div>
              </div>

              <Button variant="kompte" className="w-full">
                <Clock className="w-4 h-4" />
                Schedule Practice Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;