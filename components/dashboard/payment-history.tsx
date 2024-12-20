import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const historyData = [
  {
    date: "15 Mars 2024",
    amount: "5 000 FCFA",
    method: "KkiaPay",
    status: "success",
  },
  {
    date: "15 Février 2024",
    amount: "5 000 FCFA",
    method: "Espèces",
    status: "success",
  },
];

export function PaymentHistory() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Historique des paiements</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Méthode</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.method}</TableCell>
              <TableCell>
                <Badge variant={item.status === "success" ? "success" : "destructive"}>
                  {item.status === "success" ? "Payé" : "Échec"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}