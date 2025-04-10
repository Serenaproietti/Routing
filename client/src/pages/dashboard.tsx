import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Package, Car, CheckCircle, ArrowUp, ArrowDown, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-primary">
                <Package className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Spedizioni Attive</h3>
                <p className="text-2xl font-semibold">42</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>12% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Car className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Veicoli in Movimento</h3>
                <p className="text-2xl font-semibold">18</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-red-600">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>3% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Consegne Completate</h3>
                <p className="text-2xl font-semibold">128</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>8% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Panoramica Spedizioni</h3>
            </div>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Area grafico spedizioni</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Attività Recenti</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">Consegna completata</p>
                    <p className="text-xs text-gray-500">Spedizione #IT58721 - Milano</p>
                    <p className="text-xs text-gray-400 mt-1">10 minuti fa</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start">
                  <Package className="text-blue-500 mr-3 h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">Spedizione in transito</p>
                    <p className="text-xs text-gray-500">Spedizione #IT58735 - Roma</p>
                    <p className="text-xs text-gray-400 mt-1">45 minuti fa</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start">
                  <div className="text-yellow-500 mr-3">⚠️</div>
                  <div>
                    <p className="text-sm font-medium">Ritardo consegna</p>
                    <p className="text-xs text-gray-500">Spedizione #IT58702 - Napoli</p>
                    <p className="text-xs text-gray-400 mt-1">2 ore fa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
