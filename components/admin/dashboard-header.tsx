"use client";

import { useAuth } from "@/contexts/auth-context";

export function AdminDashboardHeader() {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
        <p className="text-gray-600">
          Bienvenue, {user?.name || "Administrateur"}
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Date</p>
        <p className="text-lg font-semibold">
          {new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "full",
          }).format(new Date())}
        </p>
      </div>
    </div>
  );
}