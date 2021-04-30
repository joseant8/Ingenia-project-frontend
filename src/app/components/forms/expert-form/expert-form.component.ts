import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Expert } from 'src/app/models/expert/expert.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { ExpertService } from 'src/app/services/expert/expert.service';

@Component({
  selector: 'app-expert-form',
  templateUrl: './expert-form.component.html',
  styleUrls: ['./expert-form.component.scss']
})
export class ExpertFormComponent implements OnInit, OnDestroy {

  @Input() experto: Expert = new Expert(0, '', new Date(), new Date(), '', '', '', 0, '', '', '', '', '', '', []);
  @Input() listaTodasLasEtiquetas: Tag[] = [];
  listaDisponibilidad: String[] = ['mañanas', 'tardes', 'mañanas y tardes'];
  listaEstados: String[] = ['Pdt. Validar', 'Validado'];
  listaValoraciones: number[] = [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5];

  expertSubscription: Subscription = new Subscription();

  editFormNombre: FormGroup = new FormGroup({});
  editFormNif: FormGroup = new FormGroup({});
  editFormEmail: FormGroup = new FormGroup({});
  editFormTel: FormGroup = new FormGroup({});
  editFormCv: FormGroup = new FormGroup({});
  editFormLinkedin: FormGroup = new FormGroup({});
  editFormDirec: FormGroup = new FormGroup({});

  edit_nombre_show: boolean = false;
  edit_nif_show: boolean = false;
  edit_tel_show: boolean = false;
  edit_email_show: boolean = false;
  edit_cv_show: boolean = false;
  edit_linkedin_show: boolean = false;
  edit_direc_show: boolean = false;

  constructor(private router: Router, private expertService: ExpertService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.editFormNombre = this.formBuilder.group({
      nombre: [, Validators.required]
    });
    this.editFormNif = this.formBuilder.group({
      nif: [, Validators.compose([Validators.required, Validators.pattern("[0-9]{8}[a-zA-Z]")])]
    });
    this.editFormEmail = this.formBuilder.group({
      contacto_email: [, Validators.email]
    });
    this.editFormTel = this.formBuilder.group({
      contacto_telefono: [, Validators.compose([Validators.required, Validators.pattern("[0-9]{9}")])]
    });
    this.editFormLinkedin = this.formBuilder.group({
      contacto_linkedin: []
    });
    this.editFormDirec = this.formBuilder.group({
      direccion: []
    });
  }

  // Editar nombre del experto
  editNombre(): void{
    if(this.editFormNombre.valid){
      let body = {
        nombre: this.editFormNombre.value.nombre
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
    if(this.editFormNif.valid){
      let body = {
        nif: this.editFormNif.value.nif
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
    if(this.editFormTel.valid){
      let body = {
        contacto_telefono: this.editFormTel.value.contacto_telefono
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
    if(this.editFormEmail.valid){
      let body = {
        contacto_email: this.editFormEmail.value.contacto_email
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

  // Editar linkedin del experto
  editLinkedIn(): void{
    if(this.editFormLinkedin.valid){
      let body = {
        contacto_linkedin: this.editFormLinkedin.value.contacto_linkedin
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('Error.')
    }
  }

  showEditLinkedin(){
    this.edit_linkedin_show = !this.edit_linkedin_show
  }



  // Editar dirección del experto
  editDirection(): void{
    if(this.editFormDirec.valid){
      let body = {
        direccion: this.editFormDirec.value.direccion
      }
      this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
        window.location.reload();
      });
    } else {
      alert('Error.')
    }
  }

  showEditDirec(){
    this.edit_direc_show = !this.edit_direc_show
  }



  // Editar valoracion
  editValoracion(val:any){
    let body = {
      puntuacion: val
    }
    this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
      window.location.reload();
    });
  }

  // Editar estado
  editEstado(estado:any){
    let s:number;
    if(estado === 'Validado'){
      s=1;
    }else{
      s=0;
    }
    let body = {
      estado: s
    }
    this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
      window.location.reload();
    });
  }

  // Editar disponibilidad
  editDisp(disp:any){
    let body = {
      disponibilidad: disp
    }
    this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
      window.location.reload();
    });
  }


  // Añadir etiqueta en el experto
  addEtiqueta(id:number): void{
    let body = {
      etiqueta_add_id: id
    }
    this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
      window.location.reload();
    });
  }

  // Eliminar etiqueta en el experto
  deleteEtiqueta(id:number): void{
    let body = {
      etiqueta_delete_id: id
    }
    this.expertSubscription = this.expertService.editExpert(this.experto.id, body).subscribe((response) => {
      window.location.reload();
    });
  }


  getColorEstado(estado: string) {
    if(estado === 'Validado'){
      return '#4ADEBB';
    }else{
      return '#F0CE76';
    }
  }

  getColorValoracion(valoracion: number) {
    if(valoracion < 20){
      return '#D66464';
    }else if(valoracion < 30){
      return '#DEA876';
    }else if(valoracion < 60){
      return '#F0CE76';
    }else if(valoracion < 80){
      return '#B1F0A1';
    }else{  // 80-100
      return '#4ADEBB';
    }
  }

  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
