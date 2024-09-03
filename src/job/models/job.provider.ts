import { Job } from "./job-entity";

export const JobProviders = [
  {
    provide: 'JOB_REPOSITORY',
    useValue: Job,
  },
];
