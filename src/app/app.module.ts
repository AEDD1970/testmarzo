import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './nvar/menu/menu.component';
import { RecordsComponent } from './records/records.component';
import { CreateRecordsComponent } from './create-records/create-records.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecordsComponent,
    CreateRecordsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
