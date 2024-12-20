"use client";

import { Card } from "@/components/ui/card";
import { UserCheck, Clock, Users } from "lucide-react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { useState, useEffect } from "react";

interface ApprovalsStats {
  pendingApprovals: number;
  averageApprovalTime: number;
  totalApproved: number;
}

export function ApprovalsStats() {
  const { fetchData, isLoading } = useAdminApi();
  const [stats, setStats] = useState<ApprovalsStats>({
    pendingApprovals: 0,
    averageApprovalTime: 0,
    totalApproved: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const response = await fetchData<ApprovalsStats>("approvals/stats");
      if (response.data) {
        setStats(response.data);
      }
    };
    loadStats();
  }, []);

  const statCards = [
    {
      label: "En attente",
      value: stats.pendingApprovals,
      icon: UserCheck,
      trend: "+3",
    },
    {
      label: "Temps moyen",
      value: `${stats.averageApprovalTime}h`,
      icon: Clock,
      trend: "-1h",
    },
    {
      label: "Total approuvé",
      value: stats.totalApproved,
      icon: Users,
      trend: "+12",
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
              <span className="text-sm text-gray-600">{stat.trend}</span>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}