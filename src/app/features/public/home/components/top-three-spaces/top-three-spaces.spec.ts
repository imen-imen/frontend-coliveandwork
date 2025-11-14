import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeSpaces } from './top-three-spaces';

describe('TopThreeSpaces', () => {
  let component: TopThreeSpaces;
  let fixture: ComponentFixture<TopThreeSpaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeSpaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeSpaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
