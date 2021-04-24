import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag/tag.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-create-page',
  templateUrl: './tag-create-page.component.html',
  styleUrls: ['./tag-create-page.component.scss']
})
export class TagCreatePageComponent implements OnInit {

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
  }

  createTag(){
    this.tagService.createTag().subscribe((response) => {
      alert('Etiqueta creada');
    });
  }

}
