export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Bienvenue sur votre espace personnel</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Votre tontine</p>
        <p className="text-lg font-semibold">Plan Mensuel - 5 000 FCFA</p>
      </div>
    </div>
  );
}