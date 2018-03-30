import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPriorityFormComponent } from './activity-priority-form.component';

describe('ActivityPriorityFormComponent', () => {
  let component: ActivityPriorityFormComponent;
  let fixture: ComponentFixture<ActivityPriorityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPriorityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPriorityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
