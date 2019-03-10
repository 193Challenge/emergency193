import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ServiceModule } from './service/service.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { OperationListComponent } from './ui/pages/operation-list/operation-list.component';
import { OperationQuestionComponent } from './ui/pages/operation-question/operation-question.component';
import { ResponseScreeComponent } from './ui/pages/response-scree/response-scree.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

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
    NativeScriptModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
