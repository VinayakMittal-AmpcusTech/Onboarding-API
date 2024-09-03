import { Person } from "./person-entity";

export const PersonProviders = [
  {
    provide: 'PERSON_REPOSITORY',
    useValue: Person,
  },
];
