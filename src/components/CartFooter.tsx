import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import CartItems from './CartItems';

const CartFooter = () => {
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 border-b border-border py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <ShoppingCart className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Shopping Cart</p>
              <p className="text-lg font-bold text-foreground">
                {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="text-2xl font-bold" style={{ color: 'hsl(var(--price-text))' }}>
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 transition-all duration-300 shadow-md"
                >
                  View Cart
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">Shopping Cart</SheetTitle>
                </SheetHeader>
                <CartItems />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        <div className="py-3 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 All rights reserved. Created by Jaiprakash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CartFooter;
