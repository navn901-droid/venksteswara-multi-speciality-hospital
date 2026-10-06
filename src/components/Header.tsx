import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, Heart } from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { hospitalInfo } from '../data/hospitalData';

interface HeaderProps {
  onBookAppointmentClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookAppointmentClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'departments', 'doctors', 'services', 'insurance', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Specialities', href: '#departments', id: 'departments' },
    { label: 'Doctors', href: '#doctors', id: 'doctors' },
    { label: 'Facilities', href: '#services', id: 'services' },
    { label: 'Insurance', href: '#insurance', id: 'insurance' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* 1. TOP BAR: Deep Navy #082D52 (Mirroring Reference Video 00:00) */}
      <div className="bg-[#082D52] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-[#0B3F8F]">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6 truncate">
            <span className="truncate hidden sm:inline text-white/90">
              {hospitalInfo.address}
            </span>
            <span className="sm:hidden font-mono text-[#E84B24] font-bold">
              24×7: {hospitalInfo.emergencyPhoneDisplay}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-white/90 flex-shrink-0">
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-orange-300 transition-colors font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#E84B24] animate-pulse" />
              <span>Emergency 24×7:</span>
              <span className="font-mono font-bold text-white">{hospitalInfo.emergencyPhoneDisplay}</span>
            </a>

            <div className="hidden md:flex items-center gap-1 text-blue-200 font-medium">
              <Heart className="w-3 h-3 fill-current" />
              <span>We Care with Compassion</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION: White with logo & Book Appointment pill button (Mirroring Reference Video 00:00 - 00:06) */}
      <nav
        className={`bg-white/98 backdrop-blur-md border-b border-[#D9E7F4] py-3.5 transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center hover:opacity-95 transition-opacity"
          >
            <HospitalLogo size="md" />
          </a>

          {/* Desktop Navigation Links (Mirroring Reference Video) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs xl:text-sm font-semibold transition-colors py-1 ${
                    isActive
                      ? 'text-[#1554B7]'
                      : 'text-[#102A43] hover:text-[#1554B7]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Book Appointment (Deep Blue Pill Button - Mirroring Reference Video) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookAppointmentClick}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#082D52] hover:bg-[#1554B7] active:scale-[0.98] rounded-full shadow-xs transition-all uppercase tracking-wider cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookAppointmentClick}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold text-white bg-[#082D52] rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 text-[#102A43] hover:bg-[#F1F7FD] rounded-lg border border-[#D9E7F4]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D9E7F4] bg-white px-5 py-4 shadow-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#F1F7FD] text-[#1554B7]'
                      : 'text-[#102A43] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#D9E7F4] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAppointmentClick();
                  }}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#082D52] rounded-full uppercase tracking-wider"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
