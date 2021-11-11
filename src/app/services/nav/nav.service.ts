import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private permissions$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getPermissions(): Observable<any> {
    return this.permissions$.asObservable();
  }
  getPermissionsData(): Observable<any> {
    return this.permissions$.value;
  }
  setPermissionData(data: any) {
    this.permissions$.next(data);
  }
  getFeatureData() {
    debugger;
    return this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .pipe(
        map((data) => {
          debugger;
          this.setPermissionData(data);
          debugger;
          return true;
        })
      );
  }
  getFeatureDataPromise() {
    debugger;
    return this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .toPromise();
  }
  getApiData() {
    debugger;
    return this.http.get(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    );
  }
}
