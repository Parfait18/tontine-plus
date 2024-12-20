"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/hooks/use-payment";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/date-utils";
import { PAYMENT_FREQUENCIES } from "@/lib/constants/payment";

export function NextPayment() {
  const { processPayment, isProcessing } = usePayment();
  const amount = 5000;
  const nextDate = formatDate(new Date("2024-04-15"));

  const handlePayment = () => {
    processPayment({
      amount,
      frequency: PAYMENT_FREQUENCIES.MONTHLY,
      description: "Paiement mensuel de tontine",
    });
  };

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Prochain paiement</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Montant dû</p>
          <p className="text-2xl font-semibold">{formatCurrency(amount)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Date limite</p>
          <p className="text-lg">{nextDate}</p>
        </div>
        <Button
          onClick={handlePayment}
          className="w-full bg-orange-500 hover:bg-orange-600"
          disabled={isProcessing}
        >
          {isProcessing ? "Traitement..." : "Payer maintenant"}
        </Button>
      </div>
    </Card>
  );
}