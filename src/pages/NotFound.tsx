import { Link } from "react-router-dom";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-16 mt-12">
          <div className="relative">
            <div className="text-9xl font-bold text-primary-500 opacity-20">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-primary-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">404</h1>
                <p className="text-gray-600">Page Not Found</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable.
        </p>

        {/* Search Box */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="text-primary-600 pb-3 hover:text-primary-700 hover:border-primary-700 border-transparent border-b text-sm"
            >
              Properties
            </Link>
            <Link
              to="/agents"
              className="text-primary-600 pb-3 hover:text-primary-700 hover:border-primary-700 border-transparent border-b text-sm"
            >
              Agents
            </Link>
            <Link
              to="/blog"
              className="text-primary-600 pb-3 hover:text-primary-700 hover:border-primary-700 border-transparent border-b text-sm"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-primary-600 pb-3 hover:text-primary-700 hover:border-primary-700 border-transparent border-b text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
