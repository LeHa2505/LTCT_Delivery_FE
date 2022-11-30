import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderListService } from 'src/app/service/order-list.service';

@Component({
  selector: 'app-order-fee-list',
  templateUrl: './order-fee-list.component.html',
  styleUrls: ['./order-fee-list.component.less']
})
export class OrderFeeListComponent {
  size: NzButtonSize = 'large';
  listOfData : any[]

  constructor(private orderListService: OrderListService, private mess : NzMessageService) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.orderListService.getShippingFeeList().subscribe((res : any) => {
      console.log(res);
        this.listOfData = [...res];
    },
    (error) => {
      this.mess.error('Có lỗi xảy ra!')
    });
  }
}
