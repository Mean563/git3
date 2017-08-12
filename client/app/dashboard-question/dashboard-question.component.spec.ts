import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuestionComponent } from './dashboard-question.component';

describe('DashboardQuestionComponent', () => {
  let component: DashboardQuestionComponent;
  let fixture: ComponentFixture<DashboardQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
