
import { Address } from './address-entity';

export const AddressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: Address,
  },
];
