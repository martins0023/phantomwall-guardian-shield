
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  AlertTriangle, 
  Activity, 
  MapPin, 
  Phone, 
  Bell, 
  Cctv, 
  Thermometer,
  Volume2,
  Wifi,
  Users,
  Clock
} from "lucide-react";
import { AlertsPanel } from "@/components/AlertsPanel";
import { SensorGrid } from "@/components/SensorGrid";
import { EmergencyControls } from "@/components/EmergencyControls";
import { StatusIndicator } from "@/components/StatusIndicator";

const Index = () => {
  const [systemStatus, setSystemStatus] = useState<"operational" | "warning" | "emergency">("operational");
  const [activeAlerts, setActiveAlerts] = useState(3);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-['Open_Sans']">
      {/* Header */}
      <header className="bg-neutral-800 border-b border-neutral-700 px-4 py-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl md:text-3xl font-['SF_Pro_Display'] font-bold">
                SafePulse
              </h1>
              <p className="text-sm text-neutral-400">
                Predict. Prevent. Protect — in real time.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <StatusIndicator status={systemStatus} />
            <Button 
              variant="outline" 
              size="sm"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900"
            >
              <Bell className="h-4 w-4 mr-2" />
              {activeAlerts} Alerts
            </Button>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Emergency Banner */}
        {systemStatus === "emergency" && (
          <div className="bg-red-600 border border-red-500 rounded-lg p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">EMERGENCY PROTOCOL ACTIVE</h3>
                <p className="text-sm">Automatic response measures have been initiated</p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-neutral-400">System Health</p>
                  <p className="text-lg font-semibold">98.5%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Cctv className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-neutral-400">Active Sensors</p>
                  <p className="text-lg font-semibold">247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-neutral-400">Personnel</p>
                  <p className="text-lg font-semibold">1,543</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm text-neutral-400">Response Time</p>
                  <p className="text-lg font-semibold">2.3s</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Alerts and Sensors */}
          <div className="lg:col-span-2 space-y-6">
            <AlertsPanel />
            <SensorGrid />
          </div>

          {/* Right Column - Emergency Controls */}
          <div className="space-y-6">
            <EmergencyControls onStatusChange={setSystemStatus} />
            
            {/* Recent Activity */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">System health check completed</p>
                    <p className="text-xs text-neutral-400">2 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">Sensor calibration - Building A</p>
                    <p className="text-xs text-neutral-400">5 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">New device connected</p>
                    <p className="text-xs text-neutral-400">12 minutes ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
