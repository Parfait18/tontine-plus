interface AmountDisplayProps {
  label: string;
  amount: string;
}

export function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-semibold">{amount}</p>
    </div>
  );
}