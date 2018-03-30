import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationTermsFormComponent } from './quotation-terms-form.component';

describe('QuotationTermsFormComponent', () => {
  let component: QuotationTermsFormComponent;
  let fixture: ComponentFixture<QuotationTermsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationTermsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationTermsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
