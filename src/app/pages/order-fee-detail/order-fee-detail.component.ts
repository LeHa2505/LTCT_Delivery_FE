import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderListService } from 'src/app/service/order-list.service';

@Component({
  selector: 'app-order-fee-detail',
  templateUrl: './order-fee-detail.component.html',
  styleUrls: ['./order-fee-detail.component.less']
})
export class OrderFeeDetailComponent {
  data : any;
  code : any;
  constructor(private ser : OrderListService, private mess: NzMessageService, private rou : ActivatedRoute){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.code = this.rou.snapshot.paramMap.get('code');
    this.ser.getShippingOrderDetail(this.code).subscribe(
      (res:any)=>{
        if(res.result.ok){
          this.data = res.data;
        } else this.mess.error(res.result.message);
      },
      (error)=>{
        this.mess.error("Có lỗi xảy ra!");
      }
    )
  }
}
