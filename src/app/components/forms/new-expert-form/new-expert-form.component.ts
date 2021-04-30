import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-new-expert-form',
  templateUrl: './new-expert-form.component.html',
  styleUrls: ['./new-expert-form.component.scss']
})
export class NewExpertFormComponent implements OnInit, OnDestroy {

  createForm: FormGroup = new FormGroup({});
  expertSubscription: Subscription = new Subscription();
  @Input() listaTodasLasEtiquetas: Tag[] = [];
  listaEtiquetasNewExpert: Tag[] = [];
  listaDisponibilidad: String[] = ['mañanas', 'tardes', 'mañanas y tardes'];

  constructor(private router: Router, private expertService: ExpertService, private formBuilder: FormBuilder, private tagService: TagService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      nombre: [ , Validators.required],
      contacto_email: [ , Validators.email],
      contacto_telefono: [, Validators.required],
      nif: [],
      direccion: [],
      disponibilidad: [],
      contacto_linkedin: []
    });
  }

  createExpert(): void{
    if(this.createForm.valid){
      let body = {
        nombre: this.createForm.value.nombre,
        nif: this.createForm.value.nif,
        contacto_email: this.createForm.value.contacto_email,
        contacto_telefono: this.createForm.value.contacto_telefono,
        contacto_linkedin: this.createForm.value.contacto_linkedin,
        disponibilidad: this.createForm.value.disponibilidad,
        direccion: this.createForm.value.direccion,
        etiquetas: this.listaEtiquetasNewExpert
      }
      this.expertSubscription = this.expertService.createExpert(body).subscribe((response) => {
        this.router.navigate(['expertos']);
      });
    } else {
      alert('Alguno de los campos introducidos no son válidos.')
    }
  }

  addEtiqueta(tag: Tag){
    let isTag: boolean = false;
    this.listaEtiquetasNewExpert.map((t) => {
      if (tag.id == t.id){
        isTag = true;
      }
    });
    if(!isTag){
      this.listaEtiquetasNewExpert.push(tag)
    }
  }

  deleteTag(tag: Tag){
    let isTag: boolean = false;
    this.listaEtiquetasNewExpert.map((t, index) => {
      if (tag.id == t.id){
        this.listaEtiquetasNewExpert.splice(index,1);
      }
    });
  }


  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
