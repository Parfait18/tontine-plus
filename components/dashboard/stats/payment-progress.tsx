import { Progress } from "@/components/ui/progress";

interface PaymentProgressProps {
  percentage: number;
  label: string;
}

export function PaymentProgress({ percentage, label }: PaymentProgressProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <Progress value={percentage} className="bg-orange-100" />
    </div>
  );
}