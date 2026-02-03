import { Home, Building2, Package, Warehouse, Truck, Users, Shield, Building, Factory, Hospital, Landmark } from 'lucide-react';

const individualServices = [
  {
    icon: Home,
    title: 'Evden Eve Nakliyat',
    description: 'Evinizden yeni evinize profesyonel ve güvenli taşımacılık hizmeti. Eşyalarınızı özenle paketliyor ve hasarsız teslim ediyoruz.',
    features: ['Profesyonel Paketleme', 'Sigortalı Taşıma', 'Mobilya Montaj-Demontaj']
  },
  {
    icon: Building2,
    title: 'Asansörlü Nakliyat',
    description: 'Yüksek katlı binalarda asansörlü nakliyat hizmeti ile hızlı ve güvenli taşımacılık. Modern ekipmanlarımızla zamandan tasarruf edin.',
    features: ['Hızlı Taşıma', 'Güvenli Sistem', 'Profesyonel Ekip']
  },
  {
    icon: Truck,
    title: 'Şehiriçi Nakliyat',
    description: 'Ankara içinde hızlı ve ekonomik taşımacılık hizmeti. Aynı gün teslimat imkanı ile yanınızdayız.',
    features: ['Aynı Gün Teslimat', 'Uygun Fiyat', 'Esnek Saatler']
  },
  {
    icon: Package,
    title: 'Şehirlerarası Nakliyat',
    description: 'Türkiye\'nin her yerine güvenli ve sigortalı taşımacılık. Kapıdan kapıya profesyonel hizmet.',
    features: ['Tüm Türkiye', 'Sigortalı Taşıma', 'Takip Sistemi']
  },
  {
    icon: Warehouse,
    title: 'Eşya Depolama',
    description: 'Güvenli ve temiz depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz. 7/24 güvenlik ve klimalı ortam.',
    features: ['Güvenli Depo', 'Esnek Süreler', 'Uygun Fiyatlar']
  },
  {
    icon: Package,
    title: 'Parça Eşya Taşıma',
    description: 'Tek parça veya birkaç parça eşya taşımacılığı için ekonomik çözümler. Küçük taşınmalar için ideal.',
    features: ['Ekonomik Fiyat', 'Hızlı Teslimat', 'Güvenli Taşıma']
  }
];

const corporateServices = [
  {
    icon: Shield,
    title: 'Sigortalı Nakliyat',
    description: 'Tüm eşyalarınız için tam kapsamlı sigorta garantisi. Gönül rahatlığı ile taşıyın.',
    features: ['Tam Kapsamlı Sigorta', 'Hasar Garantisi', 'Hızlı Hasar Takibi']
  },
  {
    icon: Building,
    title: 'Ofis Nakliyesi',
    description: 'İş yerinizi minimum aksama ile yeni adresinize taşıyoruz. Profesyonel kurumsal çözümler.',
    features: ['Planlı Taşıma', 'IT Ekipman Desteği', 'Gece Taşıma Seçeneği']
  },
  {
    icon: Users,
    title: 'İşyeri Taşımacılığı',
    description: 'Her türlü işyeri ve ticari alan taşımacılığı. Deneyimli ekibimizle hızlı ve güvenli hizmet.',
    features: ['Hızlı Montaj', 'Özel Ekipman', 'Esnek Planlama']
  },
  {
    icon: Hospital,
    title: 'Hastane Taşımacılığı',
    description: 'Hassas tıbbi cihazların ve ekipmanların özenli taşınması. Uzman ekip ve özel araçlarla hizmet.',
    features: ['Hassas Ekipman', 'Özel Paketleme', 'Deneyimli Ekip']
  },
  {
    icon: Factory,
    title: 'Fabrika Nakliyesi',
    description: 'Endüstriyel taşımacılık ve fabrika taşınma işlemleri. Ağır yük ve makine taşıma uzmanlığı.',
    features: ['Ağır Yük Taşıma', 'Özel Ekipman', 'Profesyonel Montaj']
  },
  {
    icon: Landmark,
    title: 'Banka Taşımacılığı',
    description: 'Bankalar ve finans kurumları için özel güvenlik protokollü taşımacılık hizmeti.',
    features: ['Yüksek Güvenlik', 'Gizlilik Garantisi', 'Sigortalı Taşıma']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Hizmetlerimiz</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bireysel ve kurumsal tüm nakliyat ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
          </p>
        </div>

        {/* Individual Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bireysel Hizmetler</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Services */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kurumsal Hizmetler</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}