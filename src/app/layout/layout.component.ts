import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  role: any = 'm';
  isCollapsed = false;
  menus: any[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      url: '',
    },
    {
      title: 'Danh sách đơn hàng',
      icon: 'database',
      url: 'shipping-order-list',
    },
    {
      title: 'Phí ship',
      icon: 'transaction',
      url: 'shipping-order-fee-list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
