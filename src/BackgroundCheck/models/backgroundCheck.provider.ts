import { BackgroundCheck } from "./backgroundCheck.entity";

export const BackgroundCheckProvider = [
  {
    provide: 'BACKGROUND_CHECK_REPOSITORY',
    useValue: BackgroundCheck,
  },
];