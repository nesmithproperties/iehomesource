import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CityPage from "@/pages/CityPage";

const queryClient = new QueryClient();

const citySlugs = [
  "riverside",
  "san-bernardino",
  "fontana",
  "moreno-valley",
  "rancho-cucamonga",
  "ontario",
  "corona",
  "victorville",
  "murrieta",
  "temecula",
  "rialto",
  "hesperia",
];

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {citySlugs.map((slug) => (
        <Route key={slug} path={`/${slug}`}>
          {() => <CityPage citySlug={slug} />}
        </Route>
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
