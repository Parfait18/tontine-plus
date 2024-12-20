"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PAYMENT_FREQUENCIES } from "@/lib/constants/payment";
import { useState } from "react";

interface PaymentFormProps {
  onSubmit: (data: any) => void;
  isProcessing: boolean;
}

export function PaymentForm({ onSubmit, isProcessing }: PaymentFormProps) {
  const [amount, setAmount] = useState("5000");
  const [frequency, setFrequency] = useState(PAYMENT_FREQUENCIES.MONTHLY);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      amount: parseInt(amount),
      frequency,
      description: `Paiement ${frequency} de tontine`,
    });
  };

  return (
    <Card className="p-6">
      <h2 className="font-semibold mb-4">Effectuer un paiement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Montant</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Fréquence</Label>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PAYMENT_FREQUENCIES.DAILY}>Quotidien</SelectItem>
              <SelectItem value={PAYMENT_FREQUENCIES.WEEKLY}>Hebdomadaire</SelectItem>
              <SelectItem value={PAYMENT_FREQUENCIES.MONTHLY}>Mensuel</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600"
          disabled={isProcessing}
        >
          {isProcessing ? "Traitement..." : "Payer maintenant"}
        </Button>
      </form>
    </Card>
  );
}