import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

// Mock products data (we'll replace this with real API data later)
const mockProducts = [
  { id: 1, name: "Wireless Headphones", price: 99.99, description: "High-quality wireless headphones with noise cancellation" },
  { id: 2, name: "Smart Watch", price: 199.99, description: "Feature-rich smartwatch with health tracking" },
  { id: 3, name: "Laptop Stand", price: 49.99, description: "Ergonomic laptop stand for better posture" },
  { id: 4, name: "Mechanical Keyboard", price: 129.99, description: "Professional mechanical keyboard with RGB lighting" },
  { id: 5, name: "Wireless Mouse", price: 79.99, description: "Precision wireless mouse for professionals" },
  { id: 6, name: "USB-C Hub", price: 59.99, description: "Multi-port USB-C hub for connectivity" },
];

const Products = () => {
  const { addItem } = useCart();
  const [notification, setNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addItem(product);
    setNotification(`Added ${product.name} to cart`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
        Our Products
      </h1>
      
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-slide-down">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array(6).fill(null).map((_, index) => (
              <div key={index} className="animate-pulse bg-white dark:bg-dark-card rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gray-200 dark:bg-dark-DEFAULT"></div>
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-dark-DEFAULT rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-dark-DEFAULT rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-dark-DEFAULT rounded w-1/2"></div>
                </div>
              </div>
            ))
          : products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white dark:bg-dark-card rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <div className="w-full h-48 bg-gray-200 dark:bg-dark-DEFAULT group-hover:opacity-75 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400 transition-colors">
                    {product.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400 transition-colors">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Products;