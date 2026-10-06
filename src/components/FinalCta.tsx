import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

interface FinalCtaProps {
  onBookAppointmentClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onBookAppointmentClick }) => {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Mirroring Reference Video Banner 00:38 - 00:40 */}
        <div className="rounded-3xl bg-gradient-to-r from-[#082D52] via-[#0B3F8F] to-[#082D52] text-white p-8 sm:p-12 md:p-14 shadow-lg border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider font-display">
              WE CARE WITH COMPASSION
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white">
              Talk to a specialist today
            </h2>

            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              Book an appointment online in under a minute, or call our 24 × 7 helpline for emergencies and admissions.
            </p>
          </div>

          {/* Right Actions: White Book Appointment + Dark Emergency Call */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
            <button
              onClick={onBookAppointmentClick}
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-[#082D52] bg-white hover:bg-blue-50 active:scale-[0.98] rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-[#1554B7]" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] rounded-full border border-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#E84B24]" />
              <span>Emergency: {hospitalInfo.emergencyPhoneDisplay}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
