export interface Department {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  commonConditions: string[];
  facilities: string[];
  opDays: string;
}

export interface FacilityCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  departmentId: string;
  qualification: string;
  designation: string;
  experienceBadge: string;
  opTimings: string;
  about: string;
  imageUrl: string;
  isSample: true;
}

export interface FacilityPhoto {
  id: string;
  title: string;
  category: 'Hospital' | 'Facilities';
  description: string;
  keyHighlights: string[];
  badge: string;
  componentType: 'exterior' | 'corridor' | 'ward' | 'pharmacy' | 'laboratory' | 'emergency';
}

export interface Insurer {
  id: string;
  name: string;
  type: string;
  badge: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  department: string;
  rating: number;
  reviewText: string;
  isSample: true;
}

export const hospitalInfo = {
  name: 'Venkateswara Multi Speciality Hospital',
  legalName: 'Venkateswara Multi Speciality Hospital (T.B.R Plaza)',
  tagline: 'We Care with Compassion',
  address: 'T.B.R Plaza, Venkateswara Hospital Road, Prakasam District, Andhra Pradesh',
  emergencyPhone: '+91 99502 32888',
  emergencyPhoneDisplay: '+91 99502 32888',
  receptionPhone: '08592-283338',
  whatsappNumber: '+919950232888',
  whatsappLink: 'https://wa.me/919950232888?text=Hello%20Venkateswara%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20OP%20consultation%20at%20TBR%20Plaza',
  email: 'care@venkateswarahospital.org',
  opTimings: '9:00 AM – 8:00 PM (Monday – Saturday)',
  emergencyAvailability: '24 × 7 Emergency & Casualty Open',
  googleMapsQuery: 'https://maps.google.com/?q=Venkateswara+Multi+Speciality+Hospital+TBR+Plaza',
};

// Trust Stats (Mirroring reference video stats bar)
export const trustStats = [
  { value: '15+', label: 'Years Service', note: 'Demo' },
  { value: '25,000+', label: 'Happy Patients', note: 'Demo' },
  { value: '12+', label: 'Specialist Doctors', note: 'Demo' },
  { value: '24×7', label: 'Emergency Care', note: 'Active' },
];

// Horizontal Trust Strip (Mirroring reference video trust strip)
export const trustStrip = [
  'Standard in-house clinical laboratory',
  'Cashless insurance & TPA support',
  'Multi-speciality ICU & recovery wards',
  'Transparent, affordable billing',
];

// About Values (Mirroring reference video 2x2 grid: Mission, Vision, Values, Promise)
export const aboutValues = [
  {
    title: 'Our Mission',
    desc: 'Ethical, accessible healthcare for every family in Prakasam district.',
  },
  {
    title: 'Our Vision',
    desc: 'To be the most trusted multi-specialty hospital in the region.',
  },
  {
    title: 'Our Values',
    desc: 'Compassion, integrity, clinical excellence and transparency.',
  },
  {
    title: 'Our Promise',
    desc: 'Dedicated care with compassion — for every patient, every single day.',
  },
];

// 9 Specialities (Mirroring reference video 3-column card grid)
export const departments: Department[] = [
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    shortDesc: 'Complete newborn, child and adolescent care led by senior pediatric consultants.',
    fullDesc: 'Comprehensive healthcare for infants, toddlers and children including immunization, fever management, growth monitoring and pediatric emergencies.',
    iconName: 'Baby',
    commonConditions: ['Childhood Fevers', 'Vaccination Schedule', 'Respiratory Allergies', 'Infant Nutrition', 'Growth Milestones'],
    facilities: ['Child-Friendly OP Room', 'Vaccine Cold Storage', 'Pediatric Observation Beds'],
    opDays: 'Mon – Sat: 10:00 AM – 8:00 PM',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    shortDesc: 'Trauma care, joint management and fracture reduction under one roof.',
    fullDesc: 'Specialized diagnosis and clinical therapy for bone fractures, sprains, knee osteoarthritis, lumbar spondylosis and musculoskeletal pain.',
    iconName: 'Bone',
    commonConditions: ['Fracture Reduction & Plaster', 'Knee Joint Pain', 'Back & Spine Ache', 'Sports Injuries', 'Arthritis Management'],
    facilities: ['Casting & Plaster Suite', 'Digital X-Ray Alignment', 'Physiotherapy Advisory'],
    opDays: 'Mon – Sat: 9:30 AM – 7:30 PM',
  },
  {
    id: 'ophthalmology-ent',
    name: 'Ophthalmology & ENT',
    shortDesc: 'Comprehensive eye examinations, ear discharge care, sinus and throat treatments.',
    fullDesc: 'Clinical diagnostic services for vision checks, conjunctivitis, ear infections, sinusitis, tonsillitis, and nasal allergies.',
    iconName: 'Eye',
    commonConditions: ['Vision Evaluation', 'Ear Pain & Discharge', 'Sinusitis & Rhinitis', 'Tonsillitis & Pharyngitis', 'Foreign Body Removal'],
    facilities: ['Otoscopy Suite', 'Vision Testing Chart', 'ENT Examination Station'],
    opDays: 'Mon – Sat: 11:00 AM – 5:00 PM',
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    shortDesc: 'Safe motherhood, antenatal checkups and women’s health consultations.',
    fullDesc: 'Compassionate women’s health services covering routine antenatal follow-ups, menstrual disorders, PCOD management and post-delivery care.',
    iconName: 'HeartPulse',
    commonConditions: ['Antenatal & Postnatal Checks', 'PCOD & Hormonal Balance', 'Menstrual Irregularities', 'Women’s Preventive Health', 'Pelvic Care'],
    facilities: ['Private Examination Suite', 'Fetal Monitoring', 'Maternal Recovery Wards'],
    opDays: 'Mon – Sat: 9:00 AM – 6:00 PM',
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    shortDesc: 'Elective and emergency surgical care with sterile recovery protocols.',
    fullDesc: 'Clinical evaluation for minor and major surgical cases including sterile wound debridement, hernia management, abscess drainage, and post-op care.',
    iconName: 'Scissors',
    commonConditions: ['Wound Management', 'Hernia Evaluation', 'Abscess Drainage', 'Surgical Follow-up', 'Minor Day-Care Surgeries'],
    facilities: ['Procedure Room', 'Sterile Dressing Station', 'Recovery Beds'],
    opDays: 'Mon – Sat: 10:00 AM – 6:00 PM',
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    shortDesc: 'Diagnosis and medical management of adult illnesses and chronic conditions.',
    fullDesc: 'Evidence-guided medical treatment for tropical fevers, diabetes, hypertension, gastrointestinal issues and preventive adult health checks.',
    iconName: 'Stethoscope',
    commonConditions: ['Fever & Infections', 'Diabetes & Hypertension', 'Gastric Complaints', 'Respiratory Infections', 'General Health Screenings'],
    facilities: ['Daily Consultation Suites', 'Routine Vitals Monitoring', 'Inpatient Observation'],
    opDays: 'Mon – Sat: 9:00 AM – 8:00 PM',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    shortDesc: 'Medical care for skin allergies, fungal infections, hair fall and acne.',
    fullDesc: 'Specialized dermatological evaluations for eczema, fungal rashes, psoriasis, contact allergies and scalp conditions.',
    iconName: 'Sparkles',
    commonConditions: ['Skin Rashes & Allergies', 'Fungal Skin Infections', 'Acne & Pigmentation', 'Eczema & Psoriasis', 'Hair & Scalp Health'],
    facilities: ['Dermatology Consultation Desk', 'Skin Scraping Test Support', 'Topical Care Advisory'],
    opDays: 'Mon, Wed, Fri, Sat: 2:00 PM – 7:00 PM',
  },
  {
    id: 'diagnostics',
    name: 'Laboratory Diagnostics',
    shortDesc: 'In-house diagnostic laboratory testing with reliable, accurate reporting.',
    fullDesc: 'Clinical diagnostic room equipped with automated hematology analyzer machines, centrifuges, and microscopy for blood and urine tests.',
    iconName: 'FlaskConical',
    commonConditions: ['Complete Blood Counts (CBC)', 'Blood Glucose (Fasting & PP)', 'Liver & Kidney Profiles', 'Lipid Panel', 'Urine Routine Analysis'],
    facilities: ['Automated Hematology Analyzer', 'Digital Report Entry Desk', 'Centrifuge Station'],
    opDays: 'Daily: 7:00 AM – 9:00 PM (Emergency Coverage on Duty)',
  },
  {
    id: 'emergency-medicine',
    name: 'Emergency Medicine',
    shortDesc: '24 × 7 casualty with rapid triage, resuscitation and emergency care.',
    fullDesc: 'Round-the-clock emergency casualty desk located on the ground floor of T.B.R Plaza for immediate medical triage, trauma, and acute cases.',
    iconName: 'ShieldAlert',
    commonConditions: ['Accidental Injuries & Trauma', 'Acute Chest Pain', 'High Spiking Fevers', 'Respiratory Distress', 'Sudden Emergencies'],
    facilities: ['Ground Floor Triage Beds', 'Central Oxygen & Suction Lines', 'Direct Ambulance Entry'],
    opDays: 'Open 24 Hours / 365 Days',
  },
];

// Dark Facilities Section (Mirroring reference video frame 00:27 - 00:32)
export const darkFacilities: FacilityCard[] = [
  { id: 'f-1', title: '24 × 7 Emergency', description: 'Round-the-clock casualty with rapid triage and on-call medical team.', iconName: 'ShieldAlert' },
  { id: 'f-2', title: 'Front Office & Reception', description: 'Single-point registration, enquiry and OP consulting desk at entrance.', iconName: 'Building2' },
  { id: 'f-3', title: 'Waiting Hall', description: 'Air-cooled, spacious waiting hall with comfortable seating for attenders.', iconName: 'Users' },
  { id: 'f-4', title: 'Inpatient Recovery Wards', description: 'Multi-position Fowler medical beds with blue mattresses and nursing attention.', iconName: 'BedDouble' },
  { id: 'f-5', title: 'Laboratory', description: 'Automated pathology testing laboratory with same-day report availability.', iconName: 'FlaskConical' },
  { id: 'f-6', title: '24 × 7 Pharmacy (మందుల షాపు)', description: 'In-house dispensary counter on ground floor with genuine medicines.', iconName: 'Pill' },
  { id: 'f-7', title: 'Digital X-Ray Support', description: 'Diagnostic imaging coordination for accurate fracture and bone review.', iconName: 'Activity' },
  { id: 'f-8', title: 'Deluxe A/C Rooms', description: 'Comfortable private air-conditioned patient recovery rooms.', iconName: 'Home' },
  { id: 'f-9', title: 'Cashless Insurance Desk', description: 'Assistance for pre-authorization and documentation for major insurers.', iconName: 'ShieldCheck' },
  { id: 'f-10', title: 'Ambulance Support', description: 'Emergency transportation coordination for patient transfers.', iconName: 'Ambulance' },
  { id: 'f-11', title: 'Wheelchair Ramp & Stairs', description: 'Barrier-free ramp access with handrail safety on ground floor.', iconName: 'Accessibility' },
  { id: 'f-12', title: 'Patient Lift Access', description: 'Elevator connecting ground floor casualty to upper inpatient floors.', iconName: 'ArrowUpDown' },
];

// Consultant Doctors with natural Unsplash Indian doctor portraits
export const doctors: Doctor[] = [
  {
    id: 'dr-rajesh-kumar',
    name: 'Dr. Rajesh Kumar',
    speciality: 'General Medicine',
    departmentId: 'general-medicine',
    qualification: 'MBBS, MD (General Medicine)',
    designation: 'Senior Consultant Physician',
    experienceBadge: '14+ Years (Demo)',
    opTimings: '9:00 AM – 1:30 PM & 5:00 PM – 8:00 PM',
    about: 'Experienced clinical physician managing complex metabolic disorders, hypertension, tropical fevers and diabetes with evidence-based medicine and empathetic patient counseling.',
    imageUrl: '/doctor-1.jpg',
    isSample: true,
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    speciality: 'Obstetrics & Gynecology',
    departmentId: 'obstetrics-gynecology',
    qualification: 'MBBS, MS (OBG), DGO',
    designation: 'Consultant Obstetrician & Gynaecologist',
    experienceBadge: '12+ Years (Demo)',
    opTimings: '10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM',
    about: 'Dedicated specialist for antenatal care, high-risk pregnancy monitoring, adolescent women’s wellness, and post-delivery maternal recovery.',
    imageUrl: '/doctor-2.jpg',
    isSample: true,
  },
  {
    id: 'dr-arun-reddy',
    name: 'Dr. Arun Reddy',
    speciality: 'Orthopedics',
    departmentId: 'orthopedics',
    qualification: 'MBBS, MS (Orthopedics)',
    designation: 'Consultant Orthopaedic Surgeon',
    experienceBadge: '10+ Years (Demo)',
    opTimings: '10:30 AM – 3:00 PM & 5:30 PM – 8:00 PM',
    about: 'Consultant orthopaedic surgeon specializing in fracture stabilization, plaster casting, arthritis care, and musculoskeletal rehabilitation.',
    imageUrl: '/doctor-3.jpg',
    isSample: true,
  },
];

// Cashless Insurers list (Mirroring reference video frame 00:33 - 00:34)
export const insurersList: Insurer[] = [
  { id: 'ins-1', name: 'Star Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-2', name: 'HDFC ERGO General Insurance', type: 'General Insurance', badge: 'Cashless available' },
  { id: 'ins-3', name: 'Care Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-4', name: 'Niva Bupa Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-5', name: 'ICICI Lombard General Insurance', type: 'General Insurance', badge: 'Cashless available' },
  { id: 'ins-6', name: 'Aditya Birla Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-7', name: 'SBI General Insurance', type: 'General Insurance', badge: 'Cashless available' },
  { id: 'ins-8', name: 'ManipalCigna Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-9', name: 'Chola MS General Insurance', type: 'General Insurance', badge: 'Cashless available' },
  { id: 'ins-10', name: 'ACKO Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-11', name: 'Galaxy Health Insurance', type: 'Health Insurance', badge: 'Cashless available' },
  { id: 'ins-12', name: 'Government Healthcare Schemes', type: 'Empanelled Scheme', badge: 'Cashless available' },
];

// Patient Reviews (Mirroring reference video frame 00:35 - 00:37)
export const patientReviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Srinivasa Rao',
    location: 'Ongole · Pediatrics',
    department: 'Pediatrics',
    rating: 5,
    reviewText: 'My daughter was admitted with high fever and weakness. The pediatric medical team attended promptly through the night. The doctors explained every step and the nursing care was excellent.',
    isSample: true,
  },
  {
    id: 'rev-2',
    name: 'Lakshmi Devi',
    location: 'Kandukur · Ophthalmology & ENT',
    department: 'Ophthalmology',
    rating: 5,
    reviewText: 'Visited for acute eye irritation and joint pain. The consultation was thorough, painless and reassuring. The in-house pharmacy on the ground floor made getting prescribed medicines immediate.',
    isSample: true,
  },
  {
    id: 'rev-3',
    name: 'Venkateswarlu M.',
    location: 'Chirala · Orthopedics',
    department: 'Orthopedics',
    rating: 5,
    reviewText: 'After a road bike slip I visited for a severe leg fracture. The orthopedic doctor provided prompt cast reduction and honest advice without pushing unnecessary procedures. Highly dependable care.',
    isSample: true,
  },
];

// Actual Hospital Photographs for Gallery (Mirroring reference video 01:57 - 02:05)
export const galleryPhotos: FacilityPhoto[] = [
  {
    id: 'gal-exterior',
    title: 'Hospital Building Exterior (T.B.R Plaza)',
    category: 'Hospital',
    description: 'Multi-storey hospital building with distinctive blue curtain glass facade and ground-floor casualty entrance.',
    keyHighlights: ['Multi-storey T.B.R Plaza campus', 'Ground floor 24x7 casualty bay', 'Paved vehicle approach'],
    badge: 'Main Campus',
    componentType: 'exterior',
  },
  {
    id: 'gal-corridor',
    title: 'Outpatient Consultation Hallway & Waiting Area',
    category: 'Facilities',
    description: 'Bright tiled corridor connecting consultation rooms, patient benches and dispensary counter.',
    keyHighlights: ['Tiled corridor with wooden consultation doors', 'Patient waiting seating benches', 'Direct access to Pharmacy & Lab'],
    badge: 'OPD Hallway',
    componentType: 'corridor',
  },
  {
    id: 'gal-ward',
    title: 'Inpatient Recovery Ward',
    category: 'Facilities',
    description: 'Recovery ward equipped with multi-position Fowler medical beds with blue mattresses, IV poles and air conditioning.',
    keyHighlights: ['Fowler clinical medical beds', 'Bedside IV and oxygen attachments', 'Air-conditioned patient room'],
    badge: 'Inpatient Ward',
    componentType: 'ward',
  },
  {
    id: 'gal-pharmacy',
    title: '24 × 7 In-House Pharmacy Counter (మందుల షాపు)',
    category: 'Facilities',
    description: 'Ground-floor medicine dispensing window stocked with genuine pharmaceuticals, pediatric formulations and supplies.',
    keyHighlights: ['Round-the-clock dispensing window', 'Stocked prescription shelves', 'Casualty proximity on ground floor'],
    badge: '24×7 Dispensary',
    componentType: 'pharmacy',
  },
  {
    id: 'gal-laboratory',
    title: 'Diagnostic Pathology Laboratory',
    category: 'Facilities',
    description: 'Clinical laboratory room equipped with automated hematology analyzer machines, centrifuges, and microscope consoles.',
    keyHighlights: ['Automated blood testing analyzer', 'Desktop report entry station', 'Microscope diagnostic setup'],
    badge: 'Clinical Lab',
    componentType: 'laboratory',
  },
  {
    id: 'gal-emergency',
    title: '24 × 7 Emergency Casualty & Trauma Unit',
    category: 'Facilities',
    description: 'Ground-floor rapid resuscitation and casualty triage unit equipped with multi-parameter monitors, oxygen and trauma supplies.',
    keyHighlights: ['Ground-floor immediate vehicle access', 'Triage & critical care stretchers', 'Oxygen & resuscitation setup'],
    badge: '24×7 Casualty',
    componentType: 'emergency',
  },
];
