
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Activity } from "lucide-react";

interface StatusIndicatorProps {
  status: "operational" | "warning" | "emergency";
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "operational":
        return {
          icon: Activity,
          text: "Operational",
          className: "bg-green-600 text-green-100 border-green-500",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          text: "Warning",
          className: "bg-yellow-600 text-yellow-100 border-yellow-500",
        };
      case "emergency":
        return {
          icon: AlertTriangle,
          text: "Emergency",
          className: "bg-red-600 text-red-100 border-red-500 animate-pulse",
        };
      default:
        return {
          icon: Shield,
          text: "Unknown",
          className: "bg-neutral-600 text-neutral-100 border-neutral-500",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <Badge className={`flex items-center gap-2 px-3 py-1 ${config.className}`}>
      <Icon className="h-4 w-4" />
      <span className="font-medium">{config.text}</span>
    </Badge>
  );
};
