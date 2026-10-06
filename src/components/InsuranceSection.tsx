import React, { useState } from 'react';
import { Search, ShieldCheck, PhoneCall } from 'lucide-react';
import { insurersList, hospitalInfo } from '../data/hospitalData';

export const InsuranceSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInsurers = insurersList.filter((ins) =>
    ins.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="insurance" className="py-16 md:py-24 bg-[#F8FAFD] border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 00:33) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
              CASHLESS INSURANCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
              Cashless insurance & TPAs accepted
            </h2>
            <p className="text-xs sm:text-sm text-[#52677D] mt-2 leading-relaxed">
              Cashless admission support is available for major insurance companies and TPAs. For pre-authorisation assistance, call {hospitalInfo.emergencyPhoneDisplay}.
            </p>
          </div>

          {/* Search Input Bar (Mirroring Reference Video 00:34) */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#52677D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your insurer or TPA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D9E7F4] rounded-full text-xs text-[#102A43] focus:outline-none focus:border-[#1554B7] shadow-xs"
            />
          </div>
        </div>

        {/* Insurers Grid (Mirroring Reference Video 00:33 - 00:34) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredInsurers.map((ins) => (
            <div
              key={ins.id}
              className="p-5 bg-white rounded-2xl border border-[#D9E7F4] shadow-xs flex flex-col justify-between hover:border-[#1554B7]/40 transition-colors"
            >
              <div>
                <h3 className="text-sm font-bold text-[#102A43] font-display mb-1">
                  {ins.name}
                </h3>
                <span className="text-[11px] text-[#52677D]">
                  {ins.type}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F1F7FD] flex items-center gap-1.5 text-[11px] font-semibold text-[#2E9B4B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E9B4B]" />
                <span>{ins.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredInsurers.length === 0 && (
          <div className="p-8 text-center text-xs text-[#52677D] bg-white rounded-2xl border border-[#D9E7F4]">
            No insurer found matching "{searchQuery}". Please contact our billing desk directly at {hospitalInfo.receptionPhone}.
          </div>
        )}

        {/* Demo Disclaimer notice */}
        <div className="mt-6 text-[11px] text-[#52677D] text-center font-mono">
          *PROTOTYPE DEMO: Sample insurer list for layout presentation. Final website will display Venkateswara Multi Speciality Hospital’s verified empanelled insurers.
        </div>

      </div>
    </section>
  );
};
