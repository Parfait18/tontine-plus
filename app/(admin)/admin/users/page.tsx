"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { UserList } from "@/components/admin/users/user-list";
import { UserFilters } from "@/components/admin/users/user-filters";
import { useAdminApi } from "@/hooks/use-admin-api";

export default function UsersPage() {
  const [filters, setFilters] = useState({
    role: "all",
    status: "all",
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des utilisateurs</h1>
      </div>

      <Card className="p-6">
        <UserFilters filters={filters} onFilterChange={setFilters} />
        <UserList filters={filters} />
      </Card>
    </div>
  );
}