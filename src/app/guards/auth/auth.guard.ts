import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavService } from 'src/app/services/nav/nav.service';
import { HasPermissionLoadedGuard } from '../has-permission-loaded/has-permission-loaded.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private hasPermissionLoadedGuard: HasPermissionLoadedGuard,
    private navService: NavService
  ) {}
  // timeou() {
  //   return new Promise((resolve) => {
  //     debugger;
  //     setTimeout(() => {
  //       resolve(true);
  //     }, 5000);
  //   });
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree | any>
    | boolean
    | UrlTree {
    return new Promise(async (resolve, reject) => {
      debugger;
      setTimeout(() => {
        debugger;
        resolve(true);
      }, 5000);
    });
  }

  // return this.navService.getApiData().pipe(
  //   map((d) => {
  //     console.log(d);
  //     debugger;
  //     return true;
  //   })
  // );
  // return true;
  // const test = new Promise(async (resolve, reject) => {
  //   debugger;
  //   setTimeout(() => {
  //     debugger;
  //     resolve(true);
  //   }, 5000);
  // });
  // const promiseResponse: Promise<boolean> = new Promise((resolve, reject) => {
  //   const data:any = this.hasPermissionLoadedGuard.canActivate(route, state).subscribe(resp=>{
  //     console.log('data:', data);
  //     debugger;

  //     resolve(true);
  //   });

  // });

  // return promiseResponse;
}
