import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavService } from 'src/app/services/nav/nav.service';

@Injectable({
  providedIn: 'root',
})
export class NavGuard implements CanActivate {
  constructor(private navService: NavService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      debugger;
      resolve(true);
    });
    // debugger;
    // const promiseResponse: Promise<boolean> = new Promise((resolve, reject) => {
    //   debugger;
    //   const data = this.navService.getPermissionsData();
    //   console.log(data);
    //   debugger;

    //   resolve(true);
    //   // this.navService.getFeatureData().subscribe((data) => {
    //   //   console.log('data:', data);
    //   //   debugger;

    //   // });
    // });

    // return promiseResponse;
  }
}
