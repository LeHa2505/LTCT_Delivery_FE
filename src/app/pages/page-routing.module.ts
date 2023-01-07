import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryFeeCaculateComponent } from './delivery-fee-caculate/delivery-fee-caculate.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFeeDetailComponent } from './order-fee-detail/order-fee-detail.component';
import { OrderFeeListComponent } from './order-fee-list/order-fee-list.component';
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
    path: 'shipping-order-detail/:code',
    component: OrderDetailComponent
  },
  {
    path : 'shipping-order-fee-list',
    component : OrderFeeListComponent
  },
  {
    path: 'shipping-order-fee-detail/:code',
    component : OrderFeeDetailComponent
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
