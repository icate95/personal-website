import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import MainNavigation from "./components/MainNavigation";
import MainFooter from "./components/MainFooter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-sono" element={<About />} />
          <Route path="/progetti" element={<Portfolio />} />
          <Route path="/progetti/:id" element={<ProjectDetail />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
