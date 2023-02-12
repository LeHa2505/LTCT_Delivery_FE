import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderListService } from 'src/app/service/order-list.service';
import { UpdateDebtStatusService } from 'src/app/service/update-debt-status.service';


@Component({
  selector: 'app-shipping-order-list',
  templateUrl: './shipping-order-list.component.html',
  styleUrls: ['./shipping-order-list.component.less']
})
export class ShippingOrderListComponent {
  listBreadCrumb = [
    {
      name: 'Danh sách đơn vận chuyển',
      route: '/shipping-order-list',
    },
  ];
  size: NzButtonSize = 'large';

  isVisible = false;
  statusForm : any = {};
  currentStatus : any
  clickedOrder : any;
  filter : any = {
    orderCode : ''
  }

  listOfData : any[]
  listOfDisplayData : any[];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: any[] = [];
  setOfCheckedId = new Set<any>();
  isMultiUpdate = false;

  disabledButton = true
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
    {
      id : 8,
      desc : "không thành công"
    },

  ]

  constructor(private orderListService: OrderListService, private mess : NzMessageService, private debt : UpdateDebtStatusService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.statusForm.statusDetail = '';
    this.orderListService.getShippingOrder().subscribe(
      (res : any) => {
      console.log(res);
      if (res.result.ok) {
        this.listOfData = [...res.data];
        this.listOfDisplayData = [...this.listOfData]
      }else this.mess.error(res.result.message)
    },
    (error) => {
      this.mess.error('Có lỗi xảy ra!')
    });
  }

  updateCheckedSet(item: any, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(item);
    } else {
      this.setOfCheckedId.delete(item);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: any[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ orderCode }) => this.setOfCheckedId.has(orderCode));
    this.indeterminate = listOfEnabledData.some(({ orderCode }) => this.setOfCheckedId.has(orderCode)) && !this.checked;
  }

  onItemChecked(item: any, checked: boolean): void {
    this.updateCheckedSet(item, checked);
    this.refreshCheckedStatus();
    this.disabledButton = !this.isSameStatus();
    console.log(this.disabledButton)
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ orderCode }) => this.updateCheckedSet(orderCode, checked));
    this.refreshCheckedStatus();
    this.disabledButton = !this.isSameStatus();
    console.log(this.disabledButton)

  }

  showModal(isMultiUpdate : boolean, order ?: any): void {
    this.isMultiUpdate = isMultiUpdate;
    // this.statusForm.statusCode = null;
    this.statusForm.statusDetail = '';
    if (order) {
      this.clickedOrder = order;
      this.statusForm.statusCode = order.statusCode.id;
      this.currentStatus = order.statusCode.id;
      this.statusForm.statusDetail = order.statusDetail;
      console.log(this.statusForm)
    }
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.isMultiUpdate) {
      this.multiUpdate();
    } else {
      this.updateStatus(this.clickedOrder.orderCode);
    }
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  log(){
    console.log(this.setOfCheckedId);
  }
  multiUpdate(){
    this.setOfCheckedId.forEach((element : any) => {
      this.updateStatus(element);
    })
  }
  updateStatus(orderCode : any){
    this.orderListService.updateStatus(orderCode,
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
              // this.listOfDisplayData.find((item:any)=>item.orderCode==orderCode).statusCode.id = this.statusForm.statusCode;
              // this.listOfDisplayData.find((item:any)=>item.orderCode==orderCode).statusCode.desc = this.listStatus.find((item:any)=>item.id == this.statusForm.statusCode).desc;
              // this.listOfDisplayData.find((item:any)=>item.orderCode==orderCode).statusDetail = this.statusForm.statusDetail;
              // this.listOfData.find((item:any)=>item.orderCode==orderCode).statusCode.id = this.statusForm.statusCode;
              // this.listOfData.find((item:any)=>item.orderCode==orderCode).statusCode.desc = this.listStatus.find((item:any)=>item.id == this.statusForm.statusCode).desc;
              // this.listOfData.find((item:any)=>item.orderCode==orderCode).statusDetail = this.statusForm.statusDetail;
              // let item = this.listOfDisplayData.find((item:any)=>item.orderCode==orderCode)
              this.orderListService.getShippingOrder().subscribe(
                (res : any) => {
                console.log(res);
                if (res.result.ok) {
                  this.listOfData = [...res.data];
                  this.search()
                }else this.mess.error(res.result.message)
              },
              (error) => {
                this.mess.error('Có lỗi xảy ra!')
              });

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
  search(){
    if (this.filter.statusCode > 0) {
      this.listOfDisplayData = this.listOfData.filter((item:any)=>item.statusCode.id==this.filter.statusCode);
    } else this.listOfDisplayData = [...this.listOfData]

    this.listOfDisplayData = this.listOfDisplayData.filter((item:any)=>item.orderCode.toLowerCase().indexOf(this.filter.orderCode.trim().toLowerCase()) > -1);
  }
  isSameStatus(){
    const arr = [...this.setOfCheckedId]
    if (this.setOfCheckedId.size == 0) {
      return false
    }
    if (this.setOfCheckedId.size == 1) {
      this.listOfData.forEach((item:any)=>{
        if (item.orderCode == arr[0]) {
          this.statusForm.statusCode = item.statusCode.id
          this.currentStatus = item.statusCode.id
          console.log(this.statusForm)
        }
      })
      return true
    }
    for (let index = 0; index < arr.length - 1; index++) {
      let element1 : any;
      let element2  : any;
      this.listOfData.forEach((item:any)=>{
        if (item.orderCode == arr[index]) {
          element1 = {...item};
        } else if (item.orderCode == arr[index+1]) {
          element2 = {...item};
        }
      })
      this.statusForm.statusCode = element1.statusCode.id;
      this.currentStatus = element1.statusCode.id;
      if (element1.statusCode.id != element2.statusCode.id) {
        return false;
      }
    }
    return true;
  }
}

