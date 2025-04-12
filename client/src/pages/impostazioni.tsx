import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, Trash2, Search } from "lucide-react";

const Impostazioni = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">


      <div className="space-y-12">
        {/* Tempi e Disponibilità */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b">
              <h2 className="text-2xl font-bold">Tempi e Disponibilità</h2>
              <HelpCircle className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <Label>tempo massimo per consegna</Label>
                <Input defaultValue="3 giorni" className="max-w-[200px]" />
              </div>
              <div className="space-y-2">
                <Label>% overtime massimo</Label>
                <Input className="border-red-500 max-w-[200px]" />
                <p className="text-sm text-red-500">Campo non valido. Verificare il corretto inserimento</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Gestione Inattività */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b">
              <h2 className="text-2xl font-bold">Gestione Inattività</h2>
              <HelpCircle className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-6">
              <div>
                <Label className="text-lg">gestione festività e chiusura</Label>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>sede di riferimento</Label>
                  <Select>
                    <SelectTrigger className="max-w-[300px]">
                      <SelectValue placeholder="Seleziona sede" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="milano">Milano</SelectItem>
                      <SelectItem value="roma">Roma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <div className="space-y-2">
                    <Label>inizio periodo di inattività</Label>
                    <div className="flex gap-3">
                      <Input placeholder="gg/mm/aaaa" className="flex-1" />
                      <Input placeholder="00:00" className="w-24" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>fine periodo di inattività</Label>
                    <div className="flex gap-3">
                      <Input placeholder="gg/mm/aaaa" className="flex-1" />
                      <Input placeholder="00:00" className="w-24" />
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#ED991D] hover:bg-[#D88B1A] text-white">
                  Inserisci
                </Button>

                <div className="border rounded-lg overflow-hidden mt-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">sede</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">inizio inattività</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">fine inattività</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[1, 2, 3].map((i) => (
                        <tr key={i}>
                          <td className="px-6 py-4">Via XXX</td>
                          <td className="px-6 py-4">16/01/2025</td>
                          <td className="px-6 py-4">18/01/2025</td>
                          <td className="px-6 py-4">
                            <div className="flex justify-end">
                              {i === 3 ? (
                                <Button variant="ghost" size="sm">
                                  <Search className="h-4 w-4 text-gray-500" />
                                </Button>
                              ) : (
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Prudenza alla guida */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b">
              <h2 className="text-2xl font-bold">Prudenza alla guida</h2>
              <HelpCircle className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <Label>velocità massima mezzi</Label>
                <Input defaultValue="80 km/h" className="max-w-[200px]" />
              </div>
              <div className="space-y-2">
                <Label>frequenza pause</Label>
                <Input defaultValue="15 min ogni 200km" className="max-w-[200px]" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Impostazioni;
