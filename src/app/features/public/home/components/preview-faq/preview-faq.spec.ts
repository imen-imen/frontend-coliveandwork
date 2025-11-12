import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFaq } from './preview-faq';

describe('PreviewFaq', () => {
  let component: PreviewFaq;
  let fixture: ComponentFixture<PreviewFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
