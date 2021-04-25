import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  userEmail:any = '';
  userName:any = '';
  panelOpenState:boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  logout(){
    this.authService.logout();
  }

  get isLoggedIn(): boolean{
    this.userEmail = localStorage.getItem('userEmail');
    this.userName = localStorage.getItem('userName');
    return this.authService.userIsLoggedIn
  }

}
