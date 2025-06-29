import React, { useState } from "react";
import {
  Search,
  // MapPin, Home,
  ChevronDown,
} from "lucide-react";
import { useProperties } from "../../contexts/PropertyContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const [searchType, setSearchType] = useState("rent");
  const [searchForm, setSearchForm] = useState({
    keyword: "",
    propertyType: "",
    location: "",
    rooms: "",
  });
  const { updateSearchFilters } = useProperties();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const filters: any = {
      keyword: searchForm.keyword,
      location: searchForm.location,
    };

    if (searchForm.propertyType) {
      filters.propertyType = [searchForm.propertyType];
    }

    if (searchForm.rooms) {
      filters.beds = parseInt(searchForm.rooms);
    }

    updateSearchFilters(filters);
    navigate("/properties");
  };

  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-pink-400 via-red-400 to-purple-600 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-lg rotate-12"></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 left-1/4 w-16 h-16 border-2 border-white/20 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 border-2 border-white/15 rounded-full"></div>
        <div className="absolute top-1/3 left-10 w-12 h-12 bg-white/10 rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up font-light">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 animate-scale-in border border-white/20">
          {/* Search Type Tabs */}
          <div className="flex mb-8 bg-gray-100 rounded-2xl p-2 max-w-xs mx-auto">
            <button
              onClick={() => setSearchType("rent")}
              className={`flex-1 py-4 px-8 rounded-xl text-base font-semibold transition-all duration-300 ${
                searchType === "rent"
                  ? "bg-primary-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("hero.rent")}
            </button>
            <button
              onClick={() => setSearchType("sale")}
              className={`flex-1 py-4 px-8 rounded-xl text-base font-semibold transition-all duration-300 ${
                searchType === "sale"
                  ? "bg-primary-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("hero.sale")}
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-6 gap-4"
          >
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Enter Keyword..."
                value={searchForm.keyword}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    keyword: e.target.value,
                  }))
                }
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 bg-white/80"
              />
            </div>

            <div className="relative">
              <select
                value={searchForm.propertyType}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    propertyType: e.target.value,
                  }))
                }
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white/80 transition-all duration-300 text-lg"
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={searchForm.location}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white/80 transition-all duration-300 text-lg"
              >
                <option value="">Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="miami">Miami</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={searchForm.rooms}
                onChange={(e) =>
                  setSearchForm((prev) => ({ ...prev, rooms: e.target.value }))
                }
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white/80 transition-all duration-300 text-lg"
              >
                <option value="">Rooms</option>
                <option value="1">1+ Rooms</option>
                <option value="2">2+ Rooms</option>
                <option value="3">3+ Rooms</option>
                <option value="4">4+ Rooms</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 pointer-events-none" />
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-5 px-8 rounded-2xl hover:from-gray-900 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
              >
                <span>
                  <Search className="w-5 h-5" />
                </span>
                <span>{t("hero.search")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
