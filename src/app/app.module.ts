import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
