import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivesComponent } from './olives.component';

describe('OlivesComponent', () => {
  let component: OlivesComponent;
  let fixture: ComponentFixture<OlivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
