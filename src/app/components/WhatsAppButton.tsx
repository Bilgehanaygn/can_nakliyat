import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '905545854299'; // WhatsApp format (country code + number without +)
  const message = 'Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp ile yazın
      </span>
    </a>
  );
}
