import React from 'react';
import { PhoneCall, MapPin, Clock } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import { HospitalEmergencyPhoto } from './HospitalPhotos';

export const EmergencySection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Authoritative Emergency Notification Band */}
        <div className="rounded-xl bg-[#082D52] text-white p-6 sm:p-8 md:p-9 border-l-4 border-l-[#E84B24] border border-[#CBD5E1] overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E84B24] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#E84B24] tracking-wider uppercase">
                  24/7 CASUALTY & ACCIDENT TRIAGE
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display leading-tight tracking-tight">
                Need urgent medical attention?
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                Our casualty desk operates round-the-clock on the Ground Floor of T.B.R Plaza for acute symptoms, road trauma, chest pain, and emergency attendance. Immediate triage by duty medical officers. No prior appointment required.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200/90 font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-300" />
                  <span>Open 24 Hours / 365 Days</span>
                </span>
                <span>Ground Floor Casualty Bay, T.B.R Plaza</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap gap-3">
                <a
                  href={`tel:${hospitalInfo.emergencyPhone}`}
                  className="w-full sm:w-auto py-2.5 px-5 text-xs sm:text-sm font-bold text-white bg-[#E84B24] hover:bg-[#c93b18] active:translate-y-0.5 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer text-center whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Casualty: {hospitalInfo.emergencyPhoneDisplay}</span>
                </a>

                <a
                  href={hospitalInfo.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 active:translate-y-0.5 rounded-md border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer text-center whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-orange-300" />
                  <span>Directions to T.B.R Plaza</span>
                </a>
              </div>
            </div>

            {/* Real Photographic Emergency Trauma Bay */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-white/20 shadow-md">
                <HospitalEmergencyPhoto className="w-full h-full" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-1.5 px-3 text-[10px] text-white/90">
                  Ground Floor Emergency Trauma Bay · Venkateswara Hospital
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
