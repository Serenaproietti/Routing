import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Search, Edit, MoreVertical } from "lucide-react";

const Personali = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4">
          <h3 className="text-lg font-medium">Personale</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Cerca personale..."
                className="pl-10 pr-4 w-full sm:w-64"
              />
            </div>
            <Button>Aggiungi Dipendente</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Ruolo</TableHead>
                <TableHead>Sede</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefono</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      MR
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Marco Rossi</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Autista</TableCell>
                <TableCell>Milano</TableCell>
                <TableCell>m.rossi@logisticapro.it</TableCell>
                <TableCell>+39 123 456 7890</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Attivo
                  </Badge>
                </TableCell>
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
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      LB
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Laura Bianchi</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Responsabile Logistica</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>l.bianchi@logisticapro.it</TableCell>
                <TableCell>+39 234 567 8901</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Attivo
                  </Badge>
                </TableCell>
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
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      GV
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Giovanni Verdi</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Magazziniere</TableCell>
                <TableCell>Napoli</TableCell>
                <TableCell>g.verdi@logisticapro.it</TableCell>
                <TableCell>+39 345 678 9012</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-red-100 text-red-800">
                    In ferie
                  </Badge>
                </TableCell>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Distribuzione Personale</h3>
          </div>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Grafico distribuzione per ruolo e sede</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Personale Disponibile Oggi</h3>
          </div>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Autisti</h4>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium mr-2">18</span>
                  <span className="text-xs text-gray-500">/ 22</span>
                </div>
              </div>
              <Progress className="h-2.5 bg-gray-200" value={82} />
              
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Magazzinieri</h4>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium mr-2">24</span>
                  <span className="text-xs text-gray-500">/ 30</span>
                </div>
              </div>
              <Progress className="h-2.5 bg-gray-200" value={80} />
              
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Amministrativi</h4>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium mr-2">12</span>
                  <span className="text-xs text-gray-500">/ 15</span>
                </div>
              </div>
              <Progress className="h-2.5 bg-gray-200" value={80} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Personali;
