import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import TidioChat from "./components/TidioChat";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          {/* Analytics Integration - Update with your IDs */}
          <Analytics 
            gtmId="GTM-XXXXXXX"
            ga4Id="G-XXXXXXXXXX"
          />
          {/* Tidio Chat Integration - Update with your project ID */}
          <TidioChat projectId="YOUR_TIDIO_PROJECT_ID" />
          
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
