import { filter, skip } from 'rxjs';
import { LoginService } from './login.service';

describe('LoginService', () => {
    let service: LoginService;

    beforeEach(() => {
        service = new LoginService();
    });

    it('should doLogin', (done) => {
        service.logged$.pipe(filter(x => x)).subscribe(isLogged => {
            expect().nothing();
            done();
        });
        service.doLogin('test1', 'test2');
    });

    it('should logout', (done) => {
        service.logged$.pipe(
            filter(x => !x),
            skip(1)
        ).subscribe(isLogged => {
            expect().nothing();
            done();
        });
        service.logout();
    });
});
