import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  email:any = '';
  panelOpenState:boolean = false;
  userIsLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  logout(){
    this.authService.logout();
  }

  get isLoggedIn(): boolean{
    this.email = localStorage.getItem('emailCurrentUser');
    return this.authService.userIsLoggedIn
  }

}
