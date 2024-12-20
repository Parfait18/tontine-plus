import { Wallet, Calendar, CreditCard, History } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Tableau de bord", href: "/dashboard", icon: Wallet },
  { name: "Planning", href: "/dashboard/schedule", icon: Calendar },
  { name: "Paiements", href: "/dashboard/payments", icon: CreditCard },
  { name: "Historique", href: "/dashboard/history", icon: History },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 p-2 rounded-lg hover:bg-orange-50"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}