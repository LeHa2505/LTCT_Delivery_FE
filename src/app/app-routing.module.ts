import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingOrderListComponent } from './pages/shipping-order-list/shipping-order-list.component';
import { NzSelectModule } from 'ng-zorro-antd/select';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/page.module').then((m) => m.DashboardModule),
  },
  {
    path: 'exception',
    loadChildren: () =>
      import('./shared/exception/exception.module').then(
        (m) => m.ExceptionModule
      ),
  },
  { path: '**', redirectTo: '/exception/403' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
