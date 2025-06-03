
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin, Clock, Eye } from "lucide-react";

const mockAlerts = [
  {
    id: 1,
    type: "fire",
    severity: "high",
    location: "Building A - Floor 3",
    time: "2 minutes ago",
    description: "Smoke detected in server room",
    status: "active"
  },
  {
    id: 2,
    type: "security",
    severity: "medium",
    location: "Parking Garage - Level B1",
    time: "8 minutes ago",
    description: "Unauthorized access attempt",
    status: "investigating"
  },
  {
    id: 3,
    type: "medical",
    severity: "high",
    location: "Cafeteria - Main Floor",
    time: "15 minutes ago",
    description: "Fall detected - elderly individual",
    status: "responded"
  }
];

export const AlertsPanel = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-600 text-red-100";
      case "medium":
        return "bg-yellow-600 text-yellow-100";
      case "low":
        return "bg-blue-600 text-blue-100";
      default:
        return "bg-neutral-600 text-neutral-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-red-100 text-red-800 border-red-200";
      case "investigating":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "responded":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-neutral-100 text-neutral-800 border-neutral-200";
    }
  };

  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-white">Active Alerts</CardTitle>
            <CardDescription className="text-neutral-400">
              Real-time incident monitoring and response
            </CardDescription>
          </div>
          <Badge className="bg-red-600 text-red-100">
            {mockAlerts.filter(alert => alert.status === "active").length} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockAlerts.map((alert) => (
          <div 
            key={alert.id}
            className="p-4 bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(alert.status)}>
                    {alert.status}
                  </Badge>
                  <span className="text-sm text-neutral-400 capitalize">
                    {alert.type}
                  </span>
                </div>
                
                <h4 className="font-semibold text-white">{alert.description}</h4>
                
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {alert.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {alert.time}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-neutral-600">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                {alert.status === "active" && (
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Respond
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
