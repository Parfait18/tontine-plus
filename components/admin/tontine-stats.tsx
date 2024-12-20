import { Card } from "@/components/ui/card";
import { Users, CreditCard, AlertCircle } from "lucide-react";

const stats = [
  {
    label: "Utilisateurs actifs",
    value: "150",
    icon: Users,
    trend: "+12%",
  },
  {
    label: "Tontines en cours",
    value: "45",
    icon: CreditCard,
    trend: "+5%",
  },
  {
    label: "Retards de paiement",
    value: "8",
    icon: AlertCircle,
    trend: "-2%",
  },
];

export function TontineStats() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div>
              <stat.icon className="h-8 w-8 text-orange-500" />
              <span className={`text-sm ${
                stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {stat.trend}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}