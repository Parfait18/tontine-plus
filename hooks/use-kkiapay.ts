"use client";

import { useEffect } from "react";

interface KkiapayOptions {
  amount: number;
  callback: string;
  data?: Record<string, any>;
}

declare global {
  interface Window {
    KkiapayWidget: {
      init: (options: any) => void;
    };
  }
}

export function useKkiapay() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.kkiapay.me/k.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayment = (options: KkiapayOptions) => {
    if (window.KkiapayWidget) {
      window.KkiapayWidget.init({
        key: process.env.NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY,
        sandbox: process.env.NODE_ENV !== "production",
        ...options,
      });
    }
  };

  return { initializePayment };
}