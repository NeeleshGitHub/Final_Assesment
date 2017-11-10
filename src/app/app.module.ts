import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginServiceService } from './login-service.service';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  { path: 'Login', component : LoginComponent },
  { path: 'Signup', component : SignupComponent },
  { path: 'SignupSuccess', component : SignupSuccessComponent},
  { path: 'admin', component : AdminComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SignupSuccessComponent,
    AdminComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
