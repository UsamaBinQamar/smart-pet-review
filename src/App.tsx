import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticleHealthyEyes from "./pages/ArticleHealthyEyes";
import ArticleJointHealth from "./pages/ArticleJointHealth";
import ArticleSupplements from "./pages/ArticleSupplements";
import ArticleDigestiveHealth from "./pages/ArticleDigestiveHealth";
import ArticleSeparationAnxiety from "./pages/ArticleSeparationAnxiety";
import ArticleSkinCoat from "./pages/ArticleSkinCoat";
import ItchReliefDogs2025 from "./pages/ItchReliefDogs2025";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/healthy-eyes-clear-vision" element={<ArticleHealthyEyes />} />
          <Route path="/article/joint-health-mobility" element={<ArticleJointHealth />} />
          <Route path="/article/supplements-help-your-dog" element={<ArticleSupplements />} />
          <Route path="/article/digestive-health-immunity" element={<ArticleDigestiveHealth />} />
          <Route path="/article/separation-anxiety" element={<ArticleSeparationAnxiety />} />
          <Route path="/article/skin-coat" element={<ArticleSkinCoat />} />
          <Route path="/article/itch-relief-dogs-2025" element={<ItchReliefDogs2025 />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
