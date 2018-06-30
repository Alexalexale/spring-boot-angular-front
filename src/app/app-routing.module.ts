import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
