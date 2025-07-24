import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Clock, Calendar, Activity, Target, Trophy } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, BarChart, Bar } from "recharts";

// Enhanced stamina data with more detailed tracking
const staminaOverTimeData = [
  { time: "0:00", stamina: 100, rally: 1, heartRate: 65, gameTime: "Set 1 - 0:00" },
  { time: "2:15", stamina: 95, rally: 2, heartRate: 72, gameTime: "Set 1 - 2:15" },
  { time: "4:30", stamina: 88, rally: 3, heartRate: 78, gameTime: "Set 1 - 4:30" },
  { time: "7:00", stamina: 92, rally: 4, heartRate: 74, gameTime: "Set 1 - 7:00" },
  { time: "9:45", stamina: 85, rally: 5, heartRate: 82, gameTime: "Set 1 - 9:45" },
  { time: "12:30", stamina: 78, rally: 6, heartRate: 88, gameTime: "Set 2 - 0:30" },
  { time: "15:15", stamina: 82, rally: 7, heartRate: 85, gameTime: "Set 2 - 3:15" },
  { time: "18:00", stamina: 75, rally: 8, heartRate: 91, gameTime: "Set 2 - 6:00" },
  { time: "20:45", stamina: 70, rally: 9, heartRate: 95, gameTime: "Set 2 - 8:45" },
  { time: "23:30", stamina: 68, rally: 10, heartRate: 98, gameTime: "Set 2 - 11:30" },
  { time: "26:15", stamina: 72, rally: 11, heartRate: 93, gameTime: "Set 3 - 2:15" },
  { time: "29:00", stamina: 65, rally: 12, heartRate: 102, gameTime: "Set 3 - 5:00" },
  { time: "31:45", stamina: 60, rally: 13, heartRate: 105, gameTime: "Set 3 - 7:45" },
  { time: "34:20", stamina: 58, rally: 14, heartRate: 108, gameTime: "Set 3 - 10:20" },
  { time: "37:10", stamina: 55, rally: 15, heartRate: 110, gameTime: "Set 3 - 13:10" },
];

const dailyStaminaData = [
  { day: "Monday", dayShort: "Mon", avgStamina: 78, sessions: 2, peakStamina: 92, minStamina: 64 },
  { day: "Tuesday", dayShort: "Tue", avgStamina: 82, sessions: 1, peakStamina: 88, minStamina: 76 },
  { day: "Wednesday", dayShort: "Wed", avgStamina: 85, sessions: 3, peakStamina: 96, minStamina: 72 },
  { day: "Thursday", dayShort: "Thu", avgStamina: 79, sessions: 2, peakStamina: 89, minStamina: 68 },
  { day: "Friday", dayShort: "Fri", avgStamina: 88, sessions: 1, peakStamina: 94, minStamina: 81 },
  { day: "Saturday", dayShort: "Sat", avgStamina: 92, sessions: 2, peakStamina: 98, minStamina: 85 },
  { day: "Sunday", dayShort: "Sun", avgStamina: 75, sessions: 1, peakStamina: 82, minStamina: 68 },
];

const chartConfig = {
  stamina: {
    label: "Stamina %",
    color: "hsl(var(--kompte-purple))",
  },
  avgStamina: {
    label: "Average Stamina",
    color: "hsl(var(--data-blue))",
  },
};

const StaminaSection = () => {
  const currentStamina = 82;
  const weeklyImprovement = 8.5;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stamina Analytics</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Performance Endurance Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your stamina patterns, endurance trends, and optimize your training performance with AI-powered analytics.
          </p>
        </div>

        {/* Premium Stamina Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Average Stamina Card */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl glow-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Stamina</CardTitle>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-velocity-orange/20 to-velocity-orange/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="w-7 h-7 text-velocity-orange" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">{currentStamina}%</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-accuracy-green mr-1" />
                <span className="text-accuracy-green font-medium">+{weeklyImprovement}% this week</span>
              </div>
            </CardContent>
          </Card>

          {/* Peak Performance */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl glow-secondary">
            <div className="absolute inset-0 bg-gradient-to-br from-data-blue/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Peak Performance</CardTitle>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-data-blue/20 to-data-blue/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Trophy className="w-7 h-7 text-data-blue" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">98%</div>
              <div className="flex items-center text-sm">
                <Target className="w-4 h-4 text-data-blue mr-1" />
                <span className="text-muted-foreground">Saturday peak</span>
              </div>
            </CardContent>
          </Card>

          {/* Endurance Duration */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Best Duration</CardTitle>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kompte-purple/20 to-kompte-purple/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Clock className="w-7 h-7 text-kompte-purple" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">37:10</div>
              <div className="flex items-center text-sm">
                <Activity className="w-4 h-4 text-kompte-purple mr-1" />
                <span className="text-muted-foreground">Session length</span>
              </div>
            </CardContent>
          </Card>

          {/* Recovery Rate */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accuracy-green/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recovery Rate</CardTitle>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accuracy-green/20 to-accuracy-green/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="w-7 h-7 text-accuracy-green" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">Elite</div>
              <div className="flex items-center text-sm">
                <Badge variant="secondary" className="text-accuracy-green bg-accuracy-green-light/20 border-accuracy-green/30">
                  Top 5%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Rally-by-Rally Stamina Analysis */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-kompte-purple/3 to-transparent"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-foreground to-kompte-purple bg-clip-text text-transparent">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-velocity-orange/20 to-velocity-orange/30 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-velocity-orange" />
                    </div>
                    Rally Stamina Timeline
                  </CardTitle>
                  <CardDescription className="mt-3 text-base">
                    Real-time stamina tracking with precise rally timing and game context
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-kompte-purple/10 hover:border-kompte-purple/30 transition-all duration-300">
                  <Activity className="w-4 h-4 mr-2" />
                  Export Analysis
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <LineChart data={staminaOverTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="staminaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--kompte-purple))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--kompte-purple))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    domain={[45, 105]}
                    axisLine={false}
                    tickLine={false}
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="glass-card p-4 rounded-xl shadow-2xl border border-kompte-purple/20">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-kompte-purple"></div>
                                <span className="font-bold text-foreground">Rally {data.rally}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Match Time</p>
                                  <p className="font-semibold text-kompte-purple">{data.gameTime}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Stamina Level</p>
                                  <p className="font-bold text-velocity-orange text-lg">{data.stamina}%</p>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-border/30">
                                <p className="text-xs text-muted-foreground">Heart Rate: <span className="text-foreground font-medium">{data.heartRate} bpm</span></p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="stamina" 
                    stroke="hsl(var(--kompte-purple))"
                    strokeWidth={4}
                    fill="url(#staminaGradient)"
                    dot={{ 
                      fill: "hsl(var(--kompte-purple))", 
                      strokeWidth: 3, 
                      r: 5,
                      stroke: "hsl(var(--background))"
                    }}
                    activeDot={{ 
                      r: 8, 
                      stroke: "hsl(var(--kompte-purple))", 
                      strokeWidth: 3, 
                      fill: "hsl(var(--background))",
                      className: "drop-shadow-lg" 
                    }}
                  />
                  <ReferenceLine 
                    y={75} 
                    stroke="hsl(var(--destructive))" 
                    strokeDasharray="8 4" 
                    opacity={0.8} 
                    strokeWidth={2}
                    label={{ value: "Critical Zone", offset: 10, fill: "hsl(var(--destructive))" }}
                  />
                  <ReferenceLine 
                    y={90} 
                    stroke="hsl(var(--accuracy-green))" 
                    strokeDasharray="8 4" 
                    opacity={0.6} 
                    strokeWidth={2}
                    label={{ value: "Optimal Zone", offset: 10, fill: "hsl(var(--accuracy-green))" }}
                  />
                </LineChart>
              </ChartContainer>
              <div className="mt-6 p-5 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 rounded-xl border border-border/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Current Stamina</div>
                    <div className="text-2xl font-bold text-velocity-orange">55%</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Match Duration</div>
                    <div className="text-2xl font-bold text-kompte-purple">37:10</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Peak Stamina</div>
                    <div className="text-2xl font-bold text-accuracy-green">100%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Daily Stamina Trends with Bar Chart */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-data-blue/3 to-transparent"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-foreground to-data-blue bg-clip-text text-transparent">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-data-blue/20 to-data-blue/30 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-data-blue" />
                    </div>
                    Weekly Stamina Analysis
                  </CardTitle>
                  <CardDescription className="mt-3 text-base">
                    Day-wise performance breakdown with detailed insights
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-8">
              {/* Bar Chart */}
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={dailyStaminaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--data-blue))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--data-blue))" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="dayShort" 
                    axisLine={false}
                    tickLine={false}
                    className="text-sm"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    domain={[65, 100]}
                    axisLine={false}
                    tickLine={false}
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="glass-card p-4 rounded-xl shadow-2xl border border-data-blue/20">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-data-blue"></div>
                                <span className="font-bold text-foreground">{data.day}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Avg Stamina</p>
                                  <p className="font-bold text-data-blue text-lg">{data.avgStamina}%</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Sessions</p>
                                  <p className="font-semibold text-foreground">{data.sessions}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm pt-2 border-t border-border/30">
                                <div>
                                  <p className="text-muted-foreground">Peak</p>
                                  <p className="font-semibold text-accuracy-green">{data.peakStamina}%</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Lowest</p>
                                  <p className="font-semibold text-velocity-orange">{data.minStamina}%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="avgStamina" 
                    fill="url(#barGradient)"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                </BarChart>
              </ChartContainer>
              
              {/* Weekly Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-data-blue/10 to-data-blue/5 border border-data-blue/20">
                  <div className="text-4xl font-bold text-data-blue mb-2">82.3%</div>
                  <div className="text-sm text-muted-foreground mb-2">Weekly Average</div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-accuracy-green mr-1" />
                    <span className="text-accuracy-green font-medium text-sm">+12% improvement</span>
                  </div>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accuracy-green/10 to-accuracy-green/5 border border-accuracy-green/20">
                  <div className="text-4xl font-bold text-accuracy-green mb-2">Saturday</div>
                  <div className="text-sm text-muted-foreground mb-2">Peak Day</div>
                  <div className="text-lg font-semibold text-accuracy-green">92% stamina</div>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-velocity-orange/10 to-velocity-orange/5 border border-velocity-orange/20">
                  <div className="text-4xl font-bold text-velocity-orange mb-2">Sunday</div>
                  <div className="text-sm text-muted-foreground mb-2">Recovery Day</div>
                  <div className="text-lg font-semibold text-velocity-orange">75% stamina</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <div className="mt-8">
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Activity className="w-5 h-5 text-primary" />
                AI Stamina Insights
              </CardTitle>
              <CardDescription>
                Personalized recommendations to optimize your endurance performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Endurance Training</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Focus on interval training to improve stamina recovery between rallies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100">Pacing Strategy</h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Your stamina drops significantly after 20 minutes. Consider shorter, more intense sessions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Recovery Efficiency</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Endurance Consistency</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Peak Performance</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StaminaSection;