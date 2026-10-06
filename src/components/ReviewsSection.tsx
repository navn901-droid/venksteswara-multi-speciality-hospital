import React from 'react';
import { Quote, Star, ExternalLink } from 'lucide-react';
import { patientReviews, hospitalInfo } from '../data/hospitalData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 00:35) */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
            PATIENT STORIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
            Trusted by families across Prakasam
          </h2>
          <p className="text-sm text-[#52677D] mt-2">
            Reflections from families and patients who have experienced our clinical care and outpatient services.
          </p>
        </div>

        {/* 3 Review Cards Grid (Mirroring Reference Video 00:36) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patientReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 bg-white rounded-2xl border border-[#D9E7F4] shadow-xs flex flex-col justify-between hover:border-[#1554B7]/40 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#E7F1FB] text-[#1554B7] flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4" />
                </div>

                <p className="text-sm text-[#52677D] leading-relaxed mb-6 font-normal">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F7FD]">
                <h3 className="text-sm font-bold text-[#102A43] font-display">
                  {rev.name}
                </h3>
                <span className="text-xs text-[#52677D] block mb-2">
                  {rev.location}
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Band */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F1F7FD] border border-[#D9E7F4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-bold text-base">★★★★★</span>
            <div>
              <span className="text-sm font-bold text-[#102A43] font-display block">
                Google Reviews Integration Ready
              </span>
              <span className="text-xs text-[#52677D]">
                Ratings and reviews will link directly to verified Google Business Profile once published.
              </span>
            </div>
          </div>

          <a
            href={hospitalInfo.googleMapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-[#1554B7] bg-white hover:bg-slate-50 rounded-full border border-[#D9E7F4] flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
