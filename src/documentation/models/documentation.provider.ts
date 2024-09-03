import { Documentation } from "./documentation.entity";

export const DocumentationProvider = [
    {
      provide: 'Documentation_Repository',
      useValue: Documentation,
    },
  ];