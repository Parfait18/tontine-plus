"use client";

import { Card } from "@/components/ui/card";
import { LatePaymentsList } from "@/components/admin/late-payments/late-payments-list";
import { LatePaymentsStats } from "@/components/admin/late-payments/late-payments-stats";

export default function LatePaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Retards de paiement</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <LatePaymentsStats />
      </div>

      <Card className="p-6">
        <LatePaymentsList />
      </Card>
    </div>
  );
}