import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationTermsComponent } from './quotation-terms.component';

describe('QuotationTermsComponent', () => {
  let component: QuotationTermsComponent;
  let fixture: ComponentFixture<QuotationTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
