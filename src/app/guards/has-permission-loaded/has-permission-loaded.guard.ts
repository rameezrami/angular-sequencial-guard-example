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
export class HasPermissionLoadedGuard implements CanActivate {
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
    // return this.navService.getFeatureData().pipe(
    //   map((data) => {
    //     debugger;
    //     return true;
    //   })
    // );
  }
}
