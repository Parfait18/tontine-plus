import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const scheduleData = [
  { date: "15 Avril 2024", amount: "5 000 FCFA", status: "À venir" },
  { date: "15 Mai 2024", amount: "5 000 FCFA", status: "À venir" },
  { date: "15 Juin 2024", amount: "5 000 FCFA", status: "À venir" },
];

export function PaymentSchedule() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Calendrier des paiements</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}