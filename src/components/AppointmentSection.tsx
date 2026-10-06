import React, { useState } from 'react';
import { departments, doctors, hospitalInfo } from '../data/hospitalData';

interface AppointmentProps {
  onBookingSuccess: (bookingData: {
    name: string;
    phone: string;
    department: string;
    doctor: string;
    date: string;
    time: string;
    bookingRef: string;
  }) => void;
  preselectedDoctorName?: string;
  preselectedDeptName?: string;
}

export const AppointmentSection: React.FC<AppointmentProps> = ({
  onBookingSuccess,
  preselectedDoctorName,
  preselectedDeptName,
}) => {
  const [formData, setFormData] = useState({
    department: preselectedDeptName || departments[0].name,
    doctor: preselectedDoctorName || 'Any available consultant',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: 'Morning (09:00 AM – 01:00 PM)',
    patientName: '',
    age: '',
    gender: 'Select',
    phone: '',
    email: '',
    symptoms: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedDoctorName) {
      setFormData((prev) => ({ ...prev, doctor: preselectedDoctorName }));
    }
    if (preselectedDeptName) {
      setFormData((prev) => ({ ...prev, department: preselectedDeptName }));
    }
  }, [preselectedDoctorName, preselectedDeptName]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter patient name';
    }
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = `VMH-${Math.floor(100000 + Math.random() * 900000)}`;

      onBookingSuccess({
        name: formData.patientName,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.doctor,
        date: formData.preferredDate,
        time: formData.preferredTime,
        bookingRef,
      });

      setFormData({
        department: departments[0].name,
        doctor: 'Any available consultant',
        preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        preferredTime: 'Morning (09:00 AM – 01:00 PM)',
        patientName: '',
        age: '',
        gender: 'Select',
        phone: '',
        email: '',
        symptoms: '',
      });
    }, 400);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#D9E7F4]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Mirroring Reference Video 02:14) */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#1554B7] uppercase tracking-wider font-display">
            APPOINTMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] font-display mt-2 tracking-tight">
            Book your consultation
          </h2>
          <p className="text-sm text-[#52677D] mt-2 leading-relaxed">
            Fill in the details below and our team will confirm your slot by phone. OP consultations run 9:00 AM – 8:00 PM, Monday to Saturday.
          </p>
        </div>

        {/* Two-Column Form + Sidebar Layout (Mirroring Reference Video 02:15 - 02:20) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Appointment Form (8 cols) */}
          <div className="lg:col-span-8 bg-[#F8FAFD] p-6 sm:p-8 rounded-3xl border border-[#D9E7F4]">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Choose Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  >
                    {departments.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Choose Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  >
                    <option value="Any available consultant">Any available consultant</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>{doc.name} ({doc.speciality})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  >
                    <option value="Morning (09:00 AM – 01:00 PM)">Morning (09:00 AM – 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM – 05:00 PM)">Afternoon (02:00 PM – 05:00 PM)</option>
                    <option value="Evening (05:00 PM – 08:00 PM)">Evening (05:00 PM – 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#102A43] mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  placeholder="Patient Full Name"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                    errors.patientName ? 'border-red-400' : 'border-[#D9E7F4]'
                  } bg-white focus:outline-none focus:border-[#1554B7]`}
                />
                {errors.patientName && (
                  <span className="text-[11px] text-red-500 mt-1 block">{errors.patientName}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 35"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  >
                    <option value="Select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.phone ? 'border-red-400' : 'border-[#D9E7F4]'
                    } bg-white focus:outline-none focus:border-[#1554B7]`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#102A43] mb-1">
                  Symptoms / reason for visit
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe symptoms briefly..."
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E7F4] bg-white focus:outline-none focus:border-[#1554B7]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-[#082D52] hover:bg-[#1554B7] rounded-full transition-colors cursor-pointer uppercase tracking-wider"
                >
                  {isSubmitting ? 'Recording Request...' : 'Book Appointment'}
                </button>
              </div>

              <p className="text-[11px] text-[#52677D] text-center pt-1 leading-relaxed">
                This is a request, not a confirmed booking. For emergencies call <a href={`tel:${hospitalInfo.emergencyPhone}`} className="text-[#E84B24] font-bold">{hospitalInfo.emergencyPhoneDisplay}</a> — our casualty is open 24 × 7.
              </p>

            </form>
          </div>

          {/* RIGHT: Contact & Working Hours Sidebar (Mirroring Reference Video 02:15) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-6 bg-white rounded-3xl border border-[#D9E7F4] shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-[#102A43] uppercase tracking-wider font-display">
                Prefer to call or message?
              </h3>
              
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[#52677D] block">Hospital reception:</span>
                  <a href={`tel:${hospitalInfo.emergencyPhone}`} className="font-bold text-[#1554B7] font-mono text-sm">
                    {hospitalInfo.emergencyPhoneDisplay}
                  </a>
                </div>

                <div>
                  <span className="text-[#52677D] block">WhatsApp:</span>
                  <a href={hospitalInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold text-[#2E9B4B]">
                    Chat with us →
                  </a>
                </div>

                <div>
                  <span className="text-[#52677D] block">Email:</span>
                  <a href={`mailto:${hospitalInfo.email}`} className="text-[#102A43] font-medium">
                    {hospitalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card (Mirroring Reference Video 02:16) */}
            <div className="p-6 bg-[#F8FAFD] rounded-3xl border border-[#D9E7F4] space-y-3 text-xs">
              <h3 className="font-bold text-[#102A43] uppercase tracking-wider font-display">
                WORKING HOURS
              </h3>

              <div className="space-y-2 divide-y divide-[#D9E7F4]">
                <div className="flex justify-between pt-1">
                  <span className="text-[#52677D]">Working Hours</span>
                  <span className="font-semibold text-[#102A43]">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#52677D]">OP Consultations</span>
                  <span className="font-semibold text-[#102A43]">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#52677D]">Emergency & Casualty</span>
                  <span className="font-bold text-[#E84B24]">Open 24 × 7</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#52677D]">Pharmacy & Laboratory</span>
                  <span className="font-bold text-[#2E9B4B]">Open 24 × 7</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
