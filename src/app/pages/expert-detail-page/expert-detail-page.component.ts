import { Component, OnDestroy, OnInit } from '@angular/core';
import { Expert } from 'src/app/models/expert/expert.model';
import { ActivatedRoute } from '@angular/router';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expert-detail-page',
  templateUrl: './expert-detail-page.component.html',
  styleUrls: ['./expert-detail-page.component.scss']
})
export class ExpertDetailPageComponent implements OnInit, OnDestroy {

  experto: any = new Expert(0, '', new Date(), new Date(), '', '', '', 0, '', '', '', '', '', []);
  experto_id: any = 0;
  expertSuscription: Subscription = new Subscription();

  constructor(private expertService: ExpertService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.experto_id = this._Activatedroute.snapshot.paramMap.get("id"); // coge el :id de la ruta

    this.expertSuscription = this.expertService.getOneExpert(this.experto_id).subscribe((response) => {
      this.experto = response;
    });
  }

  ngOnDestroy(): void {
    this.expertSuscription.unsubscribe();
  }

}
