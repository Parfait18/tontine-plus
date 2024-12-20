"use client";

import { Card } from "@/components/ui/card";
import { CreditCard, Wallet } from "lucide-react";

export function PaymentMethods() {
  return (
    <Card className="p-6">
      <h2 className="font-semibold mb-4">Méthodes de paiement disponibles</h2>
      <div className="space-y-4">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <CreditCard className="h-8 w-8 text-orange-500 mr-4" />
          <div>
            <h3 className="font-medium">KkiaPay</h3>
            <p className="text-sm text-gray-600">Paiement sécurisé en ligne</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Wallet className="h-8 w-8 text-orange-500 mr-4" />
          <div>
            <h3 className="font-medium">Espèces</h3>
            <p className="text-sm text-gray-600">Paiement auprès d'un agent</p>
          </div>
        </div>
      </div>
    </Card>
  );
}