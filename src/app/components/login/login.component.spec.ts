import { LoginComponent } from './login.component';
import { LoginFormFactory } from './forms/login-form.factory';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup } from '@angular/forms';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let factorySpy: jasmine.SpyObj<LoginFormFactory>;
    let loginServiceSpy: jasmine.SpyObj<LoginService>;

    beforeEach(() => {
        factorySpy = jasmine.createSpyObj('LoginFormFactory', [
            'getForm',
        ]);
        factorySpy.getForm.and.returnValue(new FormGroup({
            'login': new FormControl(),
            'password': new FormControl()
        }));

        loginServiceSpy = jasmine.createSpyObj('LoginService', [
            'doLogin',
        ]);

        component = new LoginComponent(factorySpy, loginServiceSpy);
    });

    it('should be created with form', () => {
        expect(component).toBeTruthy();
        expect(component.form).toBeDefined();
    });

    it('should submit', () => {
        component.form.get('login')?.setValue('test1');
        component.form.get('password')?.setValue('test2');

        component.submit();
        expect(loginServiceSpy.doLogin).toHaveBeenCalledWith('test1', 'test2');
    });
});
