import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HospitalCorridorPhoto } from './HospitalPhotos';
import { aboutValues } from '../data/hospitalData';

interface AboutProps {
  onLearnMoreClick?: () => void;
  onOpenLightbox?: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenLightbox, onLearnMoreClick }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Mirroring Reference Video Frame 00:10 - 00:12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Actual Hospital Corridor & Waiting Area Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div
              onClick={onOpenLightbox}
              className="group relative rounded-xl overflow-hidden border border-[#CBD5E1] bg-slate-100 cursor-pointer shadow-sm hover:border-[#1554B7]/60 transition-all"
            >
              <HospitalCorridorPhoto className="w-full h-[360px] sm:h-[440px]" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#082D52]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-xs px-3 py-1 rounded">
                  Inspect outpatient hallway & waiting area
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content & 2x2 Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
                ABOUT THE HOSPITAL
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
                Advanced medicine, delivered with warmth
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#52677D] leading-relaxed">
              Founded to provide dedicated, accessible healthcare for families in Prakasam district, Venkateswara Multi Speciality Hospital brings together experienced medical consultants, modern inpatient care and honest clinical advice under one roof at T.B.R Plaza. Our promise is simple: the right treatment, explained clearly, at a price families can afford.
            </p>

            {/* 4 Cards in 2x2 Grid (Mirroring Reference Video 00:11) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {aboutValues.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-[#D9E7F4] shadow-xs hover:border-[#1554B7]/40 transition-colors"
                >
                  <h3 className="text-sm font-bold text-[#102A43] font-display mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#52677D] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Button: Read our full story */}
            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="text-xs sm:text-sm font-bold text-[#1554B7] hover:text-[#0B3F8F] flex items-center gap-1.5 group cursor-pointer"
              >
                <span>Read our full story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
