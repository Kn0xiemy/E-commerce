import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthServicesComponent } from './auth-services/auth-services.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path:""
  },
  {
    component:AuthServicesComponent,
    path:"seller-authorization"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
