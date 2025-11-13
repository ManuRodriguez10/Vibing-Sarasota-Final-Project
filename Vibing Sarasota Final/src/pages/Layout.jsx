
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, MapPin, Phone, Mail, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "Beaches", url: createPageUrl("Beaches") },
    { name: "Exercise Spots", url: createPageUrl("ExerciseSpots") },
    { name: "Food & Dining", url: createPageUrl("FoodDining") },
    { name: "Golf Spots", url: createPageUrl("GolfSpots") },
    { name: "Shopping", url: createPageUrl("Shopping") },
    { name: "Hotels", url: createPageUrl("Hotels") },
    { name: "Suggest a Spot", url: createPageUrl("SuggestBusiness"), highlight: true },
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        :root {
          --ocean-blue: #0D7FA6;
          --sand-beige: #F4EDE4;
          --sunset-coral: #FF6B6B;
          --deep-navy: #1A2332;
          --soft-sky: #87CEEB;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--ocean-blue)] to-[var(--soft-sky)] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--ocean-blue)] to-[var(--deep-navy)] bg-clip-text text-transparent">
                  Vibing Sarasota
                </h1>
                <p className="text-xs text-gray-500 tracking-wide">Your Guide to Paradise</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    link.highlight
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 shadow-md"
                      : isActive(link.url)
                      ? "bg-[var(--ocean-blue)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.highlight && <Lightbulb className="w-4 h-4 inline mr-1" />}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    link.highlight
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                      : isActive(link.url)
                      ? "bg-[var(--ocean-blue)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.highlight && <Lightbulb className="w-4 h-4 inline mr-1" />}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--deep-navy)] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vibing Sarasota</h3>
              <p className="text-gray-300 leading-relaxed">
                Your comprehensive guide to the best local businesses in Sarasota, Florida. 
                Discover hidden gems and local favorites.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Sarasota, Florida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(941) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@vibingsarasota.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vibing Sarasota. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
