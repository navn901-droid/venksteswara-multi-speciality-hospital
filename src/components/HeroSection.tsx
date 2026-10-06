import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { HospitalExteriorPhoto } from './HospitalPhotos';
import { trustStats, trustStrip } from '../data/hospitalData';

interface HeroProps {
  onBookAppointmentClick: () => void;
  onEmergencyClick: () => void;
  onOpenLightbox: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({
  onBookAppointmentClick,
  onEmergencyClick,
  onOpenLightbox,
}) => {
  return (
    <section id="home" className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-10 bg-gradient-to-b from-[#F3F7FA] via-[#F8FBFE] to-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Asymmetric Editorial Hero (Occupies the first viewport prominently) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Identity + Headline + Description + Two CTAs (7 cols ~58%) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            {/* Subtle Location Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1554B7]">
              <MapPin className="w-3.5 h-3.5 text-[#1554B7] flex-shrink-0" />
              <span>T.B.R. Plaza · Prakasam District, Andhra Pradesh</span>
            </div>

            {/* Hospital Identity */}
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0B3F8F] font-display">
              Venkateswara Multi Speciality Hospital
            </div>

            {/* Strong Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102A43] font-display tracking-tight leading-[1.14]">
              Comprehensive Clinical Care with Compassion & Trust
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#52677D] leading-relaxed max-w-xl font-normal">
              A modern multi-speciality hospital delivering ethical, advanced and affordable healthcare. Equipped with round-the-clock emergency casualty, experienced specialist doctors, modern surgical care, in-house pharmacy, and comprehensive diagnostics.
            </p>

            {/* Exactly Two CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookAppointmentClick}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#1554B7] hover:bg-[#0B3F8F] active:scale-[0.98] rounded-md shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={onEmergencyClick}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#E84B24] hover:bg-[#c93b18] active:scale-[0.98] rounded-md shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Emergency Support</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Actual Hospital Exterior Photograph (~42% visual area) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={onOpenLightbox}
              className="group relative w-full h-[320px] sm:h-[380px] lg:h-[430px] rounded-xl overflow-hidden border border-[#CBD5E1] bg-slate-100 cursor-pointer shadow-sm hover:border-[#1554B7]/60 transition-all"
              title="Click to view full photograph"
            >
              <HospitalExteriorPhoto className="w-full h-full" />

              {/* Dignified Architectural Caption Strip */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#082D52]/90 via-[#082D52]/40 to-transparent py-2.5 px-3.5 flex items-center justify-between text-white text-[11px]">
                <span className="font-medium tracking-wide truncate">
                  Venkateswara Multi Speciality Hospital · T.B.R Plaza
                </span>
                <span className="text-white/80 text-[10px] flex-shrink-0 ml-2">Tap to view</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip immediately below Hero */}
        <div className="mt-8 pt-6 border-t border-[#D9E7F4]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] font-display">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-[#1554B7] uppercase font-mono">
                    {stat.note}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#52677D] mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Horizontal Green Checkmark Trust Strip */}
          <div className="mt-6 pt-5 border-t border-[#D9E7F4]/80 flex flex-wrap items-center justify-between gap-y-2.5 gap-x-6 text-xs text-[#102A43]">
            {trustStrip.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E9B4B] flex-shrink-0" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
