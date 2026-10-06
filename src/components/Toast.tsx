import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#2E9B4B] flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-[#1554B7] flex-shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-[#E84B24] flex-shrink-0" />,
  };

  return (
    <aside
      aria-label="Notification alerts"
      className="fixed top-20 right-4 z-50 max-w-sm w-full bg-white rounded-xl shadow-2xl border border-[#D9E7F4] p-4 flex items-start gap-3 transition-all"
    >
      {icons[toast.type]}
      <div className="flex-1">
        <h3 className="text-xs font-bold text-[#102A43] font-display">
          {toast.title}
        </h3>
        <p className="text-xs text-[#52677D] mt-0.5 leading-relaxed">
          {toast.message}
        </p>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="p-1 text-[#52677D] hover:text-[#102A43] rounded-md transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
