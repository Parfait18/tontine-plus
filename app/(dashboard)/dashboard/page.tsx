import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PaymentStats } from "@/components/dashboard/payment-stats";
import { PaymentSchedule } from "@/components/dashboard/payment-schedule";
import { PaymentHistory } from "@/components/dashboard/payment-history";
import { NextPayment } from "@/components/dashboard/next-payment";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PaymentStats />
        <NextPayment />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <PaymentSchedule />
        <PaymentHistory />
      </div>
    </div>
  );
}