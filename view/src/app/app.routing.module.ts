import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Default
    import { LoginComponent } from './default/login/login.component';
// Dashboard
    import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
// Settings
  // CRM Settings
    import { MainCrmSettingsComponent } from './settings/crm-settings/main-crm-settings/main-crm-settings.component';


const appRoutes: Routes = [
    { path: '',
        component: LoginComponent,
        data: { animation: { value: 'Login', } }
    },
    { path: 'Dashboard',
        component: DashboardMainComponent,
        data: { animation: { value: 'Dashboard', } }
    },
    { path: 'CRMSettings',
        component: MainCrmSettingsComponent,
        data: { animation: { value: 'CRMSettings', } }
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
