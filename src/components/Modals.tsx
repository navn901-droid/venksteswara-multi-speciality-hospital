import React, { useEffect } from 'react';
import { X, Clock, MapPin, Check } from 'lucide-react';
import { Department, Doctor, FacilityPhoto } from '../data/hospitalData';
import {
  HospitalExteriorPhoto,
  HospitalCorridorPhoto,
  HospitalWardPhoto,
  HospitalPharmacyPhoto,
  HospitalLabPhoto,
  HospitalEmergencyPhoto,
  SampleDoctorPortrait,
} from './HospitalPhotos';

interface LightboxProps {
  facility: FacilityPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({ facility, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (facility) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [facility, onClose]);

  if (!facility) return null;

  const renderFacilityPhoto = () => {
    switch (facility.componentType) {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082D52]/90 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-md shadow-2xl overflow-hidden border border-[#CBD5E1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#CBD5E1] bg-[#FAFBFD]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 text-xs font-mono font-bold text-[#1554B7] bg-white border border-[#CBD5E1]">
              {facility.badge}
            </span>
            <h2 id="lightbox-title" className="text-base sm:text-lg font-bold text-[#102A43] font-display truncate">
              {facility.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-1.5 text-[#52677D] hover:text-[#102A43] hover:bg-slate-100 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="bg-slate-900/5">
          <div className="aspect-video w-full max-h-[60vh] overflow-hidden bg-slate-100">
            {renderFacilityPhoto()}
          </div>
        </div>

        {/* Caption & Highlights */}
        <div className="p-6 bg-white border-t border-[#CBD5E1]">
          <p className="text-xs sm:text-sm text-[#52677D] leading-relaxed mb-4">
            {facility.description}
          </p>

          <div className="border-t border-[#CBD5E1] pt-3">
            <span className="text-xs font-bold text-[#102A43] uppercase tracking-wider block mb-2 font-display">
              Facility Specifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {facility.keyHighlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-xs text-[#102A43] bg-[#FAFBFD] px-3 py-2 border border-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#2E9B4B] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onSelectDoctorForAppointment: (doc: Doctor) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onSelectDoctorForAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (doctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doctor, onClose]);

  if (!doctor) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082D52]/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden border border-[#CBD5E1]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FAFBFD] border-b border-[#CBD5E1] px-6 py-2.5 flex items-center justify-between text-xs text-[#0B3F8F] font-mono">
          <span>PROTOTYPE DEMO: Sample Doctor Profile</span>
          <button
            onClick={onClose}
            aria-label="Close Doctor Profile"
            className="p-1 text-[#52677D] hover:text-[#102A43]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-44 h-52 overflow-hidden flex-shrink-0 border border-[#CBD5E1] bg-slate-100">
              <SampleDoctorPortrait doctorName={doctor.name} speciality={doctor.speciality} className="w-full h-full" />
            </div>

            <div className="flex-1">
              <span className="font-mono text-xs text-[#1554B7] block mb-1">
                {doctor.speciality}
              </span>
              <h2 id="doctor-modal-title" className="text-xl md:text-2xl font-bold text-[#102A43] font-display">
                {doctor.name}
              </h2>
              <p className="text-xs font-semibold text-[#0B3F8F] mt-0.5 font-mono">
                {doctor.qualification}
              </p>
              <p className="text-xs text-[#52677D] mt-0.5">
                {doctor.designation} · {doctor.experienceBadge}
              </p>

              <div className="mt-4 p-3 bg-[#FAFBFD] border border-[#CBD5E1] text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#102A43]">
                  <Clock className="w-3.5 h-3.5 text-[#1554B7]" />
                  <span className="font-semibold">Consultation Hours:</span>
                  <span className="font-mono">{doctor.opTimings}</span>
                </div>
                <div className="flex items-center gap-2 text-[#102A43]">
                  <MapPin className="w-3.5 h-3.5 text-[#1554B7]" />
                  <span className="font-semibold">Consultation Room:</span>
                  <span>T.B.R Plaza Outpatient Wing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-[#CBD5E1] pt-4">
            <h3 className="text-xs font-bold text-[#102A43] uppercase tracking-wider font-display mb-2">
              Clinical Background
            </h3>
            <p className="text-xs sm:text-sm text-[#52677D] leading-relaxed">
              {doctor.about}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#CBD5E1]">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-[#52677D] hover:text-[#102A43]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectDoctorForAppointment(doctor);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#1554B7] hover:bg-[#0B3F8F] rounded-sm transition-colors"
            >
              Book Appointment with {doctor.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DepartmentModalProps {
  department: Department | null;
  onClose: () => void;
  onBookDepartment: (dept: Department) => void;
}

export const DepartmentModal: React.FC<DepartmentModalProps> = ({
  department,
  onClose,
  onBookDepartment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (department) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [department, onClose]);

  if (!department) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dept-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082D52]/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden border border-[#CBD5E1]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#FAFBFD] border-b border-[#CBD5E1] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#1554B7]">
              [ {department.id.toUpperCase()} ]
            </span>
            <h2 id="dept-modal-title" className="text-lg font-bold text-[#102A43] font-display">
              {department.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Department Details"
            className="p-1.5 text-[#52677D] hover:text-[#102A43]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-[#52677D] leading-relaxed">
            {department.fullDesc}
          </p>

          <div className="p-3 bg-[#FAFBFD] border border-[#CBD5E1] text-xs text-[#0B3F8F] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#1554B7]" />
            <span className="font-semibold">Schedule:</span>
            <span className="font-mono">{department.opDays}</span>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#102A43] uppercase tracking-wider font-display mb-2">
              Common Clinical Scope
            </h3>
            <div className="flex flex-wrap gap-2">
              {department.commonConditions.map((condition, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs text-[#102A43] bg-[#FAFBFD] border border-[#CBD5E1]"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#102A43] uppercase tracking-wider font-display mb-2">
              Clinical Setup & Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {department.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#52677D] bg-white p-2 border border-[#CBD5E1]">
                  <Check className="w-3 h-3 text-[#2E9B4B] flex-shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#CBD5E1]">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#52677D] hover:text-[#102A43]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onBookDepartment(department);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#1554B7] hover:bg-[#0B3F8F] rounded-sm transition-colors"
            >
              Request Appointment in {department.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ConfirmationProps {
  bookingData: {
    name: string;
    phone: string;
    department: string;
    doctor: string;
    date: string;
    time: string;
    bookingRef: string;
  } | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<ConfirmationProps> = ({
  bookingData,
  onClose,
}) => {
  if (!bookingData) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Venkateswara Hospital, I submitted an appointment request for ${bookingData.name} (Ref: ${bookingData.bookingRef}). Department: ${bookingData.department}, Date: ${bookingData.date}. Please confirm my slot.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082D52]/90 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-md shadow-2xl overflow-hidden border border-[#CBD5E1] p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-12 bg-emerald-100 text-[#2E9B4B] rounded-full flex items-center justify-center mx-auto mb-3">
          <Check className="w-6 h-6 stroke-[3]" />
        </div>

        <h2 className="text-xl font-bold text-[#102A43] font-display">
          Consultation Request Recorded
        </h2>
        <p className="text-xs text-[#52677D] mt-1 font-mono">
          Ref: <strong className="text-[#1554B7]">{bookingData.bookingRef}</strong>
        </p>

        <div className="my-5 p-4 bg-[#FAFBFD] border border-[#CBD5E1] text-left text-xs space-y-2 text-[#102A43]">
          <div className="flex justify-between">
            <span className="text-[#52677D]">Patient:</span>
            <span className="font-bold">{bookingData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#52677D]">Contact:</span>
            <span className="font-mono">{bookingData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#52677D]">Department:</span>
            <span className="font-semibold text-[#1554B7]">{bookingData.department}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#52677D]">Consultant:</span>
            <span>{bookingData.doctor}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#52677D]">Date & Slot:</span>
            <span className="font-semibold">{bookingData.date} ({bookingData.time})</span>
          </div>
        </div>

        <p className="text-xs text-[#52677D] leading-relaxed mb-5">
          Hospital reception will contact your mobile to confirm your appointment time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919950232888?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#2E9B4B] hover:bg-emerald-700 rounded-sm transition-colors"
          >
            Confirm via WhatsApp
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#102A43] bg-slate-100 hover:bg-slate-200 rounded-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
