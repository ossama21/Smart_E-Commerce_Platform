import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div ref={heroRef} className="text-center opacity-0">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
          Welcome to Smart Shop
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors">
          Your one-stop shop for smart shopping experiences, powered by AI and designed for the modern consumer.
        </p>
        <Link
          to="/products"
          className="inline-block bg-primary-600 dark:bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
        >
          Start Shopping
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
            Smart Recommendations
          </h3>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Personalized product suggestions powered by advanced AI algorithms
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
          <div className="text-4xl mb-4">🛍️</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
            Easy Shopping
          </h3>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Streamlined checkout process and intuitive user experience
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
            24/7 Support
          </h3>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            AI-powered chatbot for instant assistance anytime
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10k+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5k+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">99%</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;