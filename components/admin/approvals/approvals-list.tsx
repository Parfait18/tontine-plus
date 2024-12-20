"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useAdminApi } from "@/hooks/use-admin-api";
import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils/date-utils";

interface PendingApproval {
  id: string;
  name: string;
  email: string;
  requestDate: string;
  tontineName: string;
}

export function ApprovalsList() {
  const { fetchData, isLoading } = useAdminApi();
  const [approvals, setApprovals] = useState<PendingApproval[]>([]);

  useEffect(() => {
    const loadApprovals = async () => {
      const response = await fetchData<PendingApproval[]>("approvals");
      if (response.data) {
        setApprovals(response.data);
      }
    };
    loadApprovals();
  }, []);

  const handleApproval = async (id: string, action: 'approve' | 'reject') => {
    await fetchData(`approvals/${action}`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    // Refresh the list after action
    const response = await fetchData<PendingApproval[]>("approvals");
    if (response.data) {
      setApprovals(response.data);
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Tontine</TableHead>
          <TableHead>Date de demande</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {approvals.map((approval) => (
          <TableRow key={approval.id}>
            <TableCell>{approval.name}</TableCell>
            <TableCell>{approval.email}</TableCell>
            <TableCell>{approval.tontineName}</TableCell>
            <TableCell>{formatDate(new Date(approval.requestDate))}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => handleApproval(approval.id, 'approve')}
                >
                  Approuver
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleApproval(approval.id, 'reject')}
                >
                  Refuser
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}