import { WorkAuthorization } from "./workAuthorization-entity";

export const WorkAuthorizationProviders = [
  {
    provide: 'WORKAUTHORIZATION_REPOSITORY',
    useValue: WorkAuthorization,
  },
];
