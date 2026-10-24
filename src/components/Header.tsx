import { Phone, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-200">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">Neelam Dyeing</h1>
            <p className="text-[11px] text-purple-500 font-medium -mt-0.5">Fabric &amp; Saree Dyeing Studio</p>
          </div>
        </div>

        <a
          href="tel:+919876543210"
          className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-all hover:bg-pink-600 hover:shadow-pink-300 active:scale-95"
        >
          <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" strokeWidth={2.5} />
          <span>Call Us</span>
        </a>
      </div>
    </header>
  );
}
