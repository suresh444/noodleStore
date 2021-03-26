import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStoresComponent } from './display-stores/display-stores.component';
import {StoreDetailsComponent} from './store-details/store-details.component'

const routes: Routes = [
  {path:'',component:DisplayStoresComponent},
  {path:"details/:id",component:StoreDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
