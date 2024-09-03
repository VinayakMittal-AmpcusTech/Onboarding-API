import { Referral } from "./referral-entity";

export const ReferralProviders = [
  {
    provide: 'REFERRAL_REPOSITORY',
    useValue: Referral,
  },
];
