
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  Megaphone, 
  Users,
  MapPin,
  Lock,
  Volume2
} from "lucide-react";

interface EmergencyControlsProps {
  onStatusChange: (status: "operational" | "warning" | "emergency") => void;
}

export const EmergencyControls = ({ onStatusChange }: EmergencyControlsProps) => {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [lockdownActive, setLockdownActive] = useState(false);

  const handleEmergencyActivation = () => {
    setEmergencyMode(true);
    onStatusChange("emergency");
    // Simulate emergency protocol activation
    setTimeout(() => {
      setEmergencyMode(false);
      onStatusChange("operational");
    }, 10000);
  };

  const toggleLockdown = () => {
    setLockdownActive(!lockdownActive);
    onStatusChange(lockdownActive ? "operational" : "warning");
  };

  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center gap-2">
          <Shield className="h-6 w-6 text-yellow-400" />
          Emergency Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Emergency Activation */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Emergency Protocol</h3>
            {emergencyMode && (
              <Badge className="bg-red-600 text-red-100 animate-pulse">
                ACTIVE
              </Badge>
            )}
          </div>
          
          <Button
            onClick={handleEmergencyActivation}
            disabled={emergencyMode}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6"
          >
            <AlertTriangle className="h-5 w-5 mr-2" />
            {emergencyMode ? "Emergency Active..." : "Activate Emergency Response"}
          </Button>
          
          {emergencyMode && (
            <div className="text-sm text-red-400 text-center">
              All emergency protocols initiated. Authorities notified.
            </div>
          )}
        </div>

        <Separator className="bg-neutral-600" />

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Quick Actions</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="flex-col h-16 border-neutral-600 text-neutral-300 hover:bg-neutral-600"
            >
              <Phone className="h-4 w-4 mb-1" />
              <span className="text-xs">Call 911</span>
            </Button>
            
            <Button 
              variant="outline"
              className="flex-col h-16 border-neutral-600 text-neutral-300 hover:bg-neutral-600"
            >
              <Megaphone className="h-4 w-4 mb-1" />
              <span className="text-xs">PA System</span>
            </Button>
            
            <Button 
              variant="outline"
              className="flex-col h-16 border-neutral-600 text-neutral-300 hover:bg-neutral-600"
            >
              <Users className="h-4 w-4 mb-1" />
              <span className="text-xs">Evacuate</span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={toggleLockdown}
              className={`flex-col h-16 border-neutral-600 hover:bg-neutral-600 ${
                lockdownActive ? "text-yellow-400 border-yellow-400" : "text-neutral-300"
              }`}
            >
              <Lock className="h-4 w-4 mb-1" />
              <span className="text-xs">{lockdownActive ? "End Lock" : "Lockdown"}</span>
            </Button>
          </div>
        </div>

        <Separator className="bg-neutral-600" />

        {/* System Status */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">System Status</h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-neutral-700 rounded">
              <span className="text-sm text-neutral-300">Communication</span>
              <Badge className="bg-green-600 text-green-100">Online</Badge>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-neutral-700 rounded">
              <span className="text-sm text-neutral-300">Power Systems</span>
              <Badge className="bg-green-600 text-green-100">Normal</Badge>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-neutral-700 rounded">
              <span className="text-sm text-neutral-300">Network</span>
              <Badge className="bg-yellow-600 text-yellow-100">Degraded</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
