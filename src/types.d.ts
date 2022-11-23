import { User as AppUser } from './auth/types';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends AppUser {}
  }
}
