import { Component, OnInit } from '@angular/core';
import { SpaceManagementService } from './services/space-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spacex-program';
  loader: boolean;

  constructor(private spaceManagementService: SpaceManagementService) {}

  ngOnInit(): void {
    this.spaceManagementService.isLoader.subscribe(response => {
      setTimeout(() => {
        this.loader = response;
      });
    });
  }
}
