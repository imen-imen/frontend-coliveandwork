import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsSale } from './terms-sale';

describe('TermsSale', () => {
  let component: TermsSale;
  let fixture: ComponentFixture<TermsSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
