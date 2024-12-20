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
import { formatCurrency } from "@/lib/utils/format-currency";

const withdrawalRequests = [
  {
    user: "Sophie Bernard",
    amount: 50000,
    date: "16 Mars 2024",
  },
  {
    user: "Pierre Dubois",
    amount: 75000,
    date: "15 Mars 2024",
  },
];

export function WithdrawalRequests() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Demandes de retrait</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Utilisateur</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawalRequests.map((request) => (
            <TableRow key={request.date}>
              <TableCell>{request.user}</TableCell>
              <TableCell>{formatCurrency(request.amount)}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Valider
                  </Button>
                  <Button size="sm" variant="destructive">
                    Refuser
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}