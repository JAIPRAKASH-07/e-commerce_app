import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import CartFooter from "./components/CartFooter";
import Login from  "./pages/Login";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CartFooter />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
