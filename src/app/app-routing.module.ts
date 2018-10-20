import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightsComponent} from './flights/flights.component'
import {HotelsComponent} from './hotels/hotels.component'
import {PaymentComponent} from './payment/payment.component'
import {EmployelistComponent} from './employelist/employelist.component'
import {EmpdetailsComponent} from './empdetails/empdetails.component'
const routes: Routes = [{path:'flights',component:FlightsComponent},{path:"hotels",component:HotelsComponent},
{path:'emplist',component:EmployelistComponent},{path:'empdetails',
component:EmpdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[FlightsComponent,HotelsComponent,
  EmployelistComponent,EmpdetailsComponent]
