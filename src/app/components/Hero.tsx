import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImage from '../../assets/4f897671c3620a2093a7661b2ffd24acd9edc373.png';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Ankara'nın Güvenilir Nakliyat Firması
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Eşyalarınız
              <span className="text-blue-600"> Güvenli Ellerde</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              20 yıllık tecrübemiz ile ev, ofis ve kurumsal taşımacılık hizmetlerinde yanınızdayız. Profesyonel ekibimiz ve modern araç filomuzla güvenli taşımacılık garantisi sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg flex items-center gap-2 font-medium text-lg"
              >
                Bize Yazın
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+903121234567" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all font-medium text-lg"
              >
                Hemen Arayın
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Sigortalı Taşıma</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">7/24 Hizmet</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">20 Yıl Tecrübe</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroImage}
                alt="Moving truck and relocation services"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-10 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}