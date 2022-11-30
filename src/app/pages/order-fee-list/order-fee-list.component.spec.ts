import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFeeListComponent } from './order-fee-list.component';

describe('OrderFeeListComponent', () => {
  let component: OrderFeeListComponent;
  let fixture: ComponentFixture<OrderFeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
