import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Sedi = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="cursor-pointer hover:bg-gray-200">indirizzo sede ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">città ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">tipologia ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">responsabile ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">contatto ↕</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Sede Amministrativa</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Punto di ritiro</TableCell>
                <TableCell>Emanuele Fiocco</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Serena Proietti</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Torino</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Milano</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Milano</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Centro di distribuzione</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Centro di distribuzione</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>Roma</TableCell>
                <TableCell>Magazzino</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Sedi;
