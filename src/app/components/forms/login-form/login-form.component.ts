import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  authSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  login(): void {

    if(this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password){
      let user: User = new User(this.loginForm.value.email, this.loginForm.value.password)

      this.authSubscription = this.authService.login(user).subscribe((response) => {
        if(response.token){
          //console.log(`Token: ${response.token}`);

          // Guardamos el token en LocalStorage de nuestro navegador en la variable 'Token'
          localStorage.setItem('Token', response.token);

          // Navegamos a "/home"
          // El AuthGuard será ejecutado
          this.router.navigate(['/home'], { state: {userEmail: user.email} });
        }else{
          alert('Error: No se ha recibido el token');
          localStorage.removeItem('Token');
        }
      });
    } else {
      alert('EL email y/o contraseña no son válidos')
    }
  }

}
