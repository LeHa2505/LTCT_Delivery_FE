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
      title: 'Quản lý đơn vận chuyển',
      icon: 'database',
      url: 'shipping-order-list',
    },
    {
      title: 'Tính phí ship',
      icon: 'delivered-procedure',
      url: 'delivery-fee-caculate',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
