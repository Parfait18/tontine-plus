"use client";

import { Card } from "@/components/ui/card";
import { TontineList } from "@/components/admin/tontines/tontine-list";
import { TontineStats } from "@/components/admin/tontines/tontine-stats";

export default function TontinesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des tontines</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <TontineStats />
      </div>

      <Card className="p-6">
        <TontineList />
      </Card>
    </div>
  );
}