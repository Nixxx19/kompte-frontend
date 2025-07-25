import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Video, Play, CheckCircle } from "lucide-react";
import { useState } from "react";

const UploadSection = () => {
  const [uploadStep, setUploadStep] = useState(1);

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">Upload Video</h2>
          <p className="text-md text-muted-foreground font-semibold max-w-3xl mx-auto">
            Upload your badminton match recording for AI-powered performance analysis
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${uploadStep >= 1 ? 'text-kompte-purple' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 1 ? 'bg-kompte-purple text-white' : 'bg-muted text-muted-foreground'}`}>
                  {uploadStep > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
                </div>
                <span className="font-medium">Upload Video</span>
              </div>
              <div className="w-12 h-0.5 bg-border"></div>
              <div className={`flex items-center space-x-2 ${uploadStep >= 2 ? 'text-kompte-purple' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 2 ? 'bg-kompte-purple text-white' : 'bg-muted text-muted-foreground'}`}>
                  {uploadStep > 2 ? <CheckCircle className="w-4 h-4" /> : '2'}
                </div>
                <span className="font-medium">AI Processing</span>
              </div>
              <div className="w-12 h-0.5 bg-border"></div>
              <div className={`flex items-center space-x-2 ${uploadStep >= 3 ? 'text-kompte-purple' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${uploadStep >= 3 ? 'bg-kompte-purple text-white' : 'bg-muted text-muted-foreground'}`}>
                  {uploadStep > 3 ? <CheckCircle className="w-4 h-4" /> : '3'}
                </div>
                <span className="font-medium">View Results</span>
              </div>
            </div>
          </div>

          {/* Single Upload Card */}
          <Card className="hover:shadow-card transition-smooth border-dashed border-2 hover:border-kompte-purple">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-kompte-purple/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Video className="w-8 h-8 text-kompte-purple" />
              </div>
              <CardTitle>Upload Match Video</CardTitle>
              <CardDescription>
                Upload your badminton match recording - AI will automatically generate tracking data
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-12 hover:border-kompte-purple transition-smooth">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-2">
                  Drag and drop your video file here
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  or click to browse files
                </p>
                <div className="flex justify-center gap-4">
                 <Button variant="kompte" size="lg" className="font-semibold">
                    Select Video File
                 </Button>
                 <Button variant="kompte" size="lg" className="font-semibold">
                    Record Live Video
                 </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: MP4, MOV, AVI • Recommended: 1080p, 30+ fps, clear court view
              </p>
            </CardContent>
          </Card>

          {/* Enhanced Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="hover:shadow-card transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-kompte-purple/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Video className="w-6 h-6 text-kompte-purple" />
                </div>
                <h3 className="font-semibold mb-2">AI Court Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic court boundary detection and grid calibration
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-velocity-orange/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-6 h-6 text-velocity-orange" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Live shuttle tracking and velocity calculations
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accuracy-green/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accuracy-green" />
                </div>
                <h3 className="font-semibold mb-2">Performance Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed analytics and improvement recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;