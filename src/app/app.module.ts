import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { FormComponent } from './component/form/form.component';
import { UserComponent } from './component/user/user.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'inputUser', component: FormComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

