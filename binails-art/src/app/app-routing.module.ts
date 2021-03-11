import { AddPrestationComponent } from './admin/add-prestation/add-prestation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AddReservationComponent } from './home/add-reservation/add-reservation.component';
import { ListPrestaComponent } from './home/list-presta/list-presta.component';
import { ViewOnePrestaComponent } from './home/view-one-presta/view-one-presta.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-presta', pathMatch: 'full' },
  { path: 'list-presta', component: ListPrestaComponent },
  { path: 'list-presta/:id', component: ViewOnePrestaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-reservation', component: AddReservationComponent },
  { path: 'add-prestation', component: AddPrestationComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
