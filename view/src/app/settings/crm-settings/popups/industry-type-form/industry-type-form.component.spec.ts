import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTypeFormComponent } from './industry-type-form.component';

describe('IndustryTypeFormComponent', () => {
  let component: IndustryTypeFormComponent;
  let fixture: ComponentFixture<IndustryTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
