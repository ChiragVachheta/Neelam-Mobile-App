import { MapPin, Navigation, Clock } from 'lucide-react';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Vejalpur+Ahmedabad+Gujarat+India';

export default function FooterCard() {
  return (
    <footer className="px-4 sm:px-6 pb-10 pt-4">
      <div className="mx-auto max-w-3xl">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 shadow-lg shadow-purple-100/50 transition-all hover:shadow-xl hover:shadow-purple-200 active:scale-[0.99]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md">
              <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900">Visit Our Studio</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                Neelam Dyeing, Vejalpur, Ahmedabad, Gujarat, India
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5 text-green-500" strokeWidth={2.5} />
                <span className="font-medium">Open Now · Mon–Sat, 9 AM – 8 PM</span>
              </div>
            </div>
            <div className="flex-shrink-0 self-center inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-bold text-purple-700 shadow-sm border border-purple-100 transition-colors group-hover:bg-purple-600 group-hover:text-white">
              <Navigation className="w-3.5 h-3.5" strokeWidth={2.5} />
              Directions
            </div>
          </div>
        </a>

        <p className="mt-6 text-center text-xs text-gray-400">
          Neelam Dyeing · Master Fabric &amp; Saree Dyeing Studio · Ahmedabad
        </p>
      </div>
    </footer>
  );
}
