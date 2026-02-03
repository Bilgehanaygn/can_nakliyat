import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:03123721409" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                <Phone className="w-4 h-4" />
                <span>0 312 372 14 09</span>
              </a>
              <a href="mailto:denizcaanbolat0@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-blue-100 transition-colors">
                <Mail className="w-4 h-4" />
                <span>denizcaanbolat0@gmail.com</span>
              </a>
            </div>
            <div className="text-sm">
              Pazartesi - Cumartesi: 08:00-21:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Can Nakliyat</h1>
            <span className="ml-2 text-gray-500 text-sm hidden sm:inline">Ankara</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Ana Sayfa</Link>
            <a href={isHome ? "#services" : "/#services"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Hizmetler</a>
            <a href={isHome ? "#about" : "/#about"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Hakkımızda</a>
            <Link to="/galeri" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Galeri</Link>
            <a href={isHome ? "#contact" : "/#contact"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">İletişim</a>
            <a href={isHome ? "#contact" : "/#contact"} className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Bize Yazın
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Ana Sayfa</Link>
              <a href={isHome ? "#services" : "/#services"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Hizmetler</a>
              <a href={isHome ? "#about" : "/#about"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Hakkımızda</a>
              <Link to="/galeri" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Galeri</Link>
              <a href={isHome ? "#contact" : "/#contact"} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">İletişim</a>
              <a href={isHome ? "#contact" : "/#contact"} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center">
                Bize Yazın
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}