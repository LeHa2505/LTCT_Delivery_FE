import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryFeeCaculateComponent } from './delivery-fee-caculate/delivery-fee-caculate.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ShippingOrderListComponent } from './shipping-order-list/shipping-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'shipping-order-list',
    component: ShippingOrderListComponent,
  },
  {
    path: 'shipping-order-detail/:id/:orderCode',
    component: OrderDetailComponent
  },
  {
    path: 'delivery-fee-caculate',
    component : DeliveryFeeCaculateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
