import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPriorityComponent } from './activity-priority.component';

describe('ActivityPriorityComponent', () => {
  let component: ActivityPriorityComponent;
  let fixture: ComponentFixture<ActivityPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
