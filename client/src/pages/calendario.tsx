import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Package, Truck } from "lucide-react";
import { Clock } from "@/lib/icons";

const Calendario = () => {
  const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
  const calendarDays = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium">Calendario Spedizioni e Turni</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">Ottobre 2023</span>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day) => (
              <div key={day} className="border rounded-lg p-2 min-h-[80px]">
                <p className="text-right text-sm font-medium mb-2">{day}</p>
                {day % 2 === 1 && (
                  <div className="text-xs p-1 bg-orange-100 text-primary rounded truncate">
                    {day + 2} spedizioni
                  </div>
                )}
                {day % 3 === 0 && (
                  <div className="text-xs p-1 mt-1 bg-blue-100 text-blue-600 rounded truncate">
                    {day} turni
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-orange-100 text-primary rounded-lg p-2">
                    <span className="text-2xl font-bold">P1</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Percorso #P0003</h3>
                    <p className="text-sm text-gray-600">Mezzo: <span className="font-medium">FG001PH</span></p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Carico al 70%
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Data:</p>
                  <p className="font-medium">16/01/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Trasportatore:</p>
                  <p className="font-medium">Emanuele Fiocco</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sede di partenza:</p>
                  <p className="font-medium">Via dei Mirti, 35</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-orange-200">
                  <p className="text-xs text-gray-500">ID Spedizione</p>
                  <p className="text-xs text-gray-500">Destinazione</p>
                  <p className="text-xs text-gray-500">Status</p>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <p className="font-medium">#S0001</p>
                  <p className="text-gray-600">Via YYY</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Consegnato</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-t border-orange-200">
                  <p className="font-medium">#S0002</p>
                  <p className="text-gray-600">Via ZZZ</p>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Fallita</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-t border-orange-200">
                  <p className="font-medium">#S0005</p>
                  <p className="text-gray-600">Via ZZZ</p>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">In Consegna</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2 bg-orange-100 text-primary rounded-lg hover:bg-orange-200 transition-colors">
                Vedi dettagli
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-orange-100 text-primary rounded-lg p-2">
                    <span className="text-2xl font-bold">P2</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Percorso #P0004</h3>
                    <p className="text-sm text-gray-600">Mezzo: <span className="font-medium">FG002PH</span></p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Carico al 85%
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Data:</p>
                  <p className="font-medium">16/01/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Trasportatore:</p>
                  <p className="font-medium">Marco Rossi</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sede di partenza:</p>
                  <p className="font-medium">Via Roma, 42</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-orange-200">
                  <p className="text-xs text-gray-500">ID Spedizione</p>
                  <p className="text-xs text-gray-500">Destinazione</p>
                  <p className="text-xs text-gray-500">Status</p>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <p className="font-medium">#S0010</p>
                  <p className="text-gray-600">Via XXX</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Consegnato</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-t border-orange-200">
                  <p className="font-medium">#S0011</p>
                  <p className="text-gray-600">Via YYY</p>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">In Consegna</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-t border-orange-200">
                  <p className="font-medium">#S0012</p>
                  <p className="text-gray-600">Via ZZZ</p>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">In Consegna</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2 bg-orange-100 text-primary rounded-lg hover:bg-orange-200 transition-colors">
                Vedi dettagli
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendario;
