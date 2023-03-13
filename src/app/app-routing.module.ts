import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
  {path:'',component:RegisterformComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'address',component:AddressComponent},
  {path:'Register',component:RegisterformComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
