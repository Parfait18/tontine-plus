"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/hooks/use-payment";
import { PaymentMethods } from "@/components/dashboard/payment/payment-methods";
import { PaymentForm } from "@/components/dashboard/payment/payment-form";

export default function PaymentsPage() {
  const { processPayment, isProcessing } = usePayment();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Paiements</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PaymentForm onSubmit={processPayment} isProcessing={isProcessing} />
        <PaymentMethods />
      </div>
    </div>
  );
}