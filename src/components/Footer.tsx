import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { hospitalInfo, departments } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061F39] text-white/80 pt-16 pb-24 md:pb-14 border-t border-[#0B3F8F]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Mirroring Reference Video Footer 00:41 - 00:49 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <HospitalLogo variant="footer" size="md" />

            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-blue-200 font-semibold font-display">
              {hospitalInfo.tagline}
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed pr-4">
              One of Prakasam’s dedicated multi-speciality healthcare centres delivering ethical, advanced and affordable healthcare with patient-first clinical dedication.
            </p>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-xs font-bold"
              >
                ig
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-xs font-bold"
              >
                yt
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Hospital</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Departments</a></li>
              <li><a href="#insurance" className="hover:text-white transition-colors">Cashless Insurance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              DEPARTMENTS
            </h3>
            <ul className="space-y-2 text-xs">
              {departments.slice(0, 7).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="hover:text-white transition-colors">
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Us with Big 24x7 Callout (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              REACH US
            </h3>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{hospitalInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="font-mono">{hospitalInfo.receptionPhone} (Landline)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span>{hospitalInfo.email}</span>
              </div>
            </div>

            {/* Big Emergency 24x7 Block (Mirroring Reference Video 00:44) */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-orange-400 block tracking-wider uppercase">
                EMERGENCY 24 × 7
              </span>
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="text-xl sm:text-2xl font-extrabold text-white font-mono hover:text-orange-300 transition-colors block mt-0.5"
              >
                {hospitalInfo.emergencyPhoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Designer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Venkateswara Multi Speciality Hospital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-white/70">
              Website concept by <span className="text-white font-semibold">KYRAO Web Solutions</span>
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
