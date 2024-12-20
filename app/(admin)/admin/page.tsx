import { AdminDashboardHeader } from "@/components/admin/dashboard-header";
import { TontineStats } from "@/components/admin/tontine-stats";
import { PendingApprovals } from "@/components/admin/pending-approvals";
import { LatePayments } from "@/components/admin/late-payments";
import { WithdrawalRequests } from "@/components/admin/withdrawal-requests";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TontineStats />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <PendingApprovals />
        <WithdrawalRequests />
      </div>
      <LatePayments />
    </div>
  );
}