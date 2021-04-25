import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit, OnDestroy {

  tagsList:Tag[] = [];
  tagSubscription: Subscription = new Subscription();

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagSubscription = this.tagService.getAllTags().subscribe((response) => {
      this.tagsList = response;
    });
  }

  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }

}
