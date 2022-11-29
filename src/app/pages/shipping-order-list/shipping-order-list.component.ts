import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ApiService } from 'src/app/service/api.service';
import { OrderListService } from 'src/app/service/order-list.service';


interface Order {
  id: any;
  createdAt: any;
  updateAt: any;
  statusCode: number;
  statusDetail: any;
  statusDesc: any;
  orderCode: any;
}

interface Response {
  result: any;
  data: any[];
}

@Component({
  selector: 'app-shipping-order-list',
  templateUrl: './shipping-order-list.component.html',
  styleUrls: ['./shipping-order-list.component.less']
})
export class ShippingOrderListComponent {
  size: NzButtonSize = 'large';

  listOfDatas: Order[] = [
    {
      "id": "1",
      "createdAt": "2022-05-26 15:35:21",
      "updateAt": "2022-11-29 10:06:03",
      "statusCode": 1,
      "statusDesc": "chưa giao hàng",
      "statusDetail": "",
      "orderCode": "OD123",
    },
    {
      "id": "2",
      "createdAt": "2022-07-06 20:12:37",
      "updateAt": "2022-11-29 09:07:22",
      "statusCode": 2,
      "statusDesc": "đang giao hàng",
      "statusDetail": "đơn hàng đã đến Bưu điện Cầu Giấy",
      "orderCode": "OD124",
    },
  ];

  res : Response;
  listOfData : Order[];

  constructor(private orderListService: OrderListService) {
    this.orderListService.getArray().subscribe((d) => {
      console.log(d);
      this.res = d;
      this.listOfData = this.res.data;
    });
  }
  
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.orderListService.get().subscribe((listOfData) => {
  //     // we received our posts!
  //     console.log(listOfData);
  //   });
  // }
 
}

