import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';

export interface IEditArticleState {
  isLoading: boolean;
  isSubmitting: boolean;
  article: IArticle | undefined;
  errors: IBackendErrors | undefined;
}
