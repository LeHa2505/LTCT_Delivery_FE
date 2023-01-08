import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DeliveryFeeService } from 'src/app/service/delivery-fee.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-delivery-fee-caculate',
  templateUrl: './delivery-fee-caculate.component.html',
  styleUrls: ['./delivery-fee-caculate.component.less'],
})
export class DeliveryFeeCaculateComponent {
  //list address for options of select
  listOfProvince: any = [];
  listOfFromDistrict: any = [];
  listOfToDistrict: any = [];
  listOfToWard: any = [];
  //data input
  fromProvince : any;
  fromDistrict : any;
  toProvince : any;
  toDistrict : any;
  toWard : any;
  cod : number = 0;
  //result
  data : any;
  constructor(private service:DeliveryFeeService, private mess : NzMessageService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProvinces();


  }
  getProvinces(){
    this.service.getProvinces().subscribe(
      (res :any)=>{
        console.log(res);
        if (res.code == 200) {
          this.listOfProvince = res.data;
        } else {
          this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
        }
      },
      (error : any)=>{
        this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
      }
    )
  }
  getFromDistricts(){
    this.service.getDistricts(this.fromProvince).subscribe(
      (res :any)=>{
        if (res.code == 200) {
          this.listOfFromDistrict = res.data
          this.fromDistrict = null;
        } else {
          this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
          this.listOfFromDistrict = []
        }
      },
      (error : any)=>{
        this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
        this.listOfFromDistrict = []
      }
    )
  }
  getToDistricts(){
    this.service.getDistricts(this.toProvince).subscribe(
      (res :any)=>{
        if (res.code == 200) {
          this.listOfToDistrict = res.data
          this.toDistrict = null;
          this.toWard = null
        } else {
          this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
          this.listOfToDistrict = []
        }
      },
      (error : any)=>{
        this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
        this.listOfToDistrict = []
      }
    )
  }
  getToWards(){
    this.service.getWards(this.toDistrict).subscribe(
      (res :any)=>{
        if (res.code == 200) {
          this.listOfToWard = res.data
          this.toWard = null
        } else {
          this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
          this.listOfToWard = []
        }
      },
      (error : any)=>{
        this.mess.error('Đã xảy ra lỗi! Vui lòng thử lại sau')
        this.listOfToWard = []
      }
    )
  }
  getFee(){
    if (
      !this.fromDistrict
      || !this.toDistrict
      || !this.toWard
      ) {
      this.mess.warning("Dữ liệu nhập vào không được để trống!");
      return;
    }
    this.service.getDeliveryFee({
        "from_district_id": this.fromDistrict,
        "to_district_id": this.toDistrict,
        "to_ward_code": this.toWard,
        "cod_value": this.cod
    }).subscribe(
      (res:any) => {
        if (res.result.ok) {
          this.data = res.data;
        } else this.mess.error("Có lỗi xảy ra, vui lòng thử lại sau!")
      },
      (err : any) => {
        this.mess.error("Có lỗi xảy ra, vui lòng thử lại sau!")
      }
    )
  }
}


