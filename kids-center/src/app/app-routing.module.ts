import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './components/forget/forget.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'forget', component: ForgetComponent},
  {path:'travel', component: TravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
