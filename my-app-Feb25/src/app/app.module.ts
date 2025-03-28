import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EMIComponent } from './emi/emi.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreatvehicleComponent } from './creatvehicle/creatvehicle.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { IdCardsComponent } from './id-cards/id-cards.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { IdCarddetailsComponent } from './id-carddetails/id-carddetails.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { MiniProjectComponent } from './mini-project/mini-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    MyWebsiteComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    EMIComponent,
    FahrenheitComponent,
    SimpleInterestComponent,
    DirectivesComponent,
    EmployeeComponent,
    VehicleComponent,
    AccountsComponent,
    FlipkartComponent,
    CreatvehicleComponent,
    CreateaccountsComponent,
    IdCardsComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    TextareaComponent,
    CapitalDirective,
    BalancePipe,
    MiniProjectComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
