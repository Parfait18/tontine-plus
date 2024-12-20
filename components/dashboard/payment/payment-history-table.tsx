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

const paymentHistory = [
  {
    date: "15 Mars 2024",
    amount: "5 000 FCFA",
    method: "KkiaPay",
    status: "success",
    reference: "PAY-123456",
  },
  {
    date: "15 Février 2024",
    amount: "5 000 FCFA",
    method: "Espèces",
    status: "success",
    reference: "PAY-123457",
  },
];

export function PaymentHistoryTable() {
  return (
    <div>
      <h2 className="font-semibold mb-4">Historique détaillé</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Référence</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Méthode</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentHistory.map((payment) => (
            <TableRow key={payment.reference}>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.reference}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>
                <Badge variant={payment.status === "success" ? "success" : "destructive"}>
                  {payment.status === "success" ? "Payé" : "Échec"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}