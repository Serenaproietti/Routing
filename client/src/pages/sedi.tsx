import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Users, Truck, MoreVertical } from "lucide-react";

const Sedi = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Mappa Sedi</h3>
          </div>
          <CardContent>
            <div className="h-96 bg-gray-100 rounded overflow-hidden">
              <div className="w-full h-full relative bg-[#f2f2f2]">
                {/* Mappa stilizzata */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Sfondo mappa */}
                    <rect width="800" height="600" fill="#f2f2f2" />
                    
                    {/* Confini italiani stilizzati */}
                    <path d="M400,50 C450,60 480,80 500,100 C520,120 540,150 550,200 C560,250 570,300 580,350 C590,400 580,450 560,500 C540,550 500,580 450,590 C400,600 350,590 320,570 C290,550 270,520 250,480 C230,440 220,400 210,350 C200,300 200,250 220,200 C240,150 280,120 320,80 C360,40 380,45 400,50 Z" 
                          fill="#fafafa" stroke="#dddddd" strokeWidth="2" />
                    
                    {/* Punti città principali */}
                    <circle cx="400" cy="200" r="10" fill="#ed991d" />
                    <circle cx="300" cy="350" r="10" fill="#ed991d" />
                    <circle cx="450" cy="350" r="10" fill="#ed991d" />
                    <circle cx="350" cy="500" r="10" fill="#ed991d" />
                    <circle cx="500" cy="450" r="10" fill="#ed991d" />
                    
                    {/* Etichette città */}
                    <text x="385" y="185" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Milano</text>
                    <text x="285" y="335" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Roma</text>
                    <text x="435" y="335" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Napoli</text>
                    <text x="335" y="485" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Palermo</text>
                    <text x="485" y="435" fill="#333" fontFamily="Arial" fontSize="12" fontWeight="bold">Bari</text>
                    
                    {/* Altre città minori */}
                    <circle cx="420" cy="150" r="6" fill="#2563eb" />
                    <text x="425" y="150" fill="#333" fontFamily="Arial" fontSize="10">Torino</text>
                    
                    <circle cx="450" cy="180" r="6" fill="#2563eb" />
                    <text x="455" y="180" fill="#333" fontFamily="Arial" fontSize="10">Venezia</text>
                    
                    <circle cx="370" cy="230" r="6" fill="#2563eb" />
                    <text x="375" y="230" fill="#333" fontFamily="Arial" fontSize="10">Bologna</text>
                    
                    <circle cx="350" cy="270" r="6" fill="#2563eb" />
                    <text x="355" y="270" fill="#333" fontFamily="Arial" fontSize="10">Firenze</text>
                    
                    <circle cx="400" cy="400" r="6" fill="#2563eb" />
                    <text x="405" y="400" fill="#333" fontFamily="Arial" fontSize="10">Catania</text>
                    
                    {/* Connessioni tra sedi */}
                    <line x1="400" y1="200" x2="300" y2="350" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="300" y1="350" x2="450" y2="350" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="450" y1="350" x2="500" y2="450" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="300" y1="350" x2="350" y2="500" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="400" y1="200" x2="370" y2="230" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="370" y1="230" x2="350" y2="270" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
                    <line x1="350" y1="270" x2="300" y2="350" stroke="#ed991d" strokeWidth="2" strokeDasharray="4" />
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
                    <span>Sedi principali</span>
                  </div>
                  <div className="flex items-center text-xs mb-1">
                    <div className="w-3 h-3 rounded-full bg-[#2563eb] mr-1"></div>
                    <span>Sedi secondarie</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium">Sedi</h3>
            <Button>
              Nuova Sede
            </Button>
          </div>
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Milano - Sede Centrale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Milano, 123 - 20100 Milano (MI)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 45
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 12
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Roma - Filiale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Roma, 456 - 00100 Roma (RM)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 28
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 8
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium">Napoli - Filiale</h4>
                  <p className="text-xs text-gray-500 mt-1">Via Napoli, 789 - 80100 Napoli (NA)</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 mr-4">
                      <Users className="inline-block h-3 w-3 align-text-bottom mr-1" /> 18
                    </span>
                    <span className="text-xs text-gray-500">
                      <Truck className="inline-block h-3 w-3 align-text-bottom mr-1" /> 5
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Metriche Sedi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Spedizioni per Sede (Ottobre)</h4>
            <div className="h-48 bg-gray-100 rounded overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Assi del grafico */}
                <line x1="40" y1="20" x2="40" y2="170" stroke="#333" strokeWidth="1.5" />
                <line x1="40" y1="170" x2="380" y2="170" stroke="#333" strokeWidth="1.5" />
                
                {/* Etichette Sedi */}
                <text x="70" y="190" fill="#333" fontSize="11" textAnchor="middle">Milano</text>
                <text x="130" y="190" fill="#333" fontSize="11" textAnchor="middle">Roma</text>
                <text x="190" y="190" fill="#333" fontSize="11" textAnchor="middle">Napoli</text>
                <text x="250" y="190" fill="#333" fontSize="11" textAnchor="middle">Torino</text>
                <text x="310" y="190" fill="#333" fontSize="11" textAnchor="middle">Firenze</text>
                
                {/* Valori asse Y */}
                <text x="30" y="170" fill="#666" fontSize="10" textAnchor="end">0</text>
                <text x="30" y="130" fill="#666" fontSize="10" textAnchor="end">50</text>
                <text x="30" y="90" fill="#666" fontSize="10" textAnchor="end">100</text>
                <text x="30" y="50" fill="#666" fontSize="10" textAnchor="end">150</text>
                
                {/* Linee griglia */}
                <line x1="40" y1="130" x2="380" y2="130" stroke="#ccc" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="40" y1="90" x2="380" y2="90" stroke="#ccc" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="40" y1="50" x2="380" y2="50" stroke="#ccc" strokeWidth="0.5" strokeDasharray="4" />
                
                {/* Barre del grafico */}
                <rect x="55" y="50" width="30" height="120" fill="#ed991d" opacity="0.9" rx="4" />
                <rect x="115" y="90" width="30" height="80" fill="#ed991d" opacity="0.9" rx="4" />
                <rect x="175" y="110" width="30" height="60" fill="#ed991d" opacity="0.9" rx="4" />
                <rect x="235" y="130" width="30" height="40" fill="#ed991d" opacity="0.9" rx="4" />
                <rect x="295" y="140" width="30" height="30" fill="#ed991d" opacity="0.9" rx="4" />
                
                {/* Etichette valori */}
                <text x="70" y="40" fill="#333" fontSize="10" textAnchor="middle" fontWeight="bold">145</text>
                <text x="130" y="80" fill="#333" fontSize="10" textAnchor="middle" fontWeight="bold">94</text>
                <text x="190" y="100" fill="#333" fontSize="10" textAnchor="middle" fontWeight="bold">72</text>
                <text x="250" y="120" fill="#333" fontSize="10" textAnchor="middle" fontWeight="bold">48</text>
                <text x="310" y="130" fill="#333" fontSize="10" textAnchor="middle" fontWeight="bold">36</text>
              </svg>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Personale per Sede</h4>
            <div className="h-48 bg-gray-100 rounded overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Grafico a torta */}
                <circle cx="100" cy="100" r="80" fill="#f1f1f1" />
                
                {/* Fette del grafico */}
                <path d="M100,100 L100,20 A80,80 0 0,1 155,50 Z" fill="#ed991d" />
                <path d="M100,100 L155,50 A80,80 0 0,1 175,100 Z" fill="#2563eb" />
                <path d="M100,100 L175,100 A80,80 0 0,1 155,150 Z" fill="#16a34a" />
                <path d="M100,100 L155,150 A80,80 0 0,1 100,180 Z" fill="#9333ea" />
                <path d="M100,100 L100,180 A80,80 0 0,1 45,150 Z" fill="#e11d48" />
                <path d="M100,100 L45,150 A80,80 0 0,1 25,100 Z" fill="#84cc16" />
                <path d="M100,100 L25,100 A80,80 0 0,1 45,50 Z" fill="#6366f1" />
                <path d="M100,100 L45,50 A80,80 0 0,1 100,20 Z" fill="#f97316" />
                
                {/* Cerchio centrale */}
                <circle cx="100" cy="100" r="40" fill="white" />
                
                {/* Legenda */}
                <text x="100" y="90" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">Personale</text>
                <text x="100" y="110" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">158</text>
              </svg>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Distribuzione Flotta</h4>
            <div className="h-48 bg-gray-100 rounded overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Grafico a torta */}
                <path d="M100,100 L100,20 A80,80 0 0,1 180,100 Z" fill="#ed991d" />
                <path d="M100,100 L180,100 A80,80 0 0,1 100,180 Z" fill="#2563eb" />
                <path d="M100,100 L100,180 A80,80 0 0,1 20,100 Z" fill="#16a34a" />
                <path d="M100,100 L20,100 A80,80 0 0,1 100,20 Z" fill="#9333ea" />
                
                {/* Legenda */}
                <circle cx="30" cy="30" r="6" fill="#ed991d" />
                <text x="45" y="33" fill="#333" fontSize="9">Furgoni (45%)</text>
                
                <circle cx="30" cy="50" r="6" fill="#2563eb" />
                <text x="45" y="53" fill="#333" fontSize="9">Camion (30%)</text>
                
                <circle cx="30" cy="70" r="6" fill="#16a34a" />
                <text x="45" y="73" fill="#333" fontSize="9">Van (15%)</text>
                
                <circle cx="30" cy="90" r="6" fill="#9333ea" />
                <text x="45" y="93" fill="#333" fontSize="9">Mezzi speciali (10%)</text>
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sedi;
