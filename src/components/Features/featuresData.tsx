import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <rect x="12" y="8" width="32" height="40" rx="6" fill="currentColor" opacity="0.12" />
        <rect x="16" y="16" width="24" height="4" rx="2" fill="currentColor" />
        <rect x="16" y="24" width="18" height="4" rx="2" fill="currentColor" opacity="0.7" />
        <rect x="16" y="32" width="14" height="4" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="16" y="40" width="10" height="4" rx="2" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: "Easy Resume Creation",
    paragraph:
      "Build a professional CV in minutes with our intuitive and user-friendly interface. No design skills required.",
  },
  {
    id: 2,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <rect x="10" y="12" width="36" height="32" rx="6" fill="currentColor" opacity="0.12" />
        <rect x="16" y="18" width="10" height="6" rx="3" fill="currentColor" />
        <rect x="30" y="18" width="10" height="6" rx="3" fill="currentColor" opacity="0.7" />
        <rect x="16" y="28" width="28" height="6" rx="3" fill="currentColor" opacity="0.4" />
        <rect x="16" y="38" width="16" height="6" rx="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: "Modern Templates",
    paragraph:
      "Choose from a variety of modern, ATS-friendly templates to make your resume stand out to employers.",
  },
  {
    id: 3,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
        <path d="M28 14V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M21 31L28 38L35 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="19" y="44" width="18" height="4" rx="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Export to PDF & Word",
    paragraph:
      "Download your resume instantly in PDF or Word format, ready to share with recruiters and employers.",
  },
  {
    id: 4,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <rect x="12" y="18" width="32" height="4" rx="2" fill="currentColor" />
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.7" />
        <rect x="12" y="28" width="32" height="4" rx="2" fill="currentColor" opacity="0.5" />
        <circle cx="36" cy="30" r="4" fill="currentColor" opacity="0.7" />
        <rect x="12" y="38" width="32" height="4" rx="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Customizable Sections",
    paragraph:
      "Add, remove, or reorder sections such as Experience, Education, Skills, and more to fit your career needs.",
  },
  {
    id: 5,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <path
          d="M28 8C28 8 12 13 12 25C12 49 28 54 28 54C28 54 44 49 44 25C44 13 28 8 28 8Z"
          fill="currentColor"
          opacity="0.12"
        />
        <rect x="21" y="30" width="14" height="10" rx="5" fill="currentColor" />
        <rect x="24.5" y="25" width="7" height="7" rx="3.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    title: "Secure & Private",
    paragraph:
      "Your data is safe with us. We use industry-standard security to keep your information private.",
  },
  {
    id: 6,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="fill-current">
        <rect x="12" y="12" width="32" height="32" rx="8" fill="currentColor" opacity="0.12" />
        <path d="M18 38L38 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
    title: "Completely Free",
    paragraph:
      "Create, edit, and download your resume for free. No hidden charges or subscriptions.",
  },
];

export default featuresData;
