import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityStatusFormComponent } from './opportunity-status-form.component';

describe('OpportunityStatusFormComponent', () => {
  let component: OpportunityStatusFormComponent;
  let fixture: ComponentFixture<OpportunityStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
