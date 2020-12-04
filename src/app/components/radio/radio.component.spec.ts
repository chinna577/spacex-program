import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onRadioChange', () => {
    const event = {
      currentTarget: {
        name: 'years',
        value: 2006
      }
    };
    const emitSpy = spyOn(component.filterChange, 'emit');
    component.radioChange(event);
    expect(emitSpy).toHaveBeenCalled();
  });
});
