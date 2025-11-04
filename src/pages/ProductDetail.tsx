import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
      toast.success('Added to cart!', {
        description: `${product.title} has been added to your cart.`,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-accent" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
        <div className="mb-4 text-6xl">😕</div>
        <h2 className="mb-2 text-2xl font-bold text-foreground">Product not found</h2>
        <p className="mb-6 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-40 pt-4">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 animate-fade-in">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 animate-scale-in">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <Badge className="mb-3 bg-secondary text-secondary-foreground capitalize">
                {product.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {product.title}
              </h1>
              
              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">
                    {product.rating.rate}
                  </span>
                </div>
                <span className="text-muted-foreground">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="mb-6 text-4xl font-bold" style={{ color: 'hsl(var(--price-text))' }}>
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">Description</h2>
              <p className="leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            <Button
              size="lg"
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 transition-all duration-300 shadow-md text-lg py-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
