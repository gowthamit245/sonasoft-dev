import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTransformsComponent } from './cloud-transforms.component';

describe('CloudTransformsComponent', () => {
  let component: CloudTransformsComponent;
  let fixture: ComponentFixture<CloudTransformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudTransformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudTransformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
