import React from 'react';

interface HospitalLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Dimension tokens
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const svgPixelSizes = {
    sm: 36,
    md: 48,
    lg: 64,
  };

  const currentPixelSize = svgPixelSizes[size];

  // The actual emblem SVG faithfully reflecting the uploaded logo
  const EmblemSvg = (
    <svg
      viewBox="0 0 200 200"
      className={`${iconSizes[size]} flex-shrink-0 drop-shadow-sm`}
      width={currentPixelSize}
      height={currentPixelSize}
      aria-hidden="true"
    >
      {/* Outer circular badge */}
      <circle cx="100" cy="100" r="97" fill="#FFFFFF" stroke="#D9E7F4" strokeWidth="2.5" />
      
      {/* Subtle inner decorative guide ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#E7F1FB" strokeWidth="1" />

      {/* Arched top text path: VENKATESWARA MULTISPECIALITY HOSPITAL */}
      <path
        id="textPathArc"
        d="M 28 100 A 72 72 0 0 1 172 100"
        fill="none"
        stroke="none"
      />
      <text
        fontSize="10"
        fontWeight="800"
        fill="#082D52"
        letterSpacing="0.8"
        fontFamily="Manrope, sans-serif"
      >
        <textPath href="#textPathArc" startOffset="50%" textAnchor="middle">
          VENKATESWARA MULTISPECIALITY HOSPITAL
        </textPath>
      </text>

      {/* Top Center: Red Greek Medical Cross */}
      <g transform="translate(100, 52)">
        {/* Cross background */}
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#E84B24" />
        <rect x="-12" y="-3.5" width="24" height="7" rx="1.5" fill="#E84B24" />
        <rect x="-3.5" y="-12" width="7" height="24" rx="1.5" fill="#E84B24" />
        {/* Inner white caduceus/hospital line */}
        <path d="M 0 -8 L 0 8 M -4 0 L 4 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Center Group: Two Caring Cupped Hands & Mother-Child Silhouette */}
      {/* Left Cupped Hand in Medical Blue #1554B7 */}
      <path
        d="M 68 85 C 64 96 66 112 78 128 C 88 140 96 146 100 152 C 96 147 90 136 86 122 C 82 108 81 96 79 89 C 77 82 72 82 68 85 Z"
        fill="#1554B7"
      />
      <path
        d="M 77 92 C 75 102 78 116 88 128 C 84 116 84 104 84 94 C 84 88 80 88 77 92 Z"
        fill="#104394"
        opacity="0.8"
      />
      <path
        d="M 60 92 C 58 100 62 110 70 122 C 64 112 62 104 64 96 C 65 91 62 90 60 92 Z"
        fill="#1554B7"
        opacity="0.9"
      />

      {/* Right Cupped Hand in Medical Orange/Red #E84B24 */}
      <path
        d="M 132 85 C 136 96 134 112 122 128 C 112 140 104 146 100 152 C 104 147 110 136 114 122 C 118 108 119 96 121 89 C 123 82 128 82 132 85 Z"
        fill="#E84B24"
      />
      <path
        d="M 123 92 C 125 102 122 116 112 128 C 116 116 116 104 116 94 C 116 88 120 88 123 92 Z"
        fill="#C93B18"
        opacity="0.8"
      />
      <path
        d="M 140 92 C 142 100 138 110 130 122 C 136 112 138 104 136 96 C 135 91 138 90 140 92 Z"
        fill="#E84B24"
        opacity="0.9"
      />

      {/* Center Healthcare Green Circle Ring #2E9B4B */}
      <circle cx="100" cy="112" r="22" fill="#FFFFFF" stroke="#2E9B4B" strokeWidth="3" />
      <circle cx="100" cy="112" r="18" fill="#F1F7FD" />

      {/* Mother & Child Caring Silhouette inside Green Ring */}
      <path
        d="M 97 103 A 3.5 3.5 0 1 1 97 96 A 3.5 3.5 0 1 1 97 103 Z"
        fill="#082D52"
      />
      <path
        d="M 104 107 A 2.5 2.5 0 1 1 104 102 A 2.5 2.5 0 1 1 104 107 Z"
        fill="#082D52"
      />
      <path
        d="M 94 124 C 94 115 97 110 101 109 C 103 111 106 112 108 113 C 107 117 107 122 107 124 Z"
        fill="#082D52"
      />
      <path
        d="M 101 113 C 103 117 105 120 107 124 C 99 124 96 122 95 119 C 96 116 98 114 101 113 Z"
        fill="#1554B7"
      />

      {/* Bottom Pulse / ECG Cardiac Wave with Stethoscope Motif in Navy */}
      <path
        d="M 76 158 L 86 158 L 90 152 L 94 165 L 98 148 L 102 163 L 106 156 L 110 160 L 118 160"
        fill="none"
        stroke="#082D52"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="121" cy="160" r="2" fill="#082D52" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {EmblemSvg}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="p-1 bg-white rounded-full shadow-md flex-shrink-0 flex items-center justify-center">
          {EmblemSvg}
        </div>
        <div className="flex flex-col">
          <span className="font-display font-extrabold tracking-tight text-white text-base md:text-lg leading-tight">
            VENKATESWARA
          </span>
          <span className="font-display font-semibold tracking-wider text-xs md:text-sm text-blue-200 uppercase">
            MULTI SPECIALITY HOSPITAL
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant for main header
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="p-0.5 bg-white rounded-full shadow-sm flex-shrink-0 flex items-center justify-center border border-[#D9E7F4]/60">
        {EmblemSvg}
      </div>
      <div className="flex flex-col">
        <span className="font-display font-extrabold tracking-tight text-[#102A43] text-sm sm:text-base md:text-lg leading-none">
          VENKATESWARA
        </span>
        <span className="font-display font-semibold tracking-widest text-[9px] sm:text-[10.5px] text-[#1554B7] uppercase mt-1">
          MULTI SPECIALITY HOSPITAL
        </span>
      </div>
    </div>
  );
};
