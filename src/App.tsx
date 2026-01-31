/**
 * KIDZZ LEELA - Kids Clothing Shop
 * 
 * Main App component with routing and layout.
 * 
 * Structure:
 * - ThemeProvider: Applies theme from config/theme.js
 * - Navbar: Site navigation
 * - Routes: Page routing
 * - Footer: Site footer
 * 
 * To add new pages:
 * 1. Create page in src/pages/
 * 2. Add route below
 * 3. Add nav link in config/siteContent.json
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Collections from "@/pages/Collections";
import Offers from "@/pages/Offers";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Site Navbar */}
          <Navbar />
          
          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/offers" element={<Offers />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Site Footer */}
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
