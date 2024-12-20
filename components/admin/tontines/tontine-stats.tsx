"use client";

import { Card } from "@/components/ui/card";
import { Users, CreditCard, TrendingUp } from "lucide-react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { useState, useEffect } from "react";

interface TontineStatistics {
  totalTontines: number;
  activeTontines: number;
  totalMembers: number;
  totalAmount: number;
}

export function TontineStats() {
  const { fetchData, isLoading } = useAdminApi();
  const [stats, setStats] = useState<TontineStatistics>({
    totalTontines: 0,
    activeTontines: 0,
    totalMembers: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const response = await fetchData<TontineStatistics>("tontines/stats");
      if (response.data) {
        setStats(response.data);
      }
    };
    loadStats();
  }, []);

  const statCards = [
    {
      label: "Tontines actives",
      value: stats.activeTontines,
      icon: CreditCard,
      trend: "+5%",
    },
    {
      label: "Membres total",
      value: stats.totalMembers,
      icon: Users,
      trend: "+12%",
    },
    {
      label: "Montant total",
      value: stats.totalAmount.toLocaleString() + " FCFA",
      icon: TrendingUp,
      trend: "+8%",
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
              <span className="text-sm text-green-500">{stat.trend}</span>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}