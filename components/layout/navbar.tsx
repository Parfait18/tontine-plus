"use client";

import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Wallet className="h-8 w-8 text-orange-500" />
          <span className="ml-2 text-xl font-bold text-secondary">TontinePlus</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Connexion</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-orange-500 hover:bg-orange-600">Inscription</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}