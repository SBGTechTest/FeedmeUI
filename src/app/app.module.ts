import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  exports:[
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
