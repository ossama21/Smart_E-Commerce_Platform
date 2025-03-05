import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const { items } = useCart();
  const { theme, toggleTheme } = useTheme();
  
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-DEFAULT text-gray-900 dark:text-dark-primary transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-dark-paper shadow-sm border-b border-gray-200 dark:border-dark-DEFAULT transition-colors duration-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Smart Shop
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActivePath('/') 
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActivePath('/products')
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                  isActivePath('/cart')
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-primary-600 dark:bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-colors">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-paper transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-paper border-t border-gray-200 dark:border-dark-DEFAULT mt-auto transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 dark:text-dark-secondary text-sm">
            © 2024 Smart Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;