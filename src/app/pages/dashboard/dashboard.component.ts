import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataset, Scale } from 'chart.js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DashboardService } from 'src/app/service/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  listBreadCrumb = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
  ];

  // chart
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    {
      data: [],
      backgroundColor: '#7978ff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#597a9e',
      barThickness: 30,
      borderRadius: 10,
    },
  ];

  // ---
  data: any;
  constructor(private ser: DashboardService, private mess: NzMessageService) {}
  ngOnInit(): void {
    this.ser.getDashboard().subscribe(
      (res: any) => {
        if (res.result.ok) {
          this.data = res.data;
          this.data.orderQuantityPerDay.forEach((element: any) => {
            this.barChartLabels.push(element.createAt);
            this.barChartData[0].data.push(element.count);
          });
        } else this.mess.error(res.result.message);
      },
      (error: any) => {
        this.mess.error('Có lỗi xảy ra!');
      }
    );
  }
  listOfData = [
    {
      orderCode: 'OD1133',
      statusDetail: 'Giao thiếu hàng',
      createAt: '2022-11-27',
    },
    {
      orderCode: 'OD1133',
      statusDetail: 'Giao thiếu hàng',
      createAt: '2022-11-27',
    },
    {
      orderCode: 'OD1133',
      statusDetail: 'Giao thiếu hàng',
      createAt: '2022-11-27',
    },
    {
      orderCode: 'OD1133',
      statusDetail: 'Giao thiếu hàng',
      createAt: '2022-11-27',
    },
  ];

  pieChartNumberOfSpendingOptions: ChartOptions = {
    responsive: true,
  };
  pieChartNumberOfSpendingLabels: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  pieChartNumberOfSpendingType: ChartType = 'pie';
  pieChartNumberOfSpendingLegend = true;
  pieChartNumberOfSpendingPlugins = [];
  pieChartNumberOfSpendingData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40],
      backgroundColor: [
        '#93d9d9',
        '#ffa1b5',
        '#86c7f3',
        '#ffe29a',
        '#f1f2f4',
        '#fa9092',
        '#fed29d',
      ],
      borderColor: '#fff',
      hoverBackgroundColor: '#597a9e',
      hoverBorderWidth: 10,
      pointBackgroundColor: '#007bff',
      pointHoverBorderColor: '#007bff',
      tension: 0.35,
      fill: true,
      label: '',
    },
  ];
}
