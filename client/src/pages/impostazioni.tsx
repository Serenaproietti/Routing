import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Impostazioni = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium">Categorie</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-primary hover:bg-gray-50 focus:outline-none">
                Profilo Utente
              </button>
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Azienda
              </button>
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Notifiche
              </button>
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Integrazioni
              </button>
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Sicurezza
              </button>
              <button className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Preferenze
              </button>
            </div>
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium">Profilo Utente</h3>
            </div>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-2xl mb-4 md:mb-0">
                  UP
                </div>
                <div className="md:ml-6">
                  <h4 className="text-xl font-medium">Utente Pro</h4>
                  <p className="text-sm text-gray-500">Amministratore</p>
                  <Button variant="outline" className="mt-2">
                    Cambia foto
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" defaultValue="Utente" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cognome">Cognome</Label>
                  <Input id="cognome" defaultValue="Pro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="utente.pro@logisticapro.it" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Telefono</Label>
                  <Input id="telefono" type="tel" defaultValue="+39 123 456 7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sede">Sede</Label>
                  <Select defaultValue="milano">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona sede" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="milano">Milano</SelectItem>
                      <SelectItem value="roma">Roma</SelectItem>
                      <SelectItem value="napoli">Napoli</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lingua">Lingua</Label>
                  <Select defaultValue="italiano">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona lingua" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="italiano">Italiano</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button variant="outline" className="mr-3">
                  Annulla
                </Button>
                <Button>
                  Salva Modifiche
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impostazioni;
