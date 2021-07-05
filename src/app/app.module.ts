import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ResponseHandlerInterceptorService} from "./core/interceptors/response-handler-interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, {provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
