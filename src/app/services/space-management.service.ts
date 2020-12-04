import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceManagementService {
  constructor(private http: HttpClient) { }
  totalSpaceData = new BehaviorSubject<any>([]);
  isLoader = new BehaviorSubject<boolean>(false);

  public getCompleteSpaceData(): void {
    const endUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    this.isLoader.next(true);
    this.http.get(endUrl).subscribe((res) => {
      this.totalSpaceData.next(res);
      this.isLoader.next(false);
    },
      (exception) => {
        throwError(exception);
        this.isLoader.next(false);
      });
  }

  public getSpaceDataByFilter(landSuccess?: string, launchSuccess?: string, launchYear?: string): void {
    const endUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launchSuccess + '&land_success=' + landSuccess + '&launch_year=' + launchYear;
    this.isLoader.next(true);
    this.http.get(endUrl).subscribe((res) => {
        this.totalSpaceData.next(res);
        this.isLoader.next(false);
      },
        (exception) => {
          throwError(exception);
          this.isLoader.next(false);
        });
  }
}
