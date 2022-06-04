import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    showLogout = false;
    private subscription = new Subscription();

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit(): void {
        this.subscription.add(
            this.loginService.logged$.subscribe(isLogged => {
                this.showLogout = isLogged;
                this.router.navigate([isLogged ? '/meow-facts' : '']);
            }));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    logout(): void {
        this.loginService.logout();
    }
}
