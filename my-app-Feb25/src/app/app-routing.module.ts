import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BMIComponent } from './bmi/bmi.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { EMIComponent } from './emi/emi.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';

const routes: Routes = [
  {path:'My Website',component:MyWebsiteComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'Data Binding',component:DataBindingComponent},
    {path:'Calculator',component:CalculatorComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'EMI',component:EMIComponent},
    {path:'Fahrenheit',component:FahrenheitComponent},
    {path:'Simple Interest',component:SimpleInterestComponent}
    

  ]},//parent routing
 // {path:'',component:LoginComponent},//default routing
 // {path:'login',component:LoginComponent},
  //{path:'**',component:Error404Component},//wild card routing];
  {path:'Home',component:HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
