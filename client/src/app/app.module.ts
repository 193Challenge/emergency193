import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { OperationListComponent } from './ui/pages/operation-list/operation-list.component';
import { OperationQuestionComponent } from './ui/pages/operation-question/operation-question.component';
import { ServiceModule } from './service/service.module';
import { ResponseScreeComponent } from './ui/pages/response-scree/response-scree.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OperationListComponent,
    OperationQuestionComponent,
    ResponseScreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
