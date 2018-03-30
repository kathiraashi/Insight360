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

// App Modules And Components
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app.routing.module';
  import { MaterialModule } from './material.module';

// Default Folder
  import { LoginComponent } from './default/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
