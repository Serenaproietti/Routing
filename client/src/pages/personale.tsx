import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";

const Personale = () => {
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
                <TableHead className="cursor-pointer hover:bg-gray-200">nome ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">codice fiscale</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">data di nascita ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">numero di telefono ↕</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>FRVND57H602P</TableCell>
                <TableCell>11 Febbraio 1999</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>FRVND57H602P</TableCell>
                <TableCell>12 Febbraio 1999</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Emanuele Fiocco</TableCell>
                <TableCell>FCCMNL99L21H</TableCell>
                <TableCell>13 Febbraio 1999</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Serena Proietti</TableCell>
                <TableCell>FRVND57H602P</TableCell>
                <TableCell>17 Febbraio 2000</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>LPPO8920KL4</TableCell>
                <TableCell>13 Febbraio 2000</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>FCCMNL99L21H</TableCell>
                <TableCell>17 Febbraio 2000</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>FCCMNL99L21H</TableCell>
                <TableCell>13 Febbraio 2001</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>LPPO8920KL4</TableCell>
                <TableCell>17 Febbraio 2001</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>LPPO8920KL4</TableCell>
                <TableCell>13 Febbraio 2001</TableCell>
                <TableCell>333 339338</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>LPPO8920KL4</TableCell>
                <TableCell>17 Febbraio 2001</TableCell>
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

export default Personale; 