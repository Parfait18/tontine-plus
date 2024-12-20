"use client";

import { Card } from "@/components/ui/card";
import { PaymentHistoryTable } from "@/components/dashboard/payment/payment-history-table";
import { PaymentStats } from "@/components/dashboard/payment-stats";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Historique</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PaymentStats />
      </div>

      <Card className="p-6">
        <PaymentHistoryTable />
      </Card>
    </div>
  );
}