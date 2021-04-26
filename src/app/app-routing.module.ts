import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { ExpertsPageComponent } from './pages/experts-page/experts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TagCreatePageComponent } from './pages/tag-create-page/tag-create-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'registro',
    component: RegisterPageComponent
  },
  {
    path: 'expertos',
    component: ExpertsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expertos/:id',
    component: ExpertDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas',
    component: TagsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas/crear',
    component: TagCreatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
