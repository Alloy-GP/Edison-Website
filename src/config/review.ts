export const PASTEL_BASE = 'https://usepastel.com/link/4rdqpv73/#';
export const TICKET_ID   = '10215';

export interface ReviewItem {
  label: string;
  path: string;
  review: boolean;
}

export const REVIEW_ITEMS: ReviewItem[] = [
  { label: 'Homepage', path: '/', review: true },
  { label: 'Services', path: '/services/', review: true },
  { label: 'Solutions', path: '/solutions/', review: true },
  { label: 'About', path: '/about/', review: true },
  { label: 'Contact', path: '/contact/', review: true },
  { label: 'Request A Proposal', path: '/request-a-proposal/', review: false },
  { label: 'FAQ', path: '/faq/', review: true },
  { label: 'Testimonials', path: '/testimonials/', review: true },
  { label: 'HOA Management', path: '/services/hoa-management/', review: true },
  { label: 'Single Family', path: '/services/hoa-management/single-family/', review: true },
  { label: 'Townhome', path: '/services/hoa-management/townhome/', review: true },
  { label: 'HOA Accounting', path: '/services/hoa-accounting/', review: true },
  { label: 'Budget Preparation', path: '/services/hoa-accounting/budget-preparation/', review: true },
  { label: 'Reserve Study Support', path: '/services/hoa-accounting/reserve-study-support/', review: false },
  { label: 'HOA Collections', path: '/services/hoa-collections/', review: false },
  { label: 'Covenant Enforcement', path: '/services/covenant-enforcement/', review: true },
  { label: 'Condo Management', path: '/services/condo-management/', review: true },
  { label: 'Milestone Inspections', path: '/services/condo-management/milestone-inspections/', review: false },
  { label: 'Structural Integrity Reserve Study', path: '/services/condo-management/structural-integrity-reserve-study/', review: false },
  { label: 'Orlando', path: '/services/hoa-management/orlando/', review: true },
  { label: 'Winter Garden', path: '/services/hoa-management/winter-garden/', review: true },
  { label: 'Kissimmee', path: '/services/hoa-management/kissimmee/', review: true },
  { label: 'Clermont', path: '/services/hoa-management/clermont/', review: true },
  { label: 'Lake Mary', path: '/services/hoa-management/lake-mary/', review: true },
  { label: 'Altamonte Springs', path: '/services/hoa-management/altamonte-springs/', review: true },
  { label: 'Oviedo', path: '/services/hoa-management/oviedo/', review: true },
  { label: 'Brevard County', path: '/services/hoa-management/brevard-county/', review: true },
  { label: 'Switch HOA Management Company', path: '/solutions/switch-hoa-management-company/', review: true },
  { label: 'Self-Managed HOA', path: '/solutions/self-managed-hoa/', review: false },
  { label: 'Modern HOA Management', path: '/solutions/modern-hoa-management/', review: true },
  { label: 'Meet Our Team', path: '/about/meet-our-team/', review: false },
  { label: 'Meet Your Management', path: '/about/meet-your-management/', review: false },
  { label: 'Blog', path: '/blog/', review: false },
  { label: 'HOA Reserve Study Guide Florida', path: '/blog/hoa-reserve-study-guide-florida/', review: false },
  { label: 'HOA Audit', path: '/blog/hoa-audit/', review: false },
  { label: 'HOA Bylaws vs CCRs', path: '/blog/hoa-bylaws-vs-ccrs/', review: false },
  { label: 'Best HOA Management Companies Orlando', path: '/blog/best-hoa-management-companies-orlando/', review: true },
  { label: 'Edison Education', path: '/edison-education/', review: false },
  { label: 'Privacy Policy', path: '/privacy-policy/', review: false },
  { label: 'Terms of Service', path: '/terms-of-service/', review: false },
];
