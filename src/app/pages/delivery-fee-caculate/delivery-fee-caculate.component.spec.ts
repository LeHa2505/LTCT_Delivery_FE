import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFeeCaculateComponent } from './delivery-fee-caculate.component';

describe('DeliveryFeeCaculateComponent', () => {
  let component: DeliveryFeeCaculateComponent;
  let fixture: ComponentFixture<DeliveryFeeCaculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFeeCaculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryFeeCaculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
