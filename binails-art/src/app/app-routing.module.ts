import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestaComponent } from './home/list-presta/list-presta.component';

const routes: Routes = [
  { path: 'list-presta', component: ListPrestaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
