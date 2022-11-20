import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { loginAction } from '../../store/actions/login.action';

import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { ILoginRequest } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initForm();
    this.initValues();
  }

  initForm() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit() {
    const request: ILoginRequest = {
      user: {
        ...this.form.value
      }
    };

    this.store.dispatch(loginAction({ request }));
  }
}
