import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Three3dComponent } from './three3d.component';
import { Three3dService } from './three3d.service'

@NgModule({
  declarations: [
    AppComponent,
    Three3dComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      Three3dService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
