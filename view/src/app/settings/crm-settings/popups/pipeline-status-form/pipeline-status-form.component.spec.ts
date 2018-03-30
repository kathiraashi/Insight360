import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineStatusFormComponent } from './pipeline-status-form.component';

describe('PipelineStatusFormComponent', () => {
  let component: PipelineStatusFormComponent;
  let fixture: ComponentFixture<PipelineStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
