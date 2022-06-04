import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormControls } from './login-form-controls.enum';

@Injectable()
export class LoginFormFactory {
    getForm(): FormGroup {
        return new FormGroup({
            [LoginFormControls.login]: new FormControl(null, [Validators.required]),
            [LoginFormControls.password]: new FormControl(null, [Validators.required])
        })
    }
}
