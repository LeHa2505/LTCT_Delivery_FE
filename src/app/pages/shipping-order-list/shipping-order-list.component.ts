import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/service/api.service';
import { OrderListService } from 'src/app/service/order-list.service';


@Component({
  selector: 'app-shipping-order-list',
  templateUrl: './shipping-order-list.component.html',
  styleUrls: ['./shipping-order-list.component.less']
})
export class ShippingOrderListComponent {
  size: NzButtonSize = 'large';
  listOfData : any[]

  constructor(private orderListService: OrderListService, private mess : NzMessageService) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.orderListService.getShippingOrder().subscribe((res : any) => {
      console.log(res);
      if (res.result.ok) {
        this.listOfData = [...res.data];
      }else this.mess.error(res.result.message)
    },
    (error) => {
      this.mess.error('Có lỗi xảy ra!')
    });
  }
 
}

