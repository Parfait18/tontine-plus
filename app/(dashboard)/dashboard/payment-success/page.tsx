"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Mettre à jour l'état du paiement dans la base de données
  }, []);

  return (
    <Card className="p-8 max-w-md mx-auto text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-2">Paiement réussi !</h1>
      <p className="text-gray-600 mb-6">
        Votre paiement a été traité avec succès. Un reçu vous sera envoyé par email.
      </p>
      <Button
        onClick={() => router.push("/dashboard")}
        className="bg-orange-500 hover:bg-orange-600"
      >
        Retour au tableau de bord
      </Button>
    </Card>
  );
}