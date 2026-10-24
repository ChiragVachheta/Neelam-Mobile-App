import { Layers, Sunset, Grid3x3, Box } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
}

const services: Service[] = [
  {
    title: 'Bandhani',
    description: 'Traditional tie-and-dye dot patterns, hand-knotted by master artisans.',
    icon: Layers,
    gradient: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Ombre Shaded',
    description: 'Seamless gradient colour transitions for a soft, flowing finish.',
    icon: Sunset,
    gradient: 'from-pink-500 to-rose-400',
    iconBg: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Clamp & Block',
    description: 'Geometric resist designs using wooden blocks and clamp techniques.',
    icon: Grid3x3,
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: '3D Dyeing',
    description: 'Contemporary textured dyeing with layered, dimensional effects.',
    icon: Box,
    gradient: 'from-fuchsia-500 to-purple-500',
    iconBg: 'bg-fuchsia-100 text-fuchsia-600',
  },
];

export default function ServicesGrid() {
  return (
    <section id="styles" className="px-4 sm:px-6 py-12 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2">Our Craft</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Dyeing Styles We Master</h3>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">Four signature techniques, infinite colour possibilities.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" strokeWidth={2.25} />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
