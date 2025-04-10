import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import wavePattern from "../assets/wave-pattern.png";
import { RefreshCw, Edit3 } from "lucide-react";

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
              <div className="h-96 bg-gray-100 rounded overflow-hidden">
                <div className="w-full h-full relative bg-[#f2f2f2]">
                  {/* Mappa stilizzata */}
                  <div className="absolute inset-0">
                    <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Sfondo mappa */}
                      <rect width="800" height="600" fill="#f2f2f2" />
                      
                      {/* Strade principali */}
                      <line x1="100" y1="100" x2="700" y2="100" stroke="#cccccc" strokeWidth="8" />
                      <line x1="100" y1="300" x2="700" y2="300" stroke="#cccccc" strokeWidth="8" />
                      <line x1="100" y1="500" x2="700" y2="500" stroke="#cccccc" strokeWidth="8" />
                      <line x1="100" y1="100" x2="100" y2="500" stroke="#cccccc" strokeWidth="8" />
                      <line x1="400" y1="100" x2="400" y2="500" stroke="#cccccc" strokeWidth="8" />
                      <line x1="700" y1="100" x2="700" y2="500" stroke="#cccccc" strokeWidth="8" />
                      
                      {/* Strade secondarie */}
                      <line x1="250" y1="100" x2="250" y2="500" stroke="#dddddd" strokeWidth="4" />
                      <line x1="550" y1="100" x2="550" y2="500" stroke="#dddddd" strokeWidth="4" />
                      <line x1="100" y1="200" x2="700" y2="200" stroke="#dddddd" strokeWidth="4" />
                      <line x1="100" y1="400" x2="700" y2="400" stroke="#dddddd" strokeWidth="4" />
                      
                      {/* Percorsi attivi */}
                      <path d="M100,300 C150,280 200,290 250,300 C300,310 350,300 400,300 C450,300 500,320 550,300 C600,280 650,290 700,300" 
                            stroke="#ed991d" strokeWidth="4" strokeLinecap="round" fill="none" />
                      <path d="M400,100 C380,150 390,200 400,250 C410,300 400,350 400,400 C400,450 420,500 400,550" 
                            stroke="#2563eb" strokeWidth="4" strokeLinecap="round" fill="none" />
                      <path d="M100,100 C150,150 200,200 250,250 C300,300 350,350 400,400" 
                            stroke="#16a34a" strokeWidth="4" strokeLinecap="round" fill="none" />
                      
                      {/* Punti città */}
                      <circle cx="100" cy="100" r="10" fill="#ed991d" />
                      <circle cx="100" cy="300" r="10" fill="#ed991d" />
                      <circle cx="400" cy="100" r="10" fill="#ed991d" />
                      <circle cx="400" cy="400" r="10" fill="#ed991d" />
                      <circle cx="700" cy="300" r="10" fill="#ed991d" />
                      
                      {/* Etichette città */}
                      <text x="85" y="85" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Milano</text>
                      <text x="85" y="285" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Roma</text>
                      <text x="385" y="85" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Torino</text>
                      <text x="385" y="385" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Firenze</text>
                      <text x="685" y="285" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Napoli</text>
                      
                      {/* Veicoli in movimento */}
                      <circle cx="250" cy="300" r="6" fill="#e11d48" />
                      <circle cx="400" cy="250" r="6" fill="#e11d48" />
                      <circle cx="200" cy="200" r="6" fill="#e11d48" />
                    </svg>
                  </div>
                  
                  {/* Controlli mappa */}
                  <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md">
                    <div className="flex flex-col space-y-2">
                      <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                      <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-100">−</button>
                    </div>
                  </div>
                  
                  {/* Legenda */}
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md">
                    <div className="text-xs font-medium mb-1">Legenda</div>
                    <div className="flex items-center text-xs mb-1">
                      <div className="w-3 h-3 rounded-full bg-[#ed991d] mr-1"></div>
                      <span>Percorso Milano-Napoli</span>
                    </div>
                    <div className="flex items-center text-xs mb-1">
                      <div className="w-3 h-3 rounded-full bg-[#2563eb] mr-1"></div>
                      <span>Percorso Torino-Firenze</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-3 h-3 rounded-full bg-[#e11d48] mr-1"></div>
                      <span>Veicoli attivi</span>
                    </div>
                  </div>
                </div>
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
          <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white/80 rounded-full flex items-center justify-center mb-5 md:mb-0">
            <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M20,50 L40,20 L60,50 L40,80 Z" 
                fill="#ed991d" 
                transform="rotate(0, 50, 50)"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  from="0 50 50" 
                  to="360 50 50" 
                  dur="20s" 
                  repeatCount="indefinite" 
                />
              </path>
              <path 
                d="M30,50 L50,30 L70,50 L50,70 Z" 
                fill="#ed991d" 
                opacity="0.7"
                transform="rotate(45, 50, 50)"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  from="45 50 50" 
                  to="405 50 50" 
                  dur="15s" 
                  repeatCount="indefinite" 
                />
              </path>
            </svg>
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
              <TableRow>
                <TableCell className="font-medium">P-4585</TableCell>
                <TableCell>Torino → Milano</TableCell>
                <TableCell>Paolo R.</TableCell>
                <TableCell>10/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Completato
                  </Badge>
                </TableCell>
                <TableCell>1h 30m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">P-4584</TableCell>
                <TableCell>Napoli → Bari</TableCell>
                <TableCell>Giuseppe M.</TableCell>
                <TableCell>09/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Completato
                  </Badge>
                </TableCell>
                <TableCell>3h 15m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">P-4583</TableCell>
                <TableCell>Roma → Firenze</TableCell>
                <TableCell>Antonio V.</TableCell>
                <TableCell>08/10/2023</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Ritardato
                  </Badge>
                </TableCell>
                <TableCell>3h 50m</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Percorsi;
