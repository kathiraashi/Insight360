// Default Modules
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { CommonModule} from '@angular/common';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule, Routes } from '@angular/router';

// Advanced Module
  import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
  import { MomentModule } from 'angular2-moment';

// App Modules And Components
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app.routing.module';
  import { MaterialModule } from './material.module';
  import { PrimengModule } from './primeng.module';

// Default Folder
  import { LoginComponent } from './default/login/login.component';
  import { HeaderComponent } from './default/header/header.component';
// Common Folder
  // Common popups
    import { DeleteConfirmationComponent } from './common/popups/delete-confirmation/delete-confirmation.component';
// Dashboard Folder
  import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
// Settings Folder
  // CRM Settings Folder
    import { MainCrmSettingsComponent } from './settings/crm-settings/main-crm-settings/main-crm-settings.component';
    // CRM Settings Sub Folder
      import { AccountTypeComponent } from './settings/crm-settings/sub-pages/account-type/account-type.component';
      import { IndustryTypeComponent } from './settings/crm-settings/sub-pages/industry-type/industry-type.component';
      import { OwnershipTypeComponent } from './settings/crm-settings/sub-pages/ownership-type/ownership-type.component';
      import { ActivityTypeComponent } from './settings/crm-settings/sub-pages/activity-type/activity-type.component';
      import { ActivityStatusComponent } from './settings/crm-settings/sub-pages/activity-status/activity-status.component';
      import { ActivityPriorityComponent } from './settings/crm-settings/sub-pages/activity-priority/activity-priority.component';
      import { PipelineStatusComponent } from './settings/crm-settings/sub-pages/pipeline-status/pipeline-status.component';
      import { ContactRoleComponent } from './settings/crm-settings/sub-pages/contact-role/contact-role.component';
      import { QuotationTermsComponent } from './settings/crm-settings/sub-pages/quotation-terms/quotation-terms.component';
      import { OpportunityStatusComponent } from './settings/crm-settings/sub-pages/opportunity-status/opportunity-status.component';
    // CRM Settings popups
      import { AccountTypeFormComponent } from './settings/crm-settings/popups/account-type-form/account-type-form.component';
      import { IndustryTypeFormComponent } from './settings/crm-settings/popups/industry-type-form/industry-type-form.component';
      import { OwnershipTypeFormComponent } from './settings/crm-settings/popups/ownership-type-form/ownership-type-form.component';
      import { ActivityTypeFormComponent } from './settings/crm-settings/popups/activity-type-form/activity-type-form.component';
      import { ActivityStatusFormComponent } from './settings/crm-settings/popups/activity-status-form/activity-status-form.component';
      import { ActivityPriorityFormComponent} from './settings/crm-settings/popups/activity-priority-form/activity-priority-form.component';
      import { PipelineStatusFormComponent } from './settings/crm-settings/popups/pipeline-status-form/pipeline-status-form.component';
      import { ContactRoleFormComponent } from './settings/crm-settings/popups/contact-role-form/contact-role-form.component';
      import { QuotationTermsFormComponent } from './settings/crm-settings/popups/quotation-terms-form/quotation-terms-form.component';
      import { OpportunityStatusFormComponent
      } from './settings/crm-settings/popups/opportunity-status-form/opportunity-status-form.component';
  // Service
      // All Settings
        import { CrmSettingsService } from './service/setting/crm-settings/crm-settings.service';
  // Admin Service
    import { AdminServiceService } from './service/admin-service/admin-service.service';


@NgModule({
  declarations: [
    AppComponent,
    // Default Folder
      LoginComponent,
      HeaderComponent,
    // Common Folder
      // Common popups
        DeleteConfirmationComponent,
    // Dashboard Folder
      DashboardMainComponent,
    // Settings Folder
      // CRM Settings Folder
        MainCrmSettingsComponent,
        // CRM Settings Sub Folder
          AccountTypeComponent,
          IndustryTypeComponent,
          OwnershipTypeComponent,
          ActivityTypeComponent,
          ActivityStatusComponent,
          ActivityPriorityComponent,
          PipelineStatusComponent,
          ContactRoleComponent,
          QuotationTermsComponent,
          OpportunityStatusComponent,
        // CRM Settings Popups
          AccountTypeFormComponent,
          IndustryTypeFormComponent,
          OwnershipTypeFormComponent,
          ActivityTypeFormComponent,
          ActivityStatusFormComponent,
          ActivityPriorityFormComponent,
          PipelineStatusFormComponent,
          ContactRoleFormComponent,
          QuotationTermsFormComponent,
          OpportunityStatusFormComponent
  ],
  imports: [
    // Default Modules
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
    // App Modules And Components
      AppRoutingModule,
      MaterialModule,
      PrimengModule,
    // Advanced Module
      SnotifyModule,
      MomentModule
  ],
  providers: [
    // Advanced Module
      { provide: 'SnotifyToastConfig',
        useValue: ToastDefaults
      },
      SnotifyService,
    // Settings
      CrmSettingsService,
    // Admin Service
      AdminServiceService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // Common Folder
      // Common popups
        DeleteConfirmationComponent,
    // Settings
      // CRM Settings Popups
        AccountTypeFormComponent,
        IndustryTypeFormComponent,
        OwnershipTypeFormComponent,
        ActivityTypeFormComponent,
        ActivityStatusFormComponent,
        ActivityPriorityFormComponent,
        PipelineStatusFormComponent,
        ContactRoleFormComponent,
        QuotationTermsFormComponent,
        OpportunityStatusFormComponent
  ]
})
export class AppModule { }
