import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Expert } from 'src/app/models/expert/expert.model';
import { ExpertService } from 'src/app/services/expert/expert.service';

@Component({
  selector: 'app-new-expert-form',
  templateUrl: './new-expert-form.component.html',
  styleUrls: ['./new-expert-form.component.scss']
})
export class NewExpertFormComponent implements OnInit, OnDestroy {

  createForm: FormGroup = new FormGroup({});
  expertSubscription: Subscription = new Subscription();

  constructor(private router: Router, private expertService: ExpertService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      contacto_email: ['', Validators.email],
      contacto_telefono: ['', Validators.required],
      nif: '',
      contacto_linkedin: '',
    });
  }

  createExpert(): void{
    if(this.createForm.valid && this.createForm.value.nombre && this.createForm.value.contacto_telefono){
      let body = {
        nombre: this.createForm.value.nombre,
        nif: this.createForm.value.nif,
        contacto_email: this.createForm.value.contacto_email,
        contacto_telefono: this.createForm.value.contacto_telefono,
        contacto_linkedin: this.createForm.value.contacto_linkedin
      }
      this.expertSubscription = this.expertService.createExpert(body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('Alguno de los campos introducidos no son válidos.')
    }
  }


  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
