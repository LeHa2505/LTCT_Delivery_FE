import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeliveryFeeService } from 'src/app/service/delivery-fee.service';

@Component({
  selector: 'app-delivery-fee-caculate',
  templateUrl: './delivery-fee-caculate.component.html',
  styleUrls: ['./delivery-fee-caculate.component.less'],
})
export class DeliveryFeeCaculateComponent {
  response: any;
  data: any[];
  listOfDistrict: any[];
  // message: any;

  constructor(private service: DeliveryFeeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getDeliveryShipInfo().subscribe((res: any) => {
      this.response = res;
      this.data = [...this.response.data];
      console.log(this.response);
      console.log(this.data);
      console.log(this.data.length);
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index].DistrictName;
        console.log(element);
        this.listOfDistrict.push(element);
      }

      // this.data.forEach(element => {
      //   console.log(element);
      //   this.listOfDistrict.push(element.DistrictName);

      // });
    });
  }
}
