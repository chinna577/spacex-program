import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.spaceItem = {
      mission_name: 'Mission to Moon',
      flight_number: 1,
      mission_id: ['FEWCRT'],
      launch_year: 2006,
      launch_success: true,
      rocket: {
        first_stage: {
          cores: [
            {
              land_success: true
            }
          ]
        }
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
