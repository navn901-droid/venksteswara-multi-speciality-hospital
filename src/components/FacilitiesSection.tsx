import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { FacilityPhoto, galleryPhotos } from '../data/hospitalData';
import {
  HospitalExteriorPhoto,
  HospitalCorridorPhoto,
  HospitalWardPhoto,
  HospitalPharmacyPhoto,
  HospitalLabPhoto,
  HospitalEmergencyPhoto,
} from './HospitalPhotos';

interface GalleryProps {
  onOpenLightbox: (photo: FacilityPhoto) => void;
}

export const FacilitiesSection: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Hospital' | 'Facilities'>('All');

  const filteredPhotos = galleryPhotos.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const renderPhoto = (componentType: string) => {
    switch (componentType) {
      case 'exterior':
        return <HospitalExteriorPhoto className="w-full h-full" />;
      case 'corridor':
        return <HospitalCorridorPhoto className="w-full h-full" />;
      case 'ward':
        return <HospitalWardPhoto className="w-full h-full" />;
      case 'pharmacy':
        return <HospitalPharmacyPhoto className="w-full h-full" />;
      case 'laboratory':
        return <HospitalLabPhoto className="w-full h-full" />;
      case 'emergency':
        return <HospitalEmergencyPhoto className="w-full h-full" />;
      default:
        return <HospitalExteriorPhoto className="w-full h-full" />;
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 01:58) */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
            GALLERY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
            Inside Venkateswara Multi Speciality Hospital
          </h2>
          <p className="text-sm text-[#52677D] mt-2 leading-relaxed">
            Clean, calm and well-equipped spaces designed around patients and their families.
          </p>
        </div>

        {/* Filter Buttons (Mirroring Reference Video 01:59) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {(['All', 'Hospital', 'Facilities'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#1554B7] text-white shadow-sm'
                  : 'bg-[#F1F7FD] text-[#52677D] hover:text-[#102A43] hover:bg-[#E7F1FB]'
              }`}
            >
              {filter === 'All' ? 'All' : filter === 'Hospital' ? 'Hospital Campus' : 'Clinical Facilities'}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Mirroring Reference Video 02:00 - 02:04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-xl overflow-hidden border border-[#CBD5E1] bg-slate-50 cursor-pointer shadow-xs hover:border-[#1554B7]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-60 sm:h-64 w-full overflow-hidden">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  {renderPhoto(item.componentType)}
                </div>
              </div>

              {/* Caption Card Footer */}
              <div className="p-4 bg-white border-t border-[#F1F7FD] flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#102A43] font-display">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-[#52677D] block mt-0.5">
                    {item.badge}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#F1F7FD] text-[#1554B7] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
