"use client";

import { useState } from "react";
import { useKkiapay } from "./use-kkiapay";
import { useToast } from "./use-toast";

interface PaymentOptions {
  amount: number;
  frequency: string;
  description?: string;
}

export function usePayment() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { initializePayment } = useKkiapay();
  const { toast } = useToast();

  const processPayment = async (options: PaymentOptions) => {
    setIsProcessing(true);
    try {
      await initializePayment({
        amount: options.amount,
        callback: "/dashboard/payment-success",
        data: {
          frequency: options.frequency,
          description: options.description,
          date: new Date().toISOString(),
        },
      });
      toast({
        title: "Paiement initié",
        description: "Veuillez suivre les instructions pour finaliser le paiement.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors du paiement.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processPayment,
    isProcessing,
  };
}