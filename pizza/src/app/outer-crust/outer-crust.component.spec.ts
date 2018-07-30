import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterCrustComponent } from './outer-crust.component';

describe('OuterCrustComponent', () => {
  let component: OuterCrustComponent;
  let fixture: ComponentFixture<OuterCrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterCrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterCrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
