import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private logged = new BehaviorSubject<boolean>(false);
    public logged$ = this.logged.asObservable();

    doLogin(login: string, password: string): void {
        //TODO: Mechanizm logowania
        this.logged.next(true);
    }

    logout(): void {
        this.logged.next(false);
    }
}
