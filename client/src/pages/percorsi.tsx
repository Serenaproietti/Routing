import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Percorsi = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-2/3">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Mappa Percorsi</h3>
              <div>
                <Button variant="outline" size="sm">
                  Filtri
                </Button>
              </div>
            </div>
            <CardContent>
              <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Mappa con percorsi attivi</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/3">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Percorsi Attivi</h3>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Milano → Firenze</p>
                    <p className="text-xs text-gray-500">Autista: Marco B.</p>
                    <p className="text-xs text-gray-400">ETA: 2h 15m</p>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                    In orario
                  </Badge>
                </div>
              </div>
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Roma → Napoli</p>
                    <p className="text-xs text-gray-500">Autista: Luca M.</p>
                    <p className="text-xs text-gray-400">ETA: 1h 30m</p>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Ritardo
                  </Badge>
                </div>
              </div>
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Torino → Milano</p>
                    <p className="text-xs text-gray-500">Autista: Paolo R.</p>
                    <p className="text-xs text-gray-400">ETA: 45m</p>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                    In orario
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Storico Percorsi</h3>
          <Button variant="link" className="text-primary">
            Esporta dati
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Percorso</TableHead>
                <TableHead>Autista</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Durata</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">P-4587</TableCell>
                <TableCell>Milano → Roma</TableCell>
                <TableCell>Francesco L.</TableCell>
                <TableCell>12/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Completato
                  </Badge>
                </TableCell>
                <TableCell>4h 45m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">P-4586</TableCell>
                <TableCell>Venezia → Bologna</TableCell>
                <TableCell>Marco B.</TableCell>
                <TableCell>11/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Completato
                  </Badge>
                </TableCell>
                <TableCell>2h 10m</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Percorsi;
