import { Subject } from 'rxjs';
import { MeowFactsRoutingGuard } from './meow-facts-routing.guard';
import { LoginService } from './login.service';

describe('MeowFactsRoutingGuard', () => {
    let service: MeowFactsRoutingGuard;
    let loginServiceSpy: jasmine.SpyObj<LoginService>;
    const loggedSubject = new Subject<boolean>();

    beforeEach(() => {
        loginServiceSpy = jasmine.createSpyObj('LoginService', ['']);
        loginServiceSpy.logged$ = loggedSubject.asObservable();

        service = new MeowFactsRoutingGuard(loginServiceSpy);
    });

    it('canActivate if logged', (done) => {
        service.canActivate({} as any, {} as any).subscribe(x => {
            if (x) {
                expect().nothing();
                done();
            }
        })
        loggedSubject.next(true);
    });

    it('canActivate if not logged', (done) => {
        service.canActivate({} as any, {} as any).subscribe(x => {
            if (!x) {
                expect().nothing();
                done();
            }
        })
        loggedSubject.next(false);
    });
});
