import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderListService } from 'src/app/service/order-list.service';
import { UpdateDebtStatusService } from 'src/app/service/update-debt-status.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent {
  listBreadCrumb = [
    {
      name: 'Danh sách đơn vận chuyển',
      route: '/shipping-order-list',
    },
    {
      name: 'Thông tin chi tiết đơn vận chuyển',
      route: '',
    },
  ];
  currentStatus : any
  listStatus : any[] = [
    {
      id : 1,
      desc : "đang chuẩn bị hàng"
    },
    {
      id : 2,
      desc : "đang giao hàng"
    },
    {
      id : 3,
      desc : "đã giao hàng"
    },
    {
      id : 5,
      desc : "đang xử lý đổi trả"
    },
    {
      id : 6,
      desc : "đang xử lý trả hàng"
    },
    {
      id : 7,
      desc : "đã nhận hàng trả lại"
    },
  ]
  data : any;
  productList : any[];
  id : any;
  orderCode : any;
  isVisible = false;
  statusForm : any = {};
  constructor(private ser : OrderListService, private mess: NzMessageService, private rou : ActivatedRoute, private debt : UpdateDebtStatusService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.rou.snapshot.paramMap.get('id');
    this.orderCode = this.rou.snapshot.paramMap.get('orderCode');
    this.ser.getShippingOrderDetail(this.id).subscribe(
      (res:any)=>{
        if(res.result.ok){
          this.data = res.data;
        } else this.mess.error(res.result.message);
      },
      (error)=>{
        this.mess.error("Có lỗi xảy ra!");
      }
    );
    this.ser.getProductList(this.orderCode).subscribe(
      (res:any)=>{
        if(res.result.ok){
          this.productList = res.data;
        } else this.mess.error(res.result.message);
      },
      (error)=>{
        this.mess.error("Có lỗi xảy ra!");
      }
    )
  }
  showModal(): void {
    this.statusForm.statusCode = this.data.statusCode.id;
    this.currentStatus = this.data.statusCode.id;
    this.statusForm.statusDetail = this.data.statusDetail;
    this.isVisible = true;
  }

  handleOk(): void {
    this.updateStatus(this.data.orderCode);
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  updateStatus(orderCode : any){
    this.ser.updateStatus(orderCode,
      {
        statusCode : this.statusForm.statusCode,
        statusDetail : this.statusForm.statusDetail,
       }).subscribe(
          (res : any) => {
            console.log(res);
            if (res.result.ok) {
              this.mess.success(`Cập nhật trạng thái đơn hàng ${orderCode} thành công!`)
              if (this.statusForm.statusCode==3) {
                this.updateDebtStatus(orderCode);
              }
              this.ser.getShippingOrderDetail(this.id).subscribe(
                (res:any)=>{
                  if(res.result.ok){
                    this.data = res.data;
                  } else this.mess.error(res.result.message);
                },
                (error)=>{
                  this.mess.error("Có lỗi xảy ra!");
                }
              );
            } else this.mess.error(res.result.message)
          },
          (error) => {
            this.mess.error(`Có lỗi xảy ra!`)
          }
        );
  }
  updateDebtStatus(orderCode){
    this.debt.updateDebtStatus(orderCode).subscribe(
      (res:any)=>{
        if (res.status == 'success') {
          this.mess.success("Cập nhật tình trạng công nợ thành công!");
        } else this.mess.error("Cập nhật tình trạng công nợ không thành công!")
      },
      (err:any)=>{
        this.mess.error("Cập nhật tình trạng công nợ không thành công!")
      }
    )
  }


}
