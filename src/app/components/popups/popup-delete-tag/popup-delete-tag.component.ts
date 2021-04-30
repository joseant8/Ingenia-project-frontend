import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Creator } from 'src/app/models/creator/creator.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';


@Component({
  selector: 'app-popup-delete-tag',
  templateUrl: './popup-delete-tag.component.html',
  styleUrls: ['./popup-delete-tag.component.scss']
})
export class PopupDeleteTagComponent implements OnInit {

  tag: Tag = new Tag(0, '', new Date(), new Creator(0, ''))

  constructor(public dialogRef: MatDialogRef<PopupDeleteTagComponent>, private tagService: TagService, @Inject(MAT_DIALOG_DATA) public data: Tag) { }

  ngOnInit(): void {
    this.tag = this.data;
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  onClickDeleteTag(): void{
    this.tagService.deleteTag(this.tag.id).subscribe((response) => {
      window.location.reload();  // recargar la página
      //alert('Etiqueta \'' + this.tag.nombre + '\' eliminada correctamente');
    });
    this.dialogRef.close();
  }

}
