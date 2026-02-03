import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Can Nakliyat</h3>
            <p className="text-gray-400 leading-relaxed">
              Ankara'nın en güvenilir nakliyat firması. 20 yıllık tecrübemiz ile hizmetinizdeyiz.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/cannakliyat1/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Hizmetlerimiz</a></li>
              <li><a href="/#about" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
              <li><Link to="/galeri" className="hover:text-blue-400 transition-colors">Galeri</Link></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">İletişim</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">Bize Yazın</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Evden Eve Nakliyat</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Asansörlü Nakliyat</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Ofis Nakliyesi</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Eşya Depolama</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Şehirlerarası Nakliyat</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03123721409" className="hover:text-blue-400 transition-colors block">
                    0 312 372 14 09
                  </a>
                  <a href="tel:05545854299" className="hover:text-blue-400 transition-colors block text-sm">
                    0 554 585 42 99
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:denizcaanbolat0@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                  denizcaanbolat0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Şahintepe Mahallesi 670. sokak<br />No:5/A Mamak/Ankara<br />Posta Kodu: 06320</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Can Nakliyat Ankara. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kullanım Şartları</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}