import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Package, Car, CheckCircle, ArrowUp, ArrowDown, CheckCircle2, XCircle, Truck } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Dati di esempio per il grafico delle spedizioni
const shipmentData = [
  { name: 'Lun', completate: 24, fallite: 2 },
  { name: 'Mar', completate: 28, fallite: 1 },
  { name: 'Mer', completate: 32, fallite: 3 },
  { name: 'Gio', completate: 29, fallite: 2 },
  { name: 'Ven', completate: 35, fallite: 1 },
  { name: 'Sab', completate: 22, fallite: 4 },
  { name: 'Dom', completate: 18, fallite: 2 },
];

// Dati di esempio per il grafico del carico mezzi
const vehicleLoadData = [
  { name: 'Lun', carico: 75 },
  { name: 'Mar', carico: 82 },
  { name: 'Mer', carico: 78 },
  { name: 'Gio', carico: 85 },
  { name: 'Ven', carico: 90 },
  { name: 'Sab', carico: 65 },
  { name: 'Dom', carico: 60 },
];

// Calcolo della media del carico
const averageLoad = Math.round(
  vehicleLoadData.reduce((sum, item) => sum + item.carico, 0) / vehicleLoadData.length
);

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Spedizioni Completate</h3>
                <p className="text-2xl font-semibold">128</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>8% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Package className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">In Consegna</h3>
                <p className="text-2xl font-semibold">42</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>12% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <XCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Spedizioni Fallite</h3>
                <p className="text-2xl font-semibold">5</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-red-600">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>3% rispetto a ieri</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Andamento Spedizioni</h3>
            </div>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={shipmentData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="completate" 
                      stroke="#16a34a" 
                      activeDot={{ r: 8 }} 
                      name="Spedizioni Completate"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="fallite" 
                      stroke="#dc2626" 
                      name="Spedizioni Fallite"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Legenda Andamento Spedizioni</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Spedizioni Completate</p>
                    <p className="text-xs text-gray-500">Linea verde nel grafico</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Spedizioni Fallite</p>
                    <p className="text-xs text-gray-500">Linea rossa nel grafico</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
  
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Carico Mezzi</h3>
            </div>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={vehicleLoadData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Carico']} />
                    <Line 
                      type="monotone" 
                      dataKey="carico" 
                      stroke="#ed991d" 
                      activeDot={{ r: 8 }} 
                      name="Carico Mezzi"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-4 rounded-full bg-orange-100 text-primary mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Media Carico</h3>
                <div className="text-4xl font-bold text-primary">{averageLoad}%</div>
                <p className="text-sm text-gray-500 mt-2">Periodo: ultima settimana</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
