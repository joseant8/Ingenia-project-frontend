import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Expert } from 'src/app/models/expert/expert.model';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-delete-expert',
  templateUrl: './popup-delete-expert.component.html',
  styleUrls: ['./popup-delete-expert.component.scss']
})
export class PopupDeleteExpertComponent implements OnInit {

  expert: Expert = new Expert(0, '', new Date(), new Date(), '', '', '', 0, '', '', '', '', '', '', [])

  constructor(public dialogRef: MatDialogRef<PopupDeleteExpertComponent>, private expertService: ExpertService, @Inject(MAT_DIALOG_DATA) public data: Expert, public router: Router) { }

  ngOnInit(): void {
    this.expert = this.data;
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  onClickDeleteTag(): void{
    this.expertService.deleteExpert(this.expert.id).subscribe((response) => {
      this.router.navigate(['/expertos']);
    });
    this.dialogRef.close();
  }

}
