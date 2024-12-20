"use client";

import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Planning des paiements</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Calendrier</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Prochains paiements</h2>
          <div className="space-y-4">
            {[
              { date: "15 Avril 2024", amount: "5 000 FCFA", status: "À venir" },
              { date: "15 Mai 2024", amount: "5 000 FCFA", status: "À venir" }
            ].map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{payment.date}</p>
                  <p className="text-sm text-gray-600">{payment.amount}</p>
                </div>
                <Badge variant="outline">{payment.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}