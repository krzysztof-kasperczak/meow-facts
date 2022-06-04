import { LoginFormFactory } from './login-form.factory';
import { LoginFormControls } from './login-form-controls.enum';

describe('LoginFormFactory', () => {
    let factory: LoginFormFactory;

    beforeEach(() => {

        factory = new LoginFormFactory();
    });

    it('should getForm', () => {
        const form = factory.getForm();
        expect(form.get([LoginFormControls.login])).toBeDefined();
        expect(form.get([LoginFormControls.password])).toBeDefined();

        expect(form.get([LoginFormControls.login])?.validator).toBeDefined();
        expect(form.get([LoginFormControls.password])?.validator).toBeDefined();
    });
});
