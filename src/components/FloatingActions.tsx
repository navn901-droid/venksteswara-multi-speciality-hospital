import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

interface FloatingActionsProps {
  onBookAppointmentClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onBookAppointmentClick,
}) => {
  return (
    <>
      {/* 1. DESKTOP FLOATING ACTIONS */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-2.5 items-end">
        {/* WhatsApp */}
        <a
          href={hospitalInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Hospital Inquiry"
          className="flex items-center gap-2 bg-[#2E9B4B] hover:bg-emerald-700 text-white px-4 py-2.5 rounded-sm shadow-md transition-colors text-xs font-bold"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <span>WhatsApp Inquiry</span>
        </a>

        {/* 24/7 Casualty Emergency */}
        <a
          href={`tel:${hospitalInfo.emergencyPhone}`}
          aria-label="Emergency Casualty Line"
          className="flex items-center gap-2 bg-[#E84B24] hover:bg-red-700 text-white px-4 py-2.5 rounded-sm shadow-md transition-colors text-xs font-bold"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Casualty: {hospitalInfo.emergencyPhoneDisplay}</span>
        </a>
      </div>

      {/* 2. MOBILE FIXED BOTTOM ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#082D52] text-white border-t border-[#0B3F8F] px-2 py-1.5 shadow-lg">
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <a
            href={`tel:${hospitalInfo.emergencyPhone}`}
            className="py-2 px-1 rounded-xs bg-[#E84B24] active:bg-red-700 text-white flex flex-col items-center justify-center"
          >
            <Phone className="w-3.5 h-3.5 mb-0.5" />
            <span className="text-[10px] font-bold font-mono tracking-wide">CALL 24/7</span>
          </a>

          <a
            href={hospitalInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-1 rounded-xs bg-[#2E9B4B] active:bg-emerald-700 text-white flex flex-col items-center justify-center"
          >
            <MessageCircle className="w-3.5 h-3.5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-wide">WHATSAPP</span>
          </a>

          <button
            onClick={onBookAppointmentClick}
            className="py-2 px-1 rounded-xs bg-[#1554B7] active:bg-[#0B3F8F] text-white flex flex-col items-center justify-center cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-wide">BOOK OP</span>
          </button>
        </div>
      </div>
    </>
  );
};
