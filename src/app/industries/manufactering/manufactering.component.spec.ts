import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacteringComponent } from './manufactering.component';

describe('ManufacteringComponent', () => {
  let component: ManufacteringComponent;
  let fixture: ComponentFixture<ManufacteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
