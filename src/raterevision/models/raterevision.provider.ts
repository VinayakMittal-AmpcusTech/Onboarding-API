import { RateRevision } from './raterevision-entity';

export const RateRevisionProviders = [
  {
    provide: 'RATEREVISION_REPOSITORY',
    useValue: RateRevision,
  },
];
