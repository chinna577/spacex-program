import { Component, OnInit } from '@angular/core';
import { SpaceManagementService } from 'src/app/services/space-management.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  spaceData: any[];
  constructor(private spaceManagementService: SpaceManagementService) { }

  ngOnInit(): void {
    this.spaceManagementService.getCompleteSpaceData();
    this.spaceManagementService.totalSpaceData.subscribe((spaceData: any[]) => {
      this.spaceData = spaceData;
    });
  }

}
