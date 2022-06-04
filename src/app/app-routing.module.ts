import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MeowFactsComponent } from './components/meow-facts/meow-facts.component';
import { MeowFactsRoutingGuard } from './services/meow-facts-routing.guard';

const routes: Routes = [
    {
        path: 'meow-facts',
        component: MeowFactsComponent,
        canActivate: [MeowFactsRoutingGuard],
    },
    {
        path: '',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
