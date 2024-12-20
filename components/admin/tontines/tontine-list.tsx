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

interface Tontine {
  id: string;
  name: string;
  frequency: string;
  amount: number;
  members: number;
  status: string;
}

export function TontineList() {
  const { fetchData, isLoading } = useAdminApi();
  const [tontines, setTontines] = useState<Tontine[]>([]);

  useEffect(() => {
    const loadTontines = async () => {
      const response = await fetchData<Tontine[]>("tontines");
      if (response.data) {
        setTontines(response.data);
      }
    };
    loadTontines();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Fréquence</TableHead>
          <TableHead>Montant</TableHead>
          <TableHead>Membres</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tontines.map((tontine) => (
          <TableRow key={tontine.id}>
            <TableCell>{tontine.name}</TableCell>
            <TableCell>{tontine.frequency}</TableCell>
            <TableCell>{formatCurrency(tontine.amount)}</TableCell>
            <TableCell>{tontine.members}</TableCell>
            <TableCell>
              <Badge
                variant={tontine.status === "active" ? "success" : "destructive"}
              >
                {tontine.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  Détails
                </Button>
                <Button size="sm" variant="destructive">
                  Clôturer
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}