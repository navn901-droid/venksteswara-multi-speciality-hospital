import React from 'react';
import {
  ShieldAlert,
  Building2,
  Users,
  BedDouble,
  FlaskConical,
  Pill,
  Activity,
  Home,
  ShieldCheck,
  Ambulance,
  Accessibility,
  ArrowUpDown,
} from 'lucide-react';
import { darkFacilities } from '../data/hospitalData';

interface FacilitiesSectionProps {
  onBookAppointment: () => void;
}

export const DarkServicesSection: React.FC<FacilitiesSectionProps> = ({ onBookAppointment }) => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    Building2,
    Users,
    BedDouble,
    FlaskConical,
    Pill,
    Activity,
    Home,
    ShieldCheck,
    Ambulance,
    Accessibility,
    ArrowUpDown,
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#082D52] text-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 00:27 - 00:28) */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-blue-300 tracking-wider uppercase font-display">
            FACILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
            Everything a serious hospital needs, on one campus
          </h2>
          <p className="text-sm sm:text-base text-blue-100/80 mt-3 leading-relaxed">
            Round-the-clock casualty with rapid triage and on-call specialists, dedicated in-house pharmacy, and comfortable recovery wards.
          </p>
        </div>

        {/* 4-Column Grid of Dark Cards (Mirroring Reference Video 00:28 - 00:32) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {darkFacilities.map((fac) => {
            const Icon = iconMap[fac.iconName] || Building2;
            return (
              <div
                key={fac.id}
                className="p-6 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-1.5">
                    {fac.title}
                  </h3>

                  <p className="text-xs text-blue-100/70 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-blue-100/80 text-center sm:text-left">
            <span className="font-bold text-white">Need hospital admission or casualty support?</span> Our casualty desk operates round-the-clock on the ground floor of T.B.R Plaza.
          </div>
          <button
            onClick={onBookAppointment}
            className="px-6 py-2.5 text-xs font-bold text-[#082D52] bg-white hover:bg-blue-50 rounded-full transition-colors whitespace-nowrap cursor-pointer"
          >
            Inquire Admission / OP
          </button>
        </div>

      </div>
    </section>
  );
};
