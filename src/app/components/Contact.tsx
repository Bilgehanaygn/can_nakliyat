import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [
        { text: '0 312 372 14 09', hours: 'Pzt-Cmt: 08:00-21:00, Pazar: 08:00-21:00' },
        { text: '0 554 585 42 99', hours: 'Pzt-Cmt: 08:00-23:00, Pazar: 08:00-23:00' }
      ],
      link: 'tel:05545854299'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: [
        { text: 'denizcaanbolat0@gmail.com', hours: 'Her zaman ulaşabilirsiniz' }
      ],
      link: 'mailto:denizcaanbolat0@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: [
        { text: 'Şahintepe Mahallesi 670. sokak', hours: 'No:5/A Mamak/Ankara' },
        { text: 'Posta Kodu: 06320', hours: '' }
      ],
      link: 'https://maps.google.com/?q=Şahintepe+Mahallesi+670+sokak+No:5/A+Mamak+Ankara'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: [
        { text: 'Pazartesi - Cumartesi: 08:00-21:00', hours: '' },
        { text: 'Pazar: 08:00-21:00', hours: '' }
      ],
      link: '#'
    }
  ];

   return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">İletişim</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ücretsiz fiyat teklifi almak veya sorularınız için bize ulaşın. Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bize Yazın</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    placeholder="0555 555 55 55"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Hizmet Türü
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Seçiniz (opsiyonel)</option>
                  <optgroup label="Bireysel Hizmetler">
                    <option value="evden-eve">Evden Eve Nakliyat</option>
                    <option value="asansorlu">Asansörlü Nakliyat</option>
                    <option value="sehirici">Şehiriçi Nakliyat</option>
                    <option value="sehirlerarasi">Şehirlerarası Nakliyat</option>
                    <option value="depolama">Eşya Depolama</option>
                    <option value="parca">Parça Eşya Taşıma</option>
                    <option value="kurum">Kurum Taşıma</option>
                  </optgroup>
                  <optgroup label="Kurumsal Hizmetler">
                    <option value="sigortali">Sigortalı Nakliyat</option>
                    <option value="ofis">Ofis Nakliyesi</option>
                    <option value="isyeri">İşyeri Taşımacılığı</option>
                    <option value="hastane">Hastane Taşımacılığı</option>
                    <option value="fabrika">Fabrika Nakliyesi</option>
                    <option value="banka">Banka Taşımacılığı</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl hover:bg-yellow-600 transition-all hover:shadow-lg flex items-center justify-center gap-2 font-medium text-lg"
              >
                Mesaj Gönder
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-all group"
              >
                <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors">
                  <info.icon className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="mb-1">
                      <p className="text-gray-800 font-medium">{detail.text}</p>
                      {detail.hours && <p className="text-sm text-gray-500">{detail.hours}</p>}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.162042195743!2d32.91090247624208!3d39.915389771524424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351c442d54ca3%3A0x225feb4e51c76554!2zxZ5haGludGVwZSwgNjcwLiBTay4gTm86NS9BLCAwNjQ3MCBNYW1hay9BbmthcmEsIFTDvHJraXll!5e0!3m2!1sen!2sus!4v1770211449138!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Can Nakliyat Ankara Konum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}