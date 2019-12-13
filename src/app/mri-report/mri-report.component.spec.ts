import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MriReportComponent } from './mri-report.component';

describe('MriReportComponent', () => {
  let component: MriReportComponent;
  let fixture: ComponentFixture<MriReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MriReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MriReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
