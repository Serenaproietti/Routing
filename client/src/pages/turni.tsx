import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Edit, MoreVertical } from "lucide-react";

const Turni = () => {
  const weekDays = ["L", "M", "M", "G", "V", "S", "D"];
  const calendarDays = Array.from({ length: 7 }, (_, i) => i + 1);
  
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Calendario Turni</h3>
              <div className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  Settimana
                </Button>
                <Button size="sm">
                  Mese
                </Button>
              </div>
            </div>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="font-medium">Ottobre 2023</span>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day) => (
                  <div 
                    key={day} 
                    className={`border rounded-lg p-1 min-h-[70px] ${day > 5 ? 'bg-gray-50' : ''}`}
                  >
                    <p className="text-right text-xs mb-1">{day}</p>
                    <div className="text-xs p-1 mb-1 bg-blue-100 text-blue-600 rounded truncate">
                      M: {day % 2 === 0 ? 6 : 3}
                    </div>
                    {day < 6 && (
                      <div className="text-xs p-1 bg-green-100 text-green-600 rounded truncate">
                        P: 4
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Turni di Oggi</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="border rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Turno Mattina</h4>
                    <p className="text-xs text-gray-500 mt-1">06:00 - 14:00</p>
                    <div className="flex items-center mt-2">
                      <Badge className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Autisti: 5
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Magazzino: 8
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Attivo
                  </Badge>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Turno Pomeriggio</h4>
                    <p className="text-xs text-gray-500 mt-1">14:00 - 22:00</p>
                    <div className="flex items-center mt-2">
                      <Badge className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Autisti: 4
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Magazzino: 6
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Prossimo
                  </Badge>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Turno Notte</h4>
                    <p className="text-xs text-gray-500 mt-1">22:00 - 06:00</p>
                    <div className="flex items-center mt-2">
                      <Badge className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Autisti: 2
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Magazzino: 4
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-100 text-gray-800">
                    Pianificato
                  </Badge>
                </div>
              </div>
              <Button className="w-full mt-4">
                Crea Nuovo Turno
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Gestione Turni</h3>
          <div>
            <Button variant="outline">
              Esporta Turni
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Turno</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Orario</TableHead>
                <TableHead>Personale</TableHead>
                <TableHead>Sede</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">T-1028</TableCell>
                <TableCell>Mattina</TableCell>
                <TableCell>15/10/2023</TableCell>
                <TableCell>06:00 - 14:00</TableCell>
                <TableCell>13 persone</TableCell>
                <TableCell>Milano</TableCell>
                <TableCell>
                  <div className="flex">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 mr-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">T-1029</TableCell>
                <TableCell>Pomeriggio</TableCell>
                <TableCell>15/10/2023</TableCell>
                <TableCell>14:00 - 22:00</TableCell>
                <TableCell>10 persone</TableCell>
                <TableCell>Milano</TableCell>
                <TableCell>
                  <div className="flex">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 mr-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Turni;
