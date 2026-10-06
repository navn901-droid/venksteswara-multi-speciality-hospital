import React, { useState } from 'react';

interface PhotoProps {
  className?: string;
  onClick?: () => void;
  showCaption?: boolean;
}

/**
 * Real photographic hospital exterior component
 * Displays authentic multi-storey medical building with glass curtain-wall facade
 */
export const HospitalExteriorPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-photo-3.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="Venkateswara Multi Speciality Hospital building at T.B.R Plaza"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic hospital corridor / outpatient waiting area
 */
export const HospitalCorridorPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-photo-4.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="Outpatient consultation corridor and patient waiting hall"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic inpatient recovery ward
 */
export const HospitalWardPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-photo-5.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="Hospital patient recovery ward with modern Fowler beds"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic in-house pharmacy dispensing counter
 */
export const HospitalPharmacyPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-photo-1.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="In-house hospital pharmacy dispensing window and medicine shelves"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic diagnostic pathology laboratory
 */
export const HospitalLabPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-photo-2.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="Diagnostic pathology laboratory with automated blood analyzer equipment"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic 24/7 casualty & emergency trauma bay
 */
export const HospitalEmergencyPhoto: React.FC<PhotoProps> = ({ className = '', onClick }) => {
  const [src, setSrc] = useState('/hospital-emergency.png');

  return (
    <div onClick={onClick} className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt="24/7 Emergency Casualty Triage Bay"
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setSrc('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80')}
      />
    </div>
  );
};

/**
 * Real photographic doctor portrait
 */
export const SampleDoctorPortrait: React.FC<{
  doctorName: string;
  speciality: string;
  imageUrl?: string;
  className?: string;
}> = ({ doctorName, speciality, imageUrl, className = '' }) => {
  const defaultDoc = doctorName.toLowerCase().includes('priya')
    ? '/doctor-2.jpg'
    : doctorName.toLowerCase().includes('arun')
    ? '/doctor-3.jpg'
    : '/doctor-1.jpg';

  const [src, setSrc] = useState(imageUrl || defaultDoc);

  return (
    <div className={`relative overflow-hidden bg-slate-100 select-none ${className}`}>
      <img
        src={src}
        alt={`${doctorName} - ${speciality}`}
        className="w-full h-full object-cover object-top block"
        onError={() => {
          setSrc(
            doctorName.toLowerCase().includes('priya')
              ? 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
              : doctorName.toLowerCase().includes('arun')
              ? 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
              : 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
          );
        }}
      />
    </div>
  );
};
