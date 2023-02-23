import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataset, Scale } from 'chart.js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DashboardService } from 'src/app/service/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { OrderListService } from 'src/app/service/order-list.service';
import { E } from 'chart.js/dist/chunks/helpers.core';

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
  listOfData = [];
  listOfDisplayData = [];
  pieChartNumberOfSpendingOptions: ChartOptions = {
    responsive: true,
  };
  pieChartNumberOfSpendingLabels: string[] = [];
  pieChartNumberOfSpendingType: ChartType = 'pie';
  pieChartNumberOfSpendingLegend = true;
  pieChartNumberOfSpendingPlugins = [];
  pieChartNumberOfSpendingData: ChartDataset[] = [
    {
      data: [],
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
  orderQuantityByStatus: any = [];
  orderQuantityByStatusTotal: any;
  constructor(
    private ser: DashboardService,
    private mess: NzMessageService,
    private orderListService: OrderListService
  ) {}
  ngOnInit(): void {
    this.ser.getDashboard().subscribe(
      (res: any) => {
        if (res.result.ok) {
          this.data = res.data;
          this.data.orderQuantityPerDay.forEach((element: any) => {
            this.barChartLabels.push(element.createAt);
            this.barChartData[0].data.push(element.count);
          });
          this.pieChartNumberOfSpendingData[0].data.push(
            this.data.orderQuantityByStatus['3']
          );
          this.pieChartNumberOfSpendingData[0].data.push(
            this.data.orderQuantityByStatus['8']
          );
          // this.pieChartNumberOfSpendingData[0].data.push(
          //   this.data.orderQuantityByStatus['7']
          // );
          this.orderQuantityByStatus = Object.values(
            this.data.orderQuantityByStatus
          );
          this.orderQuantityByStatusTotal = this.orderQuantityByStatus.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
        } else this.mess.error(res.result.message);
      },
      (error: any) => {
        this.mess.error('Có lỗi xảy ra!');
      }
    );

    this.ser.getStatus().subscribe((res: any) => {
      console.log(res);
      res.forEach((element) => {
        if (element.id == 3 || element.id == 4 || element.id == 7) {
          this.pieChartNumberOfSpendingLabels.push(element.desc);
        }
      }, console.log(this.pieChartNumberOfSpendingLabels));
      this.pieChartNumberOfSpendingLabels = ["Thành công", "Không thành công"];
    });

    this.orderListService.getShippingOrder().subscribe(
      (res: any) => {
        console.log(res);
        if (res.result.ok) {
          this.listOfData = [...res.data];
          this.listOfData.forEach((element) => {
            if (element.statusCode.id == 5 || element.statusCode.id == 6) {
              this.listOfDisplayData.push(element);
            }
          }, console.log(this.listOfDisplayData));
          // this.listOfDisplayData = [...this.listOfData]
        } else this.mess.error(res.result.message);
      },
      (error) => {
        this.mess.error('Có lỗi xảy ra!');
      }
    );
  }
}
