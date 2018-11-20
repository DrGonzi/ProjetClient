import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CoachingComponent } from './components/coaching/coaching.component';
import { ContactComponent } from './components/contact/contact.component';
import { MassageComponent } from './components/massage/massage.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

const ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'massage', component: MassageComponent },
  { path: 'rendez-vous', component: RdvComponent },
  { path: 'qui-suis-je', component: WhoAmIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
