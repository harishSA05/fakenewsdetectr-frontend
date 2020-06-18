import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Paragraph2nounComponent } from 'src/app/paragraph2noun/paragraph2noun.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'para2noun',component:Paragraph2nounComponent},
  {path:'signup',component:SignupComponent},
  {path:'404',component:PagenotfoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
