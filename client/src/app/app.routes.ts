import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { OperationListComponent } from './ui/pages/operation-list/operation-list.component';
import { OperationQuestionComponent } from './ui/pages/operation-question/operation-question.component';
import { ResponseScreeComponent } from './ui/pages/response-scree/response-scree.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/operation-list',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'operation-list',
    component: OperationListComponent,
  },
  {
    path: 'operation-question',
    component: OperationQuestionComponent,
  },
  {
    path: 'response',
    component: ResponseScreeComponent,
  }
];
