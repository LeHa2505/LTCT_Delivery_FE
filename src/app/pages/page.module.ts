import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ShippingOrderListModule } from './shipping-order-list/shipping-order-list.module';
import { ShippingOrderListComponent } from './shipping-order-list/shipping-order-list.component';
import { FormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NzCardModule } from 'ng-zorro-antd/card';
import { IconsProviderModule } from '../icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFeeListComponent } from './order-fee-list/order-fee-list.component';
import { OrderFeeDetailComponent } from './order-fee-detail/order-fee-detail.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { DeliveryFeeCaculateComponent } from './delivery-fee-caculate/delivery-fee-caculate.component';


@NgModule({
  declarations: [DashboardComponent, ShippingOrderListComponent, OrderDetailComponent, OrderFeeListComponent, OrderFeeDetailComponent, DeliveryFeeCaculateComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    NzTableModule,
    NzDividerModule,
    ComponentsModule,
    HttpClientModule,
    NgChartsModule,
    NzCardModule,
    IconsProviderModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    ShippingOrderListModule,
    HttpClientModule,
    NzInputModule,
    NzFormModule,
    NzMessageModule,
    NzSelectModule,
    FormsModule
  ],
})
export class DashboardModule {}
