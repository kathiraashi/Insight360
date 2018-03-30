import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './default/login/login.component';


const appRoutes: Routes = [
    { path: '',
        component: LoginComponent,
        data: {
            animation: { value: 'Login', }
        }
    }
  ];


@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
