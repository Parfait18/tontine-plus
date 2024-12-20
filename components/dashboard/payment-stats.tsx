import { Card } from "@/components/ui/card";
import { PaymentProgress } from "./stats/payment-progress";
import { AmountDisplay } from "./stats/amount-display";

export function PaymentStats() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Progression des paiements</h3>
      <div className="space-y-4">
        <PaymentProgress percentage={80} label="Ce mois" />
        <div className="grid grid-cols-2 gap-4">
          <AmountDisplay label="Montant payé" amount="40 000 FCFA" />
          <AmountDisplay label="Restant" amount="10 000 FCFA" />
        </div>
      </div>
    </Card>
  );
}