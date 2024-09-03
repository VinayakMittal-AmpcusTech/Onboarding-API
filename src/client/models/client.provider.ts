import { Client } from "./client-entity";

export const ClientProviders = [
  {
    provide: 'CLIENT_REPOSITORY',
    useValue: Client,
  },
];
