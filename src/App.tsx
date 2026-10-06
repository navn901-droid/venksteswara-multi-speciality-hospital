/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EmergencySection } from './components/EmergencySection';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { DarkServicesSection } from './components/DarkServicesSection';
import { InsuranceSection } from './components/InsuranceSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LightboxModal, DoctorModal, DepartmentModal, BookingConfirmationModal } from './components/Modals';
import { Toast, ToastMessage } from './components/Toast';
import { Department, Doctor, FacilityPhoto, galleryPhotos, hospitalInfo } from './data/hospitalData';

export default function App() {
  const [activePhoto, setActivePhoto] = useState<FacilityPhoto | null>(null);
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<Department | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    name: string;
    phone: string;
    department: string;
    doctor: string;
    date: string;
    time: string;
    bookingRef: string;
  } | null>(null);

  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>();
  const [preselectedDept, setPreselectedDept] = useState<string | undefined>();
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const scrollToAppointmentSection = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToAboutSection = () => {
    const el = document.getElementById('about');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBookWithDoctor = (doc: Doctor) => {
    setPreselectedDoctor(doc.name);
    setPreselectedDept(doc.speciality);
    scrollToAppointmentSection();
    setToast({
      id: String(Date.now()),
      type: 'info',
      title: 'Consultant Selected',
      message: `${doc.name} selected. Please choose your consultation date and time.`,
    });
  };

  const handleBookWithDepartment = (dept: Department) => {
    setPreselectedDept(dept.name);
    scrollToAppointmentSection();
    setToast({
      id: String(Date.now()),
      type: 'info',
      title: 'Department Selected',
      message: `${dept.name} selected. Please complete your registration details.`,
    });
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:${hospitalInfo.emergencyPhone}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#52677D] font-sans antialiased">
      
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 1. Header (Sticky Top Bar + Navigation) */}
      <Header onBookAppointmentClick={scrollToAppointmentSection} />

      {/* Main Page Flow (Mirroring Reference Video) */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <HeroSection
          onBookAppointmentClick={scrollToAppointmentSection}
          onEmergencyClick={handleEmergencyCall}
          onOpenLightbox={() => setActivePhoto(galleryPhotos[0])}
        />

        {/* 2b. Casualty & Emergency Information (Presented Separately) */}
        <EmergencySection />

        {/* 3. About the Hospital */}
        <AboutSection
          onOpenLightbox={() => setActivePhoto(galleryPhotos[1])}
          onLearnMoreClick={scrollToAboutSection}
        />

        {/* 4. Specialities & Departments */}
        <DepartmentsSection
          onSelectDepartment={(dept) => setActiveDepartment(dept)}
          onBookAppointment={scrollToAppointmentSection}
        />

        {/* 5. Doctors / Consultants */}
        <DoctorsSection
          onSelectDoctor={(doc) => setActiveDoctor(doc)}
          onBookAppointmentWithDoctor={handleBookWithDoctor}
        />

        {/* 6. Dark Facilities Section (Navy #082D52) */}
        <DarkServicesSection
          onBookAppointment={scrollToAppointmentSection}
        />

        {/* 7. Cashless Insurance & TPAs */}
        <InsuranceSection />

        {/* 8. Editorial Gallery with Actual Hospital Photos */}
        <FacilitiesSection
          onOpenLightbox={(photo) => setActivePhoto(photo)}
        />

        {/* 9. Patient Stories & Reviews */}
        <ReviewsSection />

        {/* 10. Book Your Consultation Form */}
        <AppointmentSection
          preselectedDoctorName={preselectedDoctor}
          preselectedDeptName={preselectedDept}
          onBookingSuccess={(bookingData) => {
            setBookingConfirmation(bookingData);
            setToast({
              id: String(Date.now()),
              type: 'success',
              title: 'Request Submitted',
              message: `Booking Ref: ${bookingData.bookingRef}. Reception desk will call to confirm.`,
            });
          }}
        />

        {/* 11. Final CTA Banner */}
        <FinalCta onBookAppointmentClick={scrollToAppointmentSection} />

      </main>

      {/* 12. Deep Navy Footer */}
      <Footer />

      {/* 13. Floating Action Buttons (WhatsApp & Casualty Call) */}
      <FloatingActions onBookAppointmentClick={scrollToAppointmentSection} />

      {/* Modals */}
      {/* Lightbox Modal */}
      <LightboxModal
        facility={activePhoto}
        onClose={() => setActivePhoto(null)}
      />

      {/* Doctor Profile Modal */}
      <DoctorModal
        doctor={activeDoctor}
        onClose={() => setActiveDoctor(null)}
        onSelectDoctorForAppointment={handleBookWithDoctor}
      />

      {/* Department Detail Modal */}
      <DepartmentModal
        department={activeDepartment}
        onClose={() => setActiveDepartment(null)}
        onBookDepartment={handleBookWithDepartment}
      />

      {/* Booking Confirmation Modal */}
      <BookingConfirmationModal
        bookingData={bookingConfirmation}
        onClose={() => setBookingConfirmation(null)}
      />

    </div>
  );
}
