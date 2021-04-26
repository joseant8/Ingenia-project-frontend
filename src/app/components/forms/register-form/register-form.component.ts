import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/models/register/register.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit, OnDestroy {

  registerForm: FormGroup = new FormGroup({});
  authSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  register(): void {

    if(this.registerForm.valid && this.registerForm.value.nombreCompleto && this.registerForm.value.email && this.registerForm.value.password){

      let registerUser: Register = new Register(this.registerForm.value.nombreCompleto, this.registerForm.value.email, this.registerForm.value.password)

      this.authSubscription = this.authService.register(registerUser).subscribe((response) => {
        alert(response.message);
        this.router.navigate(['/login']);
      });
    } else {
      alert('Alguno de los campos introducidos no son válidos. Inténtelo de nuevo.')
    }
  }


  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
