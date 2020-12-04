import { HttpClientModule } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { SpaceManagementService } from 'src/app/services/space-management.service';
import { RadioComponent } from '../radio/radio.component';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarComponent, RadioComponent ],
      providers: [SpaceManagementService],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(
        [{ path: 'refine', component: AppComponent}]
      )]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test radioChange method when years is selected', () => {
    const event = {
      currentTarget: {
        name: 'years',
        value: '2007'
      }
    };
    component.radioChange(event);
    expect(component.selectedFilters.length).toBe(1);
  });

  it('should test radioChange method when successful launch is selected', () => {
    const event = {
      currentTarget: {
        name: 'successful-launches',
        value: 'true'
      }
    };
    component.radioChange(event);
    expect(component.selectedFilters.length).toBe(1);
  });

  it('should test radioChange method when successful land is selected', () => {
    const event = {
      currentTarget: {
        name: 'successful-landings',
        value: 'true'
      }
    };
    component.radioChange(event);
    expect(component.selectedFilters.length).toBe(1);
  });
});
