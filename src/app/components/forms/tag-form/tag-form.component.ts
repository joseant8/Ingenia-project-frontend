import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagService } from 'src/app/services/tag/tag.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit, OnDestroy {

  // angular notifier
  private readonly notifier: NotifierService;

  tagForm: FormGroup = new FormGroup({});
  tagSubscription: Subscription = new Subscription();

  constructor(private router: Router, private formBuilder: FormBuilder, private tagService: TagService, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.tagForm = this.formBuilder.group({
      nombre: '',
    });
  }


  createTag(): void {
    if(this.tagForm.valid && this.tagForm.value.nombre){
      let tag = {
        nombre: this.tagForm.value.nombre
      }
      this.tagSubscription = this.tagService.createTag(tag).subscribe((response) => {
        this.notifier.notify('success', 'Etiqueta creada');
        this.router.navigate(['/etiquetas']);
      });
    }
  }

  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }

}
