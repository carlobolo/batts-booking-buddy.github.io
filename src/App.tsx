
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingList from "./pages/BookingList";
import Contact from "./pages/Contact";
import Beginner from "./pages/Beginner";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import BookingDetails from "./pages/BookingDetails";
import BookingSummary from "./pages/BookingSummary";
import { BookingProvider } from "./contexts/BookingContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sessions" element={<BookingList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beginner" element={<Beginner />} />
            <Route path="/intermediate" element={<Intermediate />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/details" element={<BookingDetails />} />
            <Route path="/summary" element={<BookingSummary />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
