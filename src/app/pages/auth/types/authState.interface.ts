import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { ICurrentUser } from 'src/app/shared/interfaces/current-user.interface';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
