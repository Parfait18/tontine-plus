"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Clock } from "lucide-react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/utils/format-currency";

interface LatePaymentsStats {
  totalLatePayments: number;
  totalAmount: number;
  averageDelay: number;
}

export function LatePaymentsStats() {
  const { fetchData, isLoading } = useAdminApi();
  const [stats, setStats] = useState<LatePaymentsStats>({
    totalLatePayments: 0,
    totalAmount: 0,
    averageDelay: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const response = await fetchData<LatePaymentsStats>("late-payments/stats");
      if (response.data) {
        setStats(response.data);
      }
    };
    loadStats();
  }, []);

  const statCards = [
    {
      label: "Paiements en retard",
      value: stats.totalLatePayments,
      icon: AlertCircle,
      trend: "-2%",
    },
    {
      label: "Montant total",
      value: formatCurrency(stats.totalAmount),
      icon: TrendingDown,
      trend: "+5%",
    },
    {
      label: "Retard moyen",
      value: `${stats.averageDelay} jours`,
      icon: Clock,
      trend: "-1%",
    },
  ];

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      {statCards.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div>
              <stat.icon className="h-8 w-8 text-orange-500" />
              <span className={`text-sm ${
                stat.trend.startsWith("+") ? "text-red-500" : "text-green-500"
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