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

const pendingUsers = [
  {
    name: "Jean Dupont",
    email: "jean@example.com",
    date: "15 Mars 2024",
  },
  {
    name: "Marie Martin",
    email: "marie@example.com",
    date: "14 Mars 2024",
  },
];

export function PendingApprovals() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Demandes d'inscription en attente</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pendingUsers.map((user) => (
            <TableRow key={user.email}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Approuver
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