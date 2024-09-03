import { ContactDetails } from "./contact-entity";


export const ContactProviders = [
  {
    provide: 'CONTACT_REPOSITORY',
    useValue: ContactDetails,
  },
];
