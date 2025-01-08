"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import SearchBar from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { searchProducts } from "@/Api";
import MegaMenu from "./mega.menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async (query) => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const results = await searchProducts(query);
      setSearchResults(results || []);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchResults([]);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={400}
              height={100}
              className="w-auto h-20 md:h-28"
              priority
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-grow max-w-xl relative">
            <SearchBar onSearch={handleSearch} />
            <SearchResults
              results={searchResults}
              onProductClick={clearSearch}
            />
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:+918800199820"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 8800199820</span>
            </a>
            <a
              href="https://wa.me/918800199820"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg  transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section - Navigation */}
      <div className="border-t bg-orange-500">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-8 py-2">
              <li>
                <Link
                  href="/"
                  className="py-2 px-4 hover:text-gray-100 transition-colors text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="py-2 px-4 hover:text-gray-100 transition-colors text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <MegaMenu isMobile={false} />
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-2 px-4 hover:text-gray-100 transition-colors text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="border-t">
          {/* Mobile Search */}
          <div className="p-4 border-b relative">
            <SearchBar onSearch={handleSearch} />
            <SearchResults
              results={searchResults}
              onProductClick={clearSearch}
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="py-2">
            <ul className="space-y-2">
              <li className="border-b">
                <Link
                  href="/"
                  className="block px-4 py-2 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="border-b">
                <MegaMenu isMobile={true} />
              </li>
              <li className="border-b">
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Contact Buttons */}
          <div className="p-4 space-y-4 border-t">
            <a
              href="tel:+918800199820"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 8800199820</span>
            </a>
            <a
              href="https://wa.me/918800199820"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
