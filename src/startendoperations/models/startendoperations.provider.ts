import { StartEndOperations } from "./startendoperations-entity";


export const StartEndOperationsProviders = [
  {
    provide: 'STARTENDOPERATIONS_REPOSITORY',
    useValue: StartEndOperations,
  },
];