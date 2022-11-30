import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataset, Scale } from 'chart.js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DashboardService } from 'src/app/service/dashboard.service';

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
  barChartLabels: string[] = [
  ];
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
  data:any;
  constructor(private ser : DashboardService, private mess : NzMessageService){}
  ngOnInit(): void {
    this.ser.getDashboard().subscribe(
      (res:any)=>{
        if (res.result.ok) {
          this.data = res.data;
          this.data.orderQuantityPerDay.forEach((element:any) => {
            this.barChartLabels.push(element.createAt);
            this.barChartData[0].data.push(element.count);
          });
        } else this.mess.error(res.result.message)
      },
      (error)=>{
        this.mess.error('Có lỗi xảy ra!');
      }
    )
  }

}
