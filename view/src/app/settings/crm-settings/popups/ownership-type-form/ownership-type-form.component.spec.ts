import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipTypeFormComponent } from './ownership-type-form.component';

describe('OwnershipTypeFormComponent', () => {
  let component: OwnershipTypeFormComponent;
  let fixture: ComponentFixture<OwnershipTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
