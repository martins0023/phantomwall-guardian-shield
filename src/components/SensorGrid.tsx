
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cctv, 
  Thermometer, 
  Volume2, 
  Activity, 
  Wifi, 
  WifiOff,
  AlertTriangle
} from "lucide-react";

const sensorData = [
  {
    id: "cam-001",
    type: "camera",
    location: "Main Entrance",
    status: "online",
    lastReading: "Live feed active",
    icon: Cctv,
    color: "text-green-400"
  },
  {
    id: "temp-002",
    type: "temperature",
    location: "Server Room A",
    status: "warning",
    lastReading: "26.5°C",
    icon: Thermometer,
    color: "text-yellow-400"
  },
  {
    id: "sound-003",
    type: "sound",
    location: "Corridor B",
    status: "online",
    lastReading: "42 dB",
    icon: Volume2,
    color: "text-green-400"
  },
  {
    id: "motion-004",
    type: "motion",
    location: "Emergency Exit 2",
    status: "offline",
    lastReading: "No signal",
    icon: Activity,
    color: "text-red-400"
  },
  {
    id: "gas-005",
    type: "gas",
    location: "Laboratory C",
    status: "online",
    lastReading: "Normal levels",
    icon: Activity,
    color: "text-green-400"
  },
  {
    id: "cam-006",
    type: "camera",
    location: "Parking Lot",
    status: "alert",
    lastReading: "Motion detected",
    icon: Cctv,
    color: "text-red-400"
  }
];

export const SensorGrid = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return <Badge className="bg-green-600 text-green-100">Online</Badge>;
      case "offline":
        return <Badge className="bg-red-600 text-red-100">Offline</Badge>;
      case "warning":
        return <Badge className="bg-yellow-600 text-yellow-100">Warning</Badge>;
      case "alert":
        return <Badge className="bg-red-600 text-red-100 animate-pulse">Alert</Badge>;
      default:
        return <Badge className="bg-neutral-600 text-neutral-100">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === "offline") {
      return <WifiOff className="h-4 w-4 text-red-400" />;
    }
    if (status === "alert") {
      return <AlertTriangle className="h-4 w-4 text-red-400" />;
    }
    return <Wifi className="h-4 w-4 text-green-400" />;
  };

  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Sensor Network Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sensorData.map((sensor) => {
            const Icon = sensor.icon;
            return (
              <div 
                key={sensor.id}
                className="p-4 bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${sensor.color}`} />
                    <span className="text-sm font-medium text-neutral-300 capitalize">
                      {sensor.type}
                    </span>
                  </div>
                  {getStatusIcon(sensor.status)}
                </div>
                
                <h4 className="font-semibold text-white mb-2">{sensor.location}</h4>
                <p className="text-sm text-neutral-400 mb-3">{sensor.lastReading}</p>
                
                <div className="flex items-center justify-between">
                  {getStatusBadge(sensor.status)}
                  <span className="text-xs text-neutral-500">{sensor.id}</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
