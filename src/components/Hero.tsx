import { MessageCircle, ArrowDown } from 'lucide-react';

const QUOTE_MESSAGE = encodeURIComponent(
  "Hi Neelam Dyeing! I'd like to get a quote for fabric/saree dyeing. Please share details."
);

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 pt-6 pb-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 mb-5">
          <span className="text-xs font-semibold text-purple-700 tracking-wide uppercase">Since 1995 · Ahmedabad</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          Ahmedabad's Destination for
          <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Master Fabric &amp; Saree Dyeing
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Artisan craftsmanship in{' '}
          <span className="font-semibold text-purple-700">Bandhani</span>,{' '}
          <span className="font-semibold text-purple-700">Ombre Shaded</span>,{' '}
          <span className="font-semibold text-purple-700">Clamp</span> and{' '}
          <span className="font-semibold text-purple-700">3D Dyeing</span> — across{' '}
          <span className="font-semibold text-indigo-700">Pure Cotton</span>,{' '}
          <span className="font-semibold text-indigo-700">Chanderi</span> and{' '}
          <span className="font-semibold text-indigo-700">Silk</span> fabrics.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919876543210?text=${QUOTE_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-green-500 px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-green-200 transition-all hover:bg-green-600 hover:shadow-green-300 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2.5} />
            Instant WhatsApp Quote
          </a>
          <a
            href="#styles"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-purple-200 bg-white px-6 py-3.5 text-base font-bold text-purple-700 transition-all hover:border-purple-400 hover:bg-purple-50 active:scale-95"
          >
            Explore Dyeing Styles
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
