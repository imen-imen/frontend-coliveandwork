import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySpaces } from './city-spaces';

describe('CitySpaces', () => {
  let component: CitySpaces;
  let fixture: ComponentFixture<CitySpaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySpaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySpaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
