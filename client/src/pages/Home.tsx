const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Smart Shop
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop shop for smart shopping experiences
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Feature Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Recommendations</h3>
          <p className="text-gray-600">Personalized product suggestions powered by AI</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Shopping</h3>
          <p className="text-gray-600">Streamlined checkout process and user experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
          <p className="text-gray-600">AI-powered chatbot for instant assistance</p>
        </div>
      </div>
    </div>
  )
}

export default Home