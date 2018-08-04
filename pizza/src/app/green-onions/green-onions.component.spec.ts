import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenOnionsComponent } from './green-onoins.component';

describe('GreenOnionsComponent', () => {
  let component: GreenOnionsComponent;
  let fixture: ComponentFixture<GreenOnionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenOnionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenOnionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
