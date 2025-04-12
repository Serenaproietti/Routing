import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import wavePattern from "../assets/wave-pattern.png";
import vectorLogo from "../assets/vector-logo.png";
import { RefreshCw, Edit3, FileText } from "lucide-react";

const Percorsi = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Sezione Ottimizzazione Percorsi */}
      <div className="relative rounded-xl overflow-hidden bg-white p-0.5 mb-6">
        <div 
          className="absolute inset-0 opacity-90 z-0" 
          style={{ 
            backgroundImage: `url(${wavePattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 py-12">
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white/80 rounded-full flex items-center justify-center mb-5 md:mb-0 p-5">
            <img src={vectorLogo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex-grow md:ml-10 text-center md:text-left">
            <h3 className="text-xl font-medium">Prossima ottimizzazione automatica tra:</h3>
            <p className="text-4xl font-bold my-3">10 min e 30 sec</p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col space-y-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full flex items-center">
              <RefreshCw className="mr-2 h-5 w-5" />
              Calcola percorsi ottimi
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full flex items-center">
              <Edit3 className="mr-2 h-5 w-5" />
              Crea un percorso manuale
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Percorsi Pianificati</h3>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="cursor-pointer hover:bg-gray-200">percorso ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">sede di partenza ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">data di partenza ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">mezzo ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">trasportatore ↕</TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-200">status ↕</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#P0001</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>11 Febbraio 2025</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0002</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>12 Febbraio 2025</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Manuale
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0003</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>13 Febbraio 2025</TableCell>
                <TableCell>#F0001</TableCell>
                <TableCell>Emanuele Fiocco</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0004</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>17 Febbraio 2025</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>Serena Proietti</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0003</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>13 Febbraio 2025</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>Francesca Venditti</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0004</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>17 Febbraio 2025</TableCell>
                <TableCell>#F0002</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0003</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>13 Febbraio 2025</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0004</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>17 Febbraio 2025</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0003</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>13 Febbraio 2025</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#P0004</TableCell>
                <TableCell>Via XXXXX, XX</TableCell>
                <TableCell>17 Febbraio 2025</TableCell>
                <TableCell>#F0003</TableCell>
                <TableCell>Luca Peraccini</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Ottimizzato
                  </span>
                </TableCell>
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

export default Percorsi;
