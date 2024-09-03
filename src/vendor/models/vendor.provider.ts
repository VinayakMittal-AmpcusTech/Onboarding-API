import { Vendor } from "./vendor-entity";


export const VendorProviders = [
  {
    provide: 'VENDOR_REPOSITORY',
    useValue: Vendor,
  },
];
