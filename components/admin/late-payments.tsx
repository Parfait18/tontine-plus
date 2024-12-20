import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format-currency";

const latePayments = [
  {
    user: "Paul Martin",
    amount: 5000,
    daysLate: 3,
    frequency: "Mensuel",
  },
  {
    user: "Anne Petit",
    amount: 5000,
    daysLate: 5,
    frequency: "Mensuel",
  },
];

export function LatePayments() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Retards de paiement</h3>
        <Button className="bg-orange-500 hover:bg-orange-600">
          Envoyer des rappels
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Utilisateur</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Retard</TableHead>
            <TableHead>Fréquence</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latePayments.map((payment) => (
            <TableRow key={payment.user}>
              <TableCell>{payment.user}</TableCell>
              <TableCell>{formatCurrency(payment.amount)}</TableCell>
              <TableCell>
                <Badge variant="destructive">
                  {payment.daysLate} jours
                </Badge>
              </TableCell>
              <TableCell>{payment.frequency}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Relancer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}