import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, User, Menu, X, ChevronDown, Plus, Phone } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Common/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t("nav.home"), path: "/", hasDropdown: false },
    { name: t("nav.properties"), path: "/properties", hasDropdown: false },
    { name: t("nav.members"), path: "/members", hasDropdown: true },
    { name: t("nav.pages"), path: "/about", hasDropdown: true },
    { name: t("nav.contact"), path: "/contact", hasDropdown: false },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const canSubmitProperty =
    user && (user.role === "agent" || user.role === "admin");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Majoro CareAct Ltd"
              className="h-10 w-auto rounded-full"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />

            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-600">MAJORO</span>
              <span className="text-xs text-gray-600">CAREACT Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.name === t("nav.properties") && (
                        <>
                          <Link
                            to="/properties/grid"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Grid View
                          </Link>
                          <Link
                            to="/properties/list"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            List View
                          </Link>
                          <Link
                            to="/properties/map"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Map View
                          </Link>
                          <Link
                            to="/saved-searches"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Saved Searches
                          </Link>
                        </>
                      )}
                      {item.name === t("nav.members") && (
                        <>
                          <Link
                            to="/agents"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Agents
                          </Link>
                          <Link
                            to="/agencies"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Agencies
                          </Link>
                        </>
                      )}
                      {item.name === t("nav.pages") && (
                        <>
                          <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/blog"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            Blog
                          </Link>
                          <Link
                            to="/faq"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            FAQ
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/favorites"
                  className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </Link>

                {canSubmitProperty ? (
                  <Link
                    to="/submit-property"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t("nav.submitProperty")}</span>
                  </Link>
                ) : (
                  <a
                    href="tel:+250788289936"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t("nav.callUs")}</span>
                  </a>
                )}

                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full w-48 bg-white rounded-lg shadow-lg border mt-1">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/saved-searches"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Saved Searches
                        </Link>
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>
                    {t("nav.login")} / {t("nav.register")}
                  </span>
                </Link>
                <a
                  href="tel:+250788289936"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("nav.callUs")}</span>
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t pt-2 mt-2">
              {user ? (
                <div className="space-y-1">
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/favorites"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Favorites
                  </Link>
                  <Link
                    to="/saved-searches"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Saved Searches
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.login")} / {t("nav.register")}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
