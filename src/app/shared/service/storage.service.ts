import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router:Router) { 
        this.gotoLendingPage();
    }

  isShowFooter() { 
      return !this.router.url.match('/auth/login');
    
  }

  gotoLendingPage(){
    const token = localStorage.getItem('token');
    (token!) ? this.router.navigate(['player']) : this.router.navigate(['/auth/login']);
  }

}
