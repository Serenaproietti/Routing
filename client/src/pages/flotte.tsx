import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Car, Truck, Settings, MoreVertical, Edit } from "lucide-react";

const Flotte = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Car className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Veicoli Disponibili</h3>
                <p className="text-2xl font-semibold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Truck className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Veicoli in Transito</h3>
                <p className="text-2xl font-semibold">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <Settings className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">In Manutenzione</h3>
                <p className="text-2xl font-semibold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Fuori Servizio</h3>
                <p className="text-2xl font-semibold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Flotta Veicoli</h3>
          <Button>
            Aggiungi Veicolo
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Targa</TableHead>
                <TableHead>Modello</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Kilometraggio</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">AB123CD</TableCell>
                <TableCell>Iveco Daily</TableCell>
                <TableCell>Furgone</TableCell>
                <TableCell>45.234 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Disponibile
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
                <TableCell className="font-medium">EF456GH</TableCell>
                <TableCell>Mercedes Actros</TableCell>
                <TableCell>Camion</TableCell>
                <TableCell>78.567 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    In transito
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
                <TableCell className="font-medium">IL789MN</TableCell>
                <TableCell>Fiat Ducato</TableCell>
                <TableCell>Furgone</TableCell>
                <TableCell>62.125 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Manutenzione
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
                <TableCell className="font-medium">OP234QR</TableCell>
                <TableCell>Renault Master</TableCell>
                <TableCell>Furgone</TableCell>
                <TableCell>32.458 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Disponibile
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
                <TableCell className="font-medium">ST567UV</TableCell>
                <TableCell>Iveco Stralis</TableCell>
                <TableCell>Camion</TableCell>
                <TableCell>112.987 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    In transito
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
                <TableCell className="font-medium">WX890YZ</TableCell>
                <TableCell>Volvo FH</TableCell>
                <TableCell>Camion</TableCell>
                <TableCell>92.346 km</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-red-100 text-red-800">
                    Fuori servizio
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
    </div>
  );
};

export default Flotte;
