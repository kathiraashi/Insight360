import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeFormComponent } from './account-type-form.component';

describe('AccountTypeFormComponent', () => {
  let component: AccountTypeFormComponent;
  let fixture: ComponentFixture<AccountTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
