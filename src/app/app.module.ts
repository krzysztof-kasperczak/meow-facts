import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
import { MeowFactsComponent } from './components/meow-facts/meow-facts.component';
import { MeowFactsRoutingGuard } from './services/meow-facts-routing.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MeowFactsComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientModule,
        MatCardModule,
        ScrollingModule,
        InfiniteScrollModule
    ],
    providers: [MeowFactsRoutingGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
