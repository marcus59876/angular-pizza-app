import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThickOuterCrustComponent } from './thick-outer-crust.component';

describe('OuterCrustComponent', () => {
  let component: ThickOuterCrustComponent;
  let fixture: ComponentFixture<ThickOuterCrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThickOuterCrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThickOuterCrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
