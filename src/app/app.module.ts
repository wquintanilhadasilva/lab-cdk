import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './loading-spinner-component/loading-spinner.component';
import { HelloComponent } from './hello/hello.component';
import { ToastModule } from './toast/toast.module';
import { ToastCustomComponent } from './toast-custom/toast-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    HelloComponent,
    ToastCustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ LoadingSpinnerComponent ]
})
export class AppModule { }
