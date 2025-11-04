import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';
import { Loader2 } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : 'https://fakestoreapi.com/products';
        
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-40 pt-4">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 animate-slide-up">
          <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
            Shop Our Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing products at great prices
          </p>
        </header>

        <FilterBar categories={categories} />

        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="mb-4 text-6xl">📦</div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
