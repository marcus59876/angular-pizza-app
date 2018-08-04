import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinOuterCrustComponent } from './thin-outer-crust.component';

describe('ThinOuterCrustComponent', () => {
  let component: ThinOuterCrustComponent;
  let fixture: ComponentFixture<ThinOuterCrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinOuterCrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinOuterCrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
