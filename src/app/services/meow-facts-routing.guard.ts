import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class MeowFactsRoutingGuard implements CanActivate {
    constructor(private loginService: LoginService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.loginService.logged$.pipe(switchMap(x => {
            return of(x);
        }));
    }
}
