import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";

const Turni = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input 
          className="pl-10 bg-white" 
          placeholder="cerca per nome, ecc..."
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="cursor-pointer hover:bg-gray-200">trasportatore ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">mezzo ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">data turno ↕</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>12/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>13/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Emanuele Fiocco</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>13/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Serena Proietti</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>13/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>15/07/2025</TableCell>
                <TableCell>
                  <button className="p-2">
                    <FileText className="h-4 w-4" />
                  </button>
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
