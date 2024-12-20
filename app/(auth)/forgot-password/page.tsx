"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Wallet } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Implémentation de la réinitialisation du mot de passe
      toast({
        title: "Email envoyé",
        description: "Vérifiez votre boîte mail pour réinitialiser votre mot de passe.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-center mb-8">
        <Wallet className="h-8 w-8 text-orange-500" />
        <span className="ml-2 text-xl font-bold text-secondary">TontinePlus</span>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Réinitialisation du mot de passe
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600"
          disabled={isLoading}
        >
          {isLoading ? "Envoi en cours..." : "Envoyer le lien"}
        </Button>
      </form>
      <p className="text-center mt-4 text-sm text-gray-600">
        <Link href="/login" className="text-orange-500 hover:underline">
          Retour à la connexion
        </Link>
      </p>
    </Card>
  );
}