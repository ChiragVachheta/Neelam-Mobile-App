import { MapPin } from 'lucide-react';

export default function StatusBadge() {
  return (
    <div className="flex justify-center pt-8 pb-2 px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
        </span>
        <span className="text-sm font-semibold text-green-700">Open Now</span>
        <span className="text-green-300">|</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
          <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
          Vejalpur, Ahmedabad
        </span>
      </div>
    </div>
  );
}
