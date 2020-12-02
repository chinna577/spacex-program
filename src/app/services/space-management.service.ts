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

  public getCompleteSpaceData() {
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

  public getSpaceDataByFilter(land_success?:string, launch_success?: string, launch_year?: string) {
    const endUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launch_success + '&land_success=' + land_success + '&launch_year=' + launch_year;
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
