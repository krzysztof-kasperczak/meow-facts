import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormFactory } from './forms/login-form.factory';
import { LoginFormControls } from './forms/login-form-controls.enum';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginFormFactory]
})
export class LoginComponent {
    form: FormGroup;
    LoginFormControls = LoginFormControls;

    constructor(private formFactory: LoginFormFactory, private loginService: LoginService) {
        this.form = formFactory.getForm();
    }

    submit(): void {
        if (this.form.invalid) {
            return;
        }

        this.loginService.doLogin(
            this.form.controls[LoginFormControls.login].value,
            this.form.controls[LoginFormControls.password].value);
    }
}
