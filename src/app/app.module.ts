import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoachingComponent } from './coaching/coaching.component';
import { MassageComponent } from './massage/massage.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { ContactComponent } from './contact/contact.component';
import { RdvComponent } from './rdv/rdv.component';

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
