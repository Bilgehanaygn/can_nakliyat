import { X } from 'lucide-react';
import { useState } from 'react';
import image1 from '../../assets/b85ccadda6045fa673555ba07f550f2160f1f7eb.png';
import image2 from '../../assets/4f897671c3620a2093a7661b2ffd24acd9edc373.png';
import image3 from '../../assets/a3c828063eaf33804b053baff6bce3424ccda797.png';
import image4 from '../../assets/87cf76d868d9ab07c01b634ccb8c5119112b16bd.png';
import image5 from '../../assets/3ecc3c9b02933a53bdaf979959eff2e97f889fea.png';
import image6 from '../../assets/0f18c518c28a1bf2ec403d6b4b98e15c8f18ddf1.png';
import image7 from '../../assets/image7.jpeg';
import image8 from '../../assets/image8.jpeg';
import image9 from '../../assets/image9.png';
import image10 from '../../assets/image10.png';
import image11 from '../../assets/image11.png';
const galleryImages = [
  {
    src: image1,
    alt: 'Can Nakliyat - Profesyonel Taşımacılık Hizmeti',
    title: 'Profesyonel Hizmet'
  },
  {
    src: image2,
    alt: 'Can Nakliyat Araç Filosu',
    title: 'Modern Araç Filosu'
  },
  {
    src: image3,
    alt: 'Asansörlü Nakliyat Hizmeti',
    title: 'Asansörlü Taşımacılık'
  },
  {
    src: image4,
    alt: 'Can Nakliyat İşbaşında',
    title: 'Profesyonel Ekip'
  },
  {
    src: image5,
    alt: 'Vinçli Nakliyat Aracı',
    title: 'Özel Ekipman'
  },
  {
    src: image6,
    alt: 'Koltuk Takımı Paketleme',
    title: 'Özenli Paketleme'
  },
  {
    src: image7,
    alt: 'Genel',
    title: 'Güvenli taşımacılık'
  },
  {
    src: image8,
    alt: 'Genel',
    title: 'Güvenli taşımacılık'
  },
  {
    src: image9,
    alt: 'Genel',
    title: 'Güvenli taşımacılık'
  },
  {
    src: image10,
    alt: 'Genel',
    title: 'Güvenli taşımacılık'
  },
  {
    src: image11,
    alt: 'Genel',
    title: 'Güvenli taşımacılık'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Galeri</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Çalışmalarımızdan Kareler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel nakliyat hizmetlerimiz ve modern araç filomuzdan görüntüler
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-12 text-center text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Siz de Bizimle Çalışın</h2>
          <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz ve modern araç filomuzla güvenli taşımacılık hizmeti için bize ulaşın
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-lg"
            >
              Bize Yazın
            </a>
            <a
              href="tel:05545854299"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium text-lg"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-semibold text-xl text-center">
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors"
            >
              ← Önceki
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors"
            >
              Sonraki →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}