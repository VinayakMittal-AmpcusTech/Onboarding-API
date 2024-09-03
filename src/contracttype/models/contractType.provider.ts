import { ContractType } from "./contractType-entity";

export const ContractTypeProviders = [
  {
    provide: 'CONTRACTTYPE_REPOSITORY',
    useValue: ContractType,
  },
];
