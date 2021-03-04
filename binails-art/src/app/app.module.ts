import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPrestationComponent } from './admin/add-prestation/add-prestation.component';
import { DeletePrestationComponent } from './admin/delete-prestation/delete-prestation.component';
import { EditPrestationComponent } from './admin/edit-prestation/edit-prestation.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddReservationComponent } from './home/add-reservation/add-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPrestationComponent,
    DeletePrestationComponent,
    EditPrestationComponent,
    LoginComponent,
    RegisterComponent,
    AddReservationComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
