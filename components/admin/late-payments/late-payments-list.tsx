"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAdminApi } from "@/hooks/use-admin-api";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/utils/format-currency";

interface LatePayment {
  id: string;
  userName: string;
  tontineName: string;
  amount: number;
  daysLate: number;
  lastReminder: string;
}

export function LatePaymentsList() {
  const { fetchData, isLoading } = useAdminApi();
  const [latePayments, setLatePayments] = useState<LatePayment[]>([]);

  useEffect(() => {
    const loadLatePayments = async () => {
      const response = await fetchData<LatePayment[]>("late-payments");
      if (response.data) {
        setLatePayments(response.data);
      }
    };
    loadLatePayments();
  }, []);

  const handleReminder = async (id: string) => {
    await fetchData("late-payments/remind", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    // Refresh the list after sending reminder
    const response = await fetchData<LatePayment[]>("late-payments");
    if (response.data) {
      setLatePayments(response.data);
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Membre</TableHead>
          <TableHead>Tontine</TableHead>
          <TableHead>Montant</TableHead>
          <TableHead>Retard</TableHead>
          <TableHead>Dernier rappel</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {latePayments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.userName}</TableCell>
            <TableCell>{payment.tontineName}</TableCell>
            <TableCell>{formatCurrency(payment.amount)}</TableCell>
            <TableCell>
              <Badge variant="destructive">
                {payment.daysLate} jours
              </Badge>
            </TableCell>
            <TableCell>{payment.lastReminder}</TableCell>
            <TableCell>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleReminder(payment.id)}
              >
                Envoyer un rappel
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}