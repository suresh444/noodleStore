import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { DisplayStoresComponent } from './display-stores/display-stores.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreDetailsComponent,
    DisplayStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
