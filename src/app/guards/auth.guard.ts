import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let res = this.authService.person;
      let response: boolean;
      if(!res.age || res.age < 18){
        let message = `Sorry ${res.name =='' ? 'Mr.': res.name} but you don't have permissions to access this page because you aren't an adult.`;
        alert(message);
        response = false;
      }else{
        response = true;
      }
      return response;
      
  }
  
}
