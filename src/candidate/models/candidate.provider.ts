import { Candidate } from "./candidate-entity";

export const CandidateProviders = [
  {
    provide: 'CANDIDATE_REPOSITORY',
    useValue: Candidate,
  },
];
