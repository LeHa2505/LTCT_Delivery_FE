import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFeeDetailComponent } from './order-fee-detail.component';

describe('OrderFeeDetailComponent', () => {
  let component: OrderFeeDetailComponent;
  let fixture: ComponentFixture<OrderFeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFeeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
