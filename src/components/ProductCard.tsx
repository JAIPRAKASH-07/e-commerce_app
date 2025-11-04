import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:shadow-card-hover animate-fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-2 line-clamp-2 text-base font-semibold text-foreground transition-colors hover:text-accent">
            {product.title}
          </h3>
        </Link>
        <p className="text-2xl font-bold" style={{ color: 'hsl(var(--price-text))' }}>
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${product.id}`} className="w-full">
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
