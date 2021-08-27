import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private authService: AuthService, private router: Router) {}

  
  // constructor( private router: Router) {}


  constructor(  
    private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot): boolean { 
    const token = localStorage.getItem('token');
    if(token!){
      return true;
    }
    else{  
      this.router.navigateByUrl('/auth');
    }
  }


  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   // if (this.authService.authenticated) {
  //   //   return true;
  //   // } else {
  //   //   this.router.navigate(['/']);
  //   //   return false;
  //   // }
  //   return true;
  // }


}