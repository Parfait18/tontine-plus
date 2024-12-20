"use client";

import { Card } from "@/components/ui/card";
import { ApprovalsList } from "@/components/admin/approvals/approvals-list";
import { ApprovalsStats } from "@/components/admin/approvals/approvals-stats";

export default function ApprovalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Validations en attente</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ApprovalsStats />
      </div>

      <Card className="p-6">
        <ApprovalsList />
      </Card>
    </div>
  );
}