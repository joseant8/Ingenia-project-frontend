import { Component, OnInit, OnDestroy } from '@angular/core';
import { Expert } from 'src/app/models/expert/expert.model';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experts-page',
  templateUrl: './experts-page.component.html',
  styleUrls: ['./experts-page.component.scss']
})
export class ExpertsPageComponent implements OnInit, OnDestroy {

  expertsList:Expert[] = [];
  expertSubscription: Subscription = new Subscription();
  displayedColumns: string[] = ['nombre', 'estado', 'etiquetas', 'valoracion'];

  constructor(private expertService: ExpertService) { }

  ngOnInit(): void {
    this.expertSubscription = this.expertService.getAllExperts().subscribe((response) => {
      this.expertsList = response;
    });
  }

  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
