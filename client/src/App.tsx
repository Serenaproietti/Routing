import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/dashboard";
import Calendario from "@/pages/calendario";
import Percorsi from "@/pages/percorsi";
import Spedizioni from "@/pages/spedizioni";
import Flotte from "@/pages/flotte";
import Sedi from "@/pages/sedi";
import Personali from "@/pages/personali";
import Turni from "@/pages/turni";
import Impostazioni from "@/pages/impostazioni";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/calendario" component={Calendario} />
        <Route path="/percorsi" component={Percorsi} />
        <Route path="/spedizioni" component={Spedizioni} />
        <Route path="/flotte" component={Flotte} />
        <Route path="/sedi" component={Sedi} />
        <Route path="/personali" component={Personali} />
        <Route path="/turni" component={Turni} />
        <Route path="/impostazioni" component={Impostazioni} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
