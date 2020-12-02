import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RadioComponent } from './components/radio/radio.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SpaceManagementService } from './services/space-management.service';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SideBarComponent,
        MainContentComponent,
        LoaderComponent,
        RadioComponent
      ],
      providers: [SpaceManagementService]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit the app', fakeAsync(() => {
    component.ngOnInit();
    tick(100);
    expect(component.loader).toBeDefined();
  }));

});
