import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AjudaComponent} from './ajuda/ajuda.component';
import {InfoComponent} from './info/info.component';
import {MateriaPageComponent} from './materia-page/materia-page.component';
import {ExerciciosComponent} from './exercicios/exercicios.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent},
  {path: 'nav', component: NavComponent},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'verificar-email', component: VerificarEmailComponent},
  {path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'info', component: InfoComponent},
  {path: 'materia', component: MateriaPageComponent},
  {path: 'exercicios', component: ExerciciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
