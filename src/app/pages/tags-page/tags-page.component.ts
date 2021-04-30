import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupDeleteTagComponent } from 'src/app/components/popups/popup-delete-tag/popup-delete-tag.component';
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
  displayedColumns: string[] = ['nombre', 'creador', 'fecha_creacion', 'eliminar'];

  constructor(private tagService: TagService, public popup: MatDialog) { }

  ngOnInit(): void {
    this.tagSubscription = this.tagService.getAllTags().subscribe((response) => {
      this.tagsList = response;
    });
  }


  deleteTag(tag: Tag){

    const dialogRef = this.popup.open(PopupDeleteTagComponent, {
      width: '60vh',
      data: tag
    });
  }


  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }

}
