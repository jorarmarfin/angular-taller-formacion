import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { TemasComponent } from './admin/temas/temas.component';
import { TemaComponent } from './admin/tema/tema.component';
import { InscritosComponent } from './admin/inscritos/inscritos.component';
import { ListadotemasComponent } from './pages/listadotemas/listadotemas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TemasComponent,
    TemaComponent,
    InscritosComponent,
    ListadotemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
