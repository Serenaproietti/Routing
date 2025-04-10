import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const Spedizioni = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <Card>
        <div className="px-6 py-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4">
          <h3 className="text-lg font-medium">Spedizioni</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Cerca spedizione..."
                className="pl-10 pr-4 w-full sm:w-64"
              />
            </div>
            <Button>Nuova Spedizione</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Origine → Destinazione</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data Partenza</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">S-7845</TableCell>
                <TableCell>Milano → Roma</TableCell>
                <TableCell>Elettronica SPA</TableCell>
                <TableCell>15/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    In transito
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">S-7844</TableCell>
                <TableCell>Torino → Napoli</TableCell>
                <TableCell>Mobilificio ModernArredo</TableCell>
                <TableCell>14/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    In transito
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">S-7843</TableCell>
                <TableCell>Bologna → Firenze</TableCell>
                <TableCell>TechStore</TableCell>
                <TableCell>13/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Consegnato
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Mostrando 3 di 245 spedizioni
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Button variant="outline" size="sm" className="rounded-l-md">
                <span className="sr-only">Precedente</span>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm" className="rounded-r-md">
                <span className="sr-only">Successiva</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Spedizioni;
