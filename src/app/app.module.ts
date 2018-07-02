import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService} from './login-service/login-service.service';
import { LoginService} from './login-check/login.service';
import {CookieService } from 'ngx-cookie-service';
import { CreatePostService } from './home/create-post.service';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ListPostComponent
  ],  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[LoginService]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        canActivate:[LoginService]
      },
      {
        path: 'listPosts',
        component: ListPostComponent,
        canActivate:[LoginService]
      }
    ])
  ],
  providers: [LoginServiceService, LoginService,CookieService,CreatePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
