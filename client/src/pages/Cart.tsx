import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { theme } = useTheme();

  if (items.length === 0) {
    return (
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
          Shopping Cart
        </h1>
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transition-colors">
          <div className="text-center text-gray-500 dark:text-gray-400 py-8 transition-colors">
            Your cart is empty
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
        Shopping Cart
      </h1>
      
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transition-colors">
        {/* Cart Items */}
        <div className="divide-y divide-gray-200 dark:divide-dark-DEFAULT">
          {items.map((item) => (
            <div key={item.id} className="py-6 flex animate-fade-in">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-200 dark:bg-dark-DEFAULT rounded-md overflow-hidden transition-colors">
                {/* Placeholder for product image */}
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-DEFAULT text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-paper transition-colors flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span className="text-gray-600 dark:text-gray-400 transition-colors">
                      {item.quantity}
                    </span>
                    <button
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-DEFAULT text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-paper transition-colors flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-sm mt-4">
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="font-medium text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 border-t border-gray-200 dark:border-dark-DEFAULT pt-8 transition-colors">
          <div className="flex justify-between text-base font-medium">
            <p className="text-gray-900 dark:text-white transition-colors">Subtotal</p>
            <p className="text-gray-900 dark:text-white transition-colors">${total.toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors">
            Shipping and taxes calculated at checkout.
          </p>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              className="w-full bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Checkout
            </button>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Continue Shopping
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;