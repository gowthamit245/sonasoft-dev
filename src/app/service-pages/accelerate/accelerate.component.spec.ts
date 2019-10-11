import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerateComponent } from './accelerate.component';

describe('AccelerateComponent', () => {
  let component: AccelerateComponent;
  let fixture: ComponentFixture<AccelerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
