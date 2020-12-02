import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RadioComponent } from './components/radio/radio.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SpaceManagementService } from './services/space-management.service';

describe('AppComponent', () => {
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
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spacex-program'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spacex-program');
  });
});
