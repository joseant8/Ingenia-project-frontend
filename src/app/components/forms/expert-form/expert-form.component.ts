import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Expert } from 'src/app/models/expert/expert.model';
import { ExpertService } from 'src/app/services/expert/expert.service';

@Component({
  selector: 'app-expert-form',
  templateUrl: './expert-form.component.html',
  styleUrls: ['./expert-form.component.scss']
})
export class ExpertFormComponent implements OnInit, OnDestroy {

  @Input() experto: Expert = new Expert(0, '', new Date(), new Date(), '', '', '', 0, '', '', '', '', '', []);

  editForm: FormGroup = new FormGroup({});
  expertSubscription: Subscription = new Subscription();

  edit_nombre_show: boolean = false;
  edit_nif_show: boolean = false;
  edit_tel_show: boolean = false;
  edit_email_show: boolean = false;

  constructor(private router: Router, private expertService: ExpertService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nombre: [this.experto.nombre, Validators.required],
      contacto_email: ['', Validators.compose([Validators.required, Validators.email])],
      contacto_telefono: ['', Validators.required],
      nif: ['', Validators.required]
    });
  }

  // Editar nombre del experto
  editNombre(): void{
    if(this.editForm.value.nombre){
      let body = {
        nombre: this.editForm.value.nombre
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('El nombre introducido no es válido.')
    }
  }

  showEditNombre(){
    this.edit_nombre_show = !this.edit_nombre_show
  }

  // Editar nif del experto
  editNif(): void{
    if(this.editForm.value.nif){
      let body = {
        nif: this.editForm.value.nif
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('El Nif introducido no es válido.')
    }
  }

  showEditNif(){
    this.edit_nif_show = !this.edit_nif_show
  }

  // Editar teléfono del experto
  editTel(): void{
    if(this.editForm.value.contacto_telefono){
      let body = {
        contacto_telefono: this.editForm.value.contacto_telefono
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('El teléfono introducido no es válido.')
    }
  }

  showEditTel(){
    this.edit_tel_show = !this.edit_tel_show
  }

  // Editar email del experto
  editEmail(): void{
    if(this.editForm.value.contacto_email){
      let body = {
        contacto_email: this.editForm.value.contacto_email
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('El email introducido no es válido.')
    }
  }

  showEditEmail(){
    this.edit_email_show = !this.edit_email_show
  }

  getColorEstado(estado: string) {
    if(estado === 'Validado'){
      return '#4ADEBB';
    }else{
      return '#F0CE76';
    }
  }

  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
