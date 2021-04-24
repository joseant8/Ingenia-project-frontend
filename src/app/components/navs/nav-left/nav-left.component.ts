import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  email:any = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('emailCurrentUser');
  }

  logout(){
    this.authService.logout();
  }

}
