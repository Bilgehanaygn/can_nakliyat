import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import aboutImage1 from '../../assets/9ed2f01cf2c51138471788ebcba03e71ad6d2adb.png';
import aboutImage2 from '../../assets/a9f27226dc3e1476a2c414b420f35e68296fc5e0.png';

export function About() {
  const stats = [
    { number: '25+', label: 'Yıl Tecrübe' },
    { number: '10,000+', label: 'Mutlu Müşteri' },
    { number: '50+', label: 'Profesyonel Ekip' },
    { number: '100%', label: 'Memnuniyet' }
  ];

  const features = [
    'Sigortalı ve güvenli taşımacılık',
    'Profesyonel paketleme malzemeleri',
    'Deneyimli ve eğitimli personel',
    'Modern ve bakımlı araç filosu',
    'Şeffaf ve uygun fiyatlandırma',
    'Müşteri memnuniyeti odaklı hizmet'
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={aboutImage1}
                    alt="Can Nakliyat Asansörlü Taşımacılık"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-yellow-500 rounded-2xl p-6 text-gray-900">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-yellow-900 mt-1">Yıllık Deneyim</div>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={aboutImage2}
                    alt="Can Nakliyat Araç Filosu"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Hakkımızda</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                Ankara'nın En Güvenilir Nakliyat Firması
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                2004 yılından bu yana Ankara ve çevresinde kaliteli nakliyat hizmeti sunuyoruz. 
                Müşteri memnuniyetini ön planda tutarak, her taşımayı kendi eşyamızmış gibi özenle gerçekleştiriyoruz.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}