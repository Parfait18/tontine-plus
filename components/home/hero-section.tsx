import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-secondary mb-4">
        Gérez vos tontines en toute simplicité
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Plateforme moderne de gestion de tontine avec paiements en ligne, 
        suivi en temps réel et notifications automatiques.
      </p>
      <div className="mt-8">
        <Link href="/register">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Commencer maintenant
          </Button>
        </Link>
      </div>
    </div>
  );
}