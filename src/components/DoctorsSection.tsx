import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Doctor, doctors } from '../data/hospitalData';

interface DoctorsProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookAppointmentWithDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsProps> = ({
  onSelectDoctor,
  onBookAppointmentWithDoctor,
}) => {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 00:20) */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
            OUR CONSULTANTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
            Meet the doctors who care for you
          </h2>
          <p className="text-sm sm:text-base text-[#52677D] mt-2 leading-relaxed">
            Experienced specialists supported by intensive care, modern theatres and in-house diagnostics.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F1F7FD] border border-[#D9E7F4] text-[11px] text-[#0B3F8F]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1554B7]" />
            <span>Prototype Demo: Showing sample consultant profiles for layout demonstration.</span>
          </div>
        </div>

        {/* 3-Column Doctor Cards Grid (Mirroring Reference Video 00:21 - 00:26) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-[#D9E7F4] overflow-hidden shadow-xs hover:shadow-[0_16px_36px_rgba(8,45,82,0.10)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Image */}
                <div
                  onClick={() => onSelectDoctor(doc)}
                  className="relative h-64 sm:h-72 w-full bg-[#EBF4FA] overflow-hidden cursor-pointer"
                >
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        doc.name.toLowerCase().includes('priya')
                          ? 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
                          : doc.name.toLowerCase().includes('arun')
                          ? 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
                          : 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1554B7] shadow-sm">
                    {doc.experienceBadge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#102A43] font-display">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0B3F8F] mt-0.5 font-mono">
                    {doc.qualification}
                  </p>
                  <p className="text-xs text-[#52677D] mt-1 font-medium">
                    {doc.designation}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Read More + Book Appointment (Mirroring Reference Video 00:23) */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="py-2.5 px-3 text-xs font-bold text-[#102A43] bg-white hover:bg-[#F1F7FD] rounded-lg border border-[#D9E7F4] transition-colors text-center cursor-pointer"
                >
                  Read More
                </button>
                <button
                  onClick={() => onBookAppointmentWithDoctor(doc)}
                  className="py-2.5 px-3 text-xs font-bold text-white bg-[#1554B7] hover:bg-[#0B3F8F] rounded-lg transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
