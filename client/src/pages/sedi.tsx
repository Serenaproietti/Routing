import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Users, Truck, MoreVertical } from "lucide-react";

const Sedi = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Mappa Sedi</h3>
          </div>
          <CardContent>
            <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Mappa con tutte le sedi</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium">Sedi</h3>
            <Button>
              Nuova Sede
            </Button>
          </div>
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Milano - Sede Centrale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Milano, 123 - 20100 Milano (MI)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 45
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 12
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Roma - Filiale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Roma, 456 - 00100 Roma (RM)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 28
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 8
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Napoli - Filiale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Napoli, 789 - 80100 Napoli (NA)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 18
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 5
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Metriche Sedi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Spedizioni per Sede (Ottobre)</h4>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Grafico a barre</p>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Personale per Sede</h4>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Grafico a torta</p>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Distribuzione Flotta</h4>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Grafico a torta</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sedi;
