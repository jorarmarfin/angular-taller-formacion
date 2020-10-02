import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscritosComponent } from './admin/inscritos/inscritos.component';
import { TemaComponent } from './admin/tema/tema.component';
import { TemasComponent } from './admin/temas/temas.component';
import { ListadotemasComponent } from './pages/listadotemas/listadotemas.component';

import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'temas', component: ListadotemasComponent },
  { path: 'admin/temas', component: TemasComponent },
  { path: 'admin/tema/:id', component: TemaComponent },
  { path: 'admin/inscritos', component: InscritosComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'temas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
