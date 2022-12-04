import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';

export interface ICreateArticleState {
  isSubmitting: boolean;
  errors: IBackendErrors | undefined;
}
