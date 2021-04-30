import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-expert-create-page',
  templateUrl: './expert-create-page.component.html',
  styleUrls: ['./expert-create-page.component.scss']
})
export class ExpertCreatePageComponent implements OnInit, OnDestroy {

  listaTodasLasEtiquetas: Tag[] = [];
  tagSubscription: Subscription = new Subscription();

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagSubscription = this.tagService.getAllTags().subscribe((response) => {
      this.listaTodasLasEtiquetas = response;
    });
  }

  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }

}
