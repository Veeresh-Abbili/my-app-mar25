import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreatvehicleComponent } from './creatvehicle/creatvehicle.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { IdCardsComponent } from './id-cards/id-cards.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { IdCarddetailsComponent } from './id-carddetails/id-carddetails.component';
import { CommunicationComponent } from './communication/communication.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { MiniProjectComponent } from './mini-project/mini-project.component';

const routes: Routes = [
  {path:'My Website',component:MyWebsiteComponent,canActivate:[AuthenticationGuard],children:[
    {path:'welcome',component:WelcomeComponent}, //children routing
    {path:'Data Binding',component:DataBindingComponent},
    {path:'Calculator',component:CalculatorComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'EMI',component:EMIComponent},
    {path:'Fahrenheit',component:FahrenheitComponent},
    {path:'Simple Interest',component:SimpleInterestComponent}
    ]},
  
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard], children:[
    {path:'Directives',component:DirectivesComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Vehicle',component:VehicleComponent},
    {path:'Accounts',component:AccountsComponent},
    {path:'Flipkart',component:FlipkartComponent},
    {path:'creatvehicle',component:CreatvehicleComponent},
    {path:'createaccounts',component:CreateaccountsComponent},
    {path:'id_cards',component:IdCardsComponent},
    {path:'create-user',component:CreateUserComponent},
    //{path:'vehicle-details',component:VehicleDetailsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreatvehicleComponent},
    {path:'id-carddetails/:id',component:IdCarddetailsComponent},
    {
      path:'payments',
      loadChildren: () =>import('./payments/payments.module').then(m => m.PaymentsModule)
    }


  ]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'communication',component:CommunicationComponent, children:[
    {path:'sibling',component:Sibling1Component},
    {path:'parent',component:ParentComponent},
  ]},
  {path:'mini-project',component:MiniProjectComponent},

    //parent routing
 // {path:'',component:LoginComponent},//default routing
 // {path:'login',component:LoginComponent},
  //{path:'**',component:Error404Component},//wild card routing];
  {path:'Home',component:HomeComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
