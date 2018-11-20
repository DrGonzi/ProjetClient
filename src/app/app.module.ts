import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CoachingComponent } from './components/coaching/coaching.component';
import { MassageComponent } from './components/massage/massage.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { ContactComponent } from './components/contact/contact.component';
import { RdvComponent } from './components/rdv/rdv.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccueilComponent,
    CoachingComponent,
    MassageComponent,
    WhoAmIComponent,
    ContactComponent,
    RdvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
