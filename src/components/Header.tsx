import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent/80">
            <ShoppingBag className="h-6 w-6 text-accent-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">ShopHub</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-base font-medium transition-colors ${
              isActive('/')
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </Link>
       <Link
  to="/login"
  className={`text-base font-medium transition-colors ${
    isActive('/login')
      ? 'text-accent'
      : 'text-muted-foreground hover:text-foreground'
  }`}
>
  Login
</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
