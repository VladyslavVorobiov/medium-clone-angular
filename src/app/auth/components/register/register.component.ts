import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';
import { IRegisterRequest } from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initForm();
    this.initValues();
  }

  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    });
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit() {
    const request: IRegisterRequest = {
      user: {
        ...this.form.value
      }
    };

    this.store.dispatch(registerAction({ request }));
  }
}
