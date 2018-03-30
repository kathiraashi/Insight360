import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityStatusComponent } from './opportunity-status.component';

describe('OpportunityStatusComponent', () => {
  let component: OpportunityStatusComponent;
  let fixture: ComponentFixture<OpportunityStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
