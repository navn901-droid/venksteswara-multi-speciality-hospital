import React from 'react';
import { Baby, Bone, Eye, HeartPulse, Scissors, Stethoscope, Sparkles, FlaskConical, ShieldAlert, ArrowRight } from 'lucide-react';
import { Department, departments } from '../data/hospitalData';

interface DepartmentsProps {
  onSelectDepartment: (dept: Department) => void;
  onBookAppointment: () => void;
}

export const DepartmentsSection: React.FC<DepartmentsProps> = ({
  onSelectDepartment,
  onBookAppointment,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Baby,
    Bone,
    Eye,
    HeartPulse,
    Scissors,
    Stethoscope,
    Sparkles,
    FlaskConical,
    ShieldAlert,
  };

  return (
    <section id="departments" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 00:13 - 00:14) */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
            CENTRES OF EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
            Specialities & departments
          </h2>
          <p className="text-sm sm:text-base text-[#52677D] mt-2 leading-relaxed">
            Nine departments working together, so most patients are diagnosed, treated and followed up without ever leaving the building.
          </p>
        </div>

        {/* 3-Column Grid of Clean White Cards (Mirroring Reference Video 00:14 - 00:18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = iconMap[dept.iconName] || Stethoscope;
            return (
              <div
                key={dept.id}
                onClick={() => onSelectDepartment(dept)}
                className="group p-6 rounded-2xl border border-[#D9E7F4] bg-white hover:border-[#1554B7]/40 hover:shadow-[0_12px_32px_rgba(8,45,82,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#E7F1FB] text-[#1554B7] flex items-center justify-center mb-4 group-hover:bg-[#1554B7] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#102A43] font-display mb-2 group-hover:text-[#1554B7] transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52677D] leading-relaxed mb-6">
                    {dept.shortDesc}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-[#1554B7] group-hover:text-[#0B3F8F]">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onBookAppointment}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9E7F4] bg-[#F1F7FD] hover:bg-[#E7F1FB] text-xs sm:text-sm font-bold text-[#1554B7] transition-colors cursor-pointer"
          >
            <span>Book consultation in any department</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
