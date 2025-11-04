import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
}

const FilterBar = ({ categories }: FilterBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="mb-8 animate-fade-in">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filter by Category</h2>
        {selectedCategory !== 'all' && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="mr-1 h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 ${
            selectedCategory === 'all'
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'hover:bg-secondary'
          }`}
          onClick={() => handleCategoryChange('all')}
        >
          All Products
        </Badge>
        
        {categories.map(category => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`cursor-pointer px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                : 'hover:bg-secondary'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
