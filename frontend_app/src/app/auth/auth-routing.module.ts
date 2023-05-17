import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: '',
    component: AuthLayoutComponent,
    children:[
      {path:'login', component:LoginPageComponent},
      {path:'register', component:RegisterpageComponent},
      {path:'**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
