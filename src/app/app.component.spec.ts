import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

describe('AppComponent', () => {
    let component: AppComponent;
    let loginServiceSpy: jasmine.SpyObj<LoginService>;
    let routerSpy: jasmine.SpyObj<Router>;
    const loggedSubject = new Subject<boolean>();

    beforeEach(() => {
        loginServiceSpy = jasmine.createSpyObj('LoginService', [
            'logout',
        ]);
        loginServiceSpy.logged$ = loggedSubject.asObservable();

        routerSpy = jasmine.createSpyObj('Router', [
            'navigate',
        ]);

        component = new AppComponent(loginServiceSpy, routerSpy);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should redirect on login', () => {
        component.ngOnInit();
        loggedSubject.next(true);
        expect(component.showLogout).toBeTruthy();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/meow-facts']);
    });

    it('should logout', () => {
        component.logout();
        expect(loginServiceSpy.logout).toHaveBeenCalled();
    });
});
