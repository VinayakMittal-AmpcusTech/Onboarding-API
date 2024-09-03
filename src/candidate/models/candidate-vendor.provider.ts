import { CandidateVendor } from "./candidate-vendor-entity";

export const CandidateVendorProviders = [
  {
    provide: 'CANDIDATE_VENDOR_REPOSITORY',
    useValue: CandidateVendor,
  },
];
