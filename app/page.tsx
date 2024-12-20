import { Users, Shield, Calendar } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/home/hero-section';
import { FeatureCard } from '@/components/home/feature-card';
import { useAuth } from '@/contexts/auth-context';

const features = [
  {
    icon: Users,
    title: "Gestion Flexible",
    description: "Choisissez votre fréquence de paiement : quotidienne, hebdomadaire ou mensuelle"
  },
  {
    icon: Shield,
    title: "Paiements Sécurisés",
    description: "Effectuez vos paiements en ligne via KkiaPay ou en personne"
  },
  {
    icon: Calendar,
    title: "Suivi en Temps Réel",
    description: "Tableau de bord personnalisé pour suivre vos contributions"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
}