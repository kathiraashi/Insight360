import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatusFormComponent } from './activity-status-form.component';

describe('ActivityStatusFormComponent', () => {
  let component: ActivityStatusFormComponent;
  let fixture: ComponentFixture<ActivityStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
