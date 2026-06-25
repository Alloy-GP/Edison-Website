export const PASTEL_BASE = 'https://usepastel.com/link/4rdqpv73/#';
export const TICKET_ID   = '10215';

export interface ReviewItem {
  label: string;
  path: string;
  review: boolean;
}

export const REVIEW_ITEMS: ReviewItem[] = [
  { label: 'Homepage', path: '/', review: false },
  { label: 'Services', path: '/services/', review: false },
  { label: 'Solutions', path: '/solutions/', review: false },
  { label: 'About', path: '/about/', review: false },
  { label: 'Request A Proposal', path: '/request-a-proposal/', review: false },
  { label: 'FAQ', path: '/faq/', review: false },
  { label: 'Testimonials', path: '/testimonials/', review: false },
  { label: 'Case Studies', path: '/case-studies/', review: false },
  { label: 'HOA Management', path: '/services/hoa-management/', review: false },
  { label: 'Single Family', path: '/services/hoa-management/single-family/', review: false },
  { label: 'Townhome', path: '/services/hoa-management/townhome/', review: false },
  { label: 'HOA Accounting', path: '/services/hoa-accounting/', review: false },
  { label: 'Budget Preparation', path: '/services/hoa-accounting/budget-preparation/', review: false },
  { label: 'Reserve Study Support', path: '/services/hoa-accounting/reserve-study-support/', review: false },
  { label: 'HOA Collections', path: '/services/hoa-collections/', review: false },
  { label: 'Covenant Enforcement', path: '/services/covenant-enforcement/', review: false },
  { label: 'Condo Management', path: '/services/condo-management/', review: false },
  { label: 'Milestone Inspections', path: '/services/condo-management/milestone-inspections/', review: false },
  { label: 'Structural Integrity Reserve Study', path: '/services/condo-management/structural-integrity-reserve-study/', review: false },
  { label: 'Orlando', path: '/services/hoa-management/orlando/', review: false },
  { label: 'Winter Garden', path: '/services/hoa-management/winter-garden/', review: false },
  { label: 'Kissimmee', path: '/services/hoa-management/kissimmee/', review: false },
  { label: 'Clermont', path: '/services/hoa-management/clermont/', review: false },
  { label: 'Lake Mary', path: '/services/hoa-management/lake-mary/', review: false },
  { label: 'Altamonte Springs', path: '/services/hoa-management/altamonte-springs/', review: false },
  { label: 'Oviedo', path: '/services/hoa-management/oviedo/', review: false },
  { label: 'Brevard County', path: '/services/hoa-management/brevard-county/', review: false },
  { label: 'Switch HOA Management Company', path: '/solutions/switch-hoa-management-company/', review: false },
  { label: 'Self-Managed HOA', path: '/solutions/self-managed-hoa/', review: false },
  { label: 'Modern HOA Management', path: '/solutions/modern-hoa-management/', review: false },
  { label: 'Meet Our Team', path: '/about/meet-our-team/', review: false },
  { label: 'Meet Your Management', path: '/about/meet-your-management/', review: false },
  { label: 'Blog', path: '/blog/', review: false },
  { label: 'HOA Reserve Study Guide Florida', path: '/blog/hoa-reserve-study-guide-florida/', review: false },
  { label: 'HOA Audit', path: '/blog/hoa-audit/', review: false },
  { label: 'HOA Bylaws vs CCRs', path: '/blog/hoa-bylaws-vs-ccrs/', review: false },
  { label: 'Best HOA Management Companies Orlando', path: '/blog/best-hoa-management-companies-orlando/', review: false },
  { label: 'Edison Education', path: '/edison-education/', review: false },
  { label: 'Privacy Policy', path: '/privacy-policy/', review: false },
  { label: 'Terms of Service', path: '/terms-of-service/', review: false },
];
