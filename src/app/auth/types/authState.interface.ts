import { IBackendErrors } from 'src/app/shared/interfaces/backendErrors.interface';
import { ICurrentUser } from 'src/app/shared/interfaces/currentUser.interface';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
