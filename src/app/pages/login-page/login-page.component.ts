import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Si el usuario ya está logeado y entra en la página de login, se le redirige a la página de expertos
    if(this.authService.userIsLoggedIn){
      this.router.navigate(['/expertos']);
    }
  }

}
