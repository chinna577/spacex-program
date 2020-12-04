import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceManagementService } from './services/space-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spacex-program';
  loader: boolean;

  constructor(private spaceManagementService: SpaceManagementService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['']);
    this.spaceManagementService.isLoader.subscribe(response => {
      setTimeout(() => {
        this.loader = response;
      });
    });
  }
}
