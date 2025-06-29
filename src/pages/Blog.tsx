import { useState } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  // Tag
} from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Admin",
    date: "February 28, 2020",
    category: "Family House",
    tags: ["Real Estate", "Market", "Investment"],
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Housing Markets That Changed the Most This Decade",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Admin",
    date: "February 28, 2020",
    category: "Housing",
    tags: ["Market Analysis", "Trends"],
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Redfin Unveils the Best Canadian Cities for Biking",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Admin",
    date: "February 28, 2020",
    category: "Town House",
    tags: ["Lifestyle", "Cities"],
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Why We Should All Support Clear Cooperation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Admin",
    date: "February 28, 2020",
    category: "Town House",
    tags: ["Cooperation", "Industry"],
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "12 Walkable Cities Where You Can Live Affordably",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/32489809/pexels-photo-32489809.jpeg",
    author: "Admin",
    date: "February 28, 2020",
    category: "Town House",
    tags: ["Affordable", "Cities", "Walkable"],
    readTime: "8 min read",
  },
  {
    id: "6",
    title: "You Can Buy The Piano Teacher's Home from Groundhog Day",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Full blog content here...",
    image:
      "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Admin",
    date: "February 28, 2020",
    category: "Town House",
    tags: ["Celebrity Homes", "Movies"],
    readTime: "3 min read",
  },
];

const categories = [
  "All",
  "Apartment",
  "Condo",
  "Family House",
  "Modern Villa",
  "Town House",
];
const tags = ["Apartment", "Estate", "Luxury", "Real", "Real Estate"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                <Link to="/" className="hover:text-primary-600">
                  Home
                </Link>
                <span>.</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span className="text-primary-600">{post.readTime}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center">
                  1
                </button>
                <button className="w-10 h-10 bg-white border text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50">
                  2
                </button>
                <button className="w-10 h-10 bg-white border text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50">
                  3
                </button>
                <span className="text-gray-500">...</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Search
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center justify-between w-full text-left py-2 px-3 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{category}</span>
                      <span className="text-sm text-gray-500">
                        (
                        {category === "All"
                          ? blogPosts.length
                          : blogPosts.filter((p) => p.category === category)
                              .length}
                        )
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Properties */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Latest Properties
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Diamond Manor...",
                    price: "$6500",
                    beds: 4,
                    baths: 2,
                    sqft: 140,
                    image:
                      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150",
                  },
                  {
                    title: "Eaton Garth Penthouse",
                    price: "$7500",
                    beds: 4,
                    baths: 1,
                    sqft: 220,
                    image:
                      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=150",
                  },
                  {
                    title: "Skyper Pool Apartment",
                    price: "$1200/mo",
                    beds: 3,
                    baths: 2,
                    sqft: 110,
                    image:
                      "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=150",
                  },
                ].map((property, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">
                        {property.title}
                      </h4>
                      <p className="text-sm text-primary-600 font-semibold mb-1">
                        {property.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        Beds: {property.beds} Baths: {property.baths} Sqft:{" "}
                        {property.sqft} sqft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
