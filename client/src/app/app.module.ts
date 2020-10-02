import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFarmaComponent,
    CreateFarmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
