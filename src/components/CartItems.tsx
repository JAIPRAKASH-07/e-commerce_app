import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-4 text-6xl">🛒</div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">Your cart is empty</h3>
        <p className="text-muted-foreground">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4 py-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:shadow-card"
            >
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-secondary/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h4 className="line-clamp-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-lg font-bold" style={{ color: 'hsl(var(--price-text))' }}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="space-y-4 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">Total:</span>
          <span className="text-2xl font-bold" style={{ color: 'hsl(var(--price-text))' }}>
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
