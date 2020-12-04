import { Component, OnInit } from '@angular/core';
import { SpaceManagementService } from 'src/app/services/space-management.service';

export interface RadioType {
  id: string;
  value: string;
  name: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  availableYears: RadioType[] = [];
  successfulLaunches: RadioType[] = [];
  successfulLandings: RadioType[] = [];
  selectedFilters: any[] = [];
  constructor(private spaceManagementService: SpaceManagementService) { }

  ngOnInit(): void {
    let year = 2005;
    for (let i = 0; i <= 14; i++) {
      year += 1;
      const yearObj = {
        id: 'year_' + year,
        value: year.toString(),
        name: 'years'
      };
      this.availableYears.push(yearObj);
    }
    this.successfulLaunches = [
      {
        id: 'launch_true',
        value: 'True',
        name: 'successful-launches'
      },
      {
        id: 'launch_false',
        value: 'False',
        name: 'successful-launches'
      }
    ];
    this.successfulLandings = [
      {
        id: 'land_true',
        value: 'True',
        name: 'successful-landings'
      },
      {
        id: 'land_false',
        value: 'False',
        name: 'successful-landings'
      }
    ];
  }

  radioChange(event): void {
    const value = event.currentTarget.value.toLowerCase();
    const name = event.currentTarget.name.toLowerCase();
    const selectedObj = {
      name,
      value
    };
    let year = '';
    let successLaunch = '';
    let successLand = '';
    this.selectedFilters.push(selectedObj);
    this.selectedFilters.forEach(selectedFilter => {
      if (selectedFilter.name === 'years') {
        year = selectedFilter.value;
      } else if (selectedFilter.name === 'successful-launches') {
        successLaunch = selectedFilter.value;
      } else if (selectedFilter.name === 'successful-landings') {
        successLand = selectedFilter.value;
      }
    });
    this.spaceManagementService.getSpaceDataByFilter(successLand, successLaunch, year);
  }

}
