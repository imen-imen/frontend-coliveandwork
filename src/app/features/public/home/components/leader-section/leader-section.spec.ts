import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderSection } from './leader-section';

describe('LeaderSection', () => {
  let component: LeaderSection;
  let fixture: ComponentFixture<LeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
