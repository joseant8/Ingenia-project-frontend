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

  valoraciones: string[] = ['Todos', '100','95','90','85','80','75','70','65','60','55','50','45','40','35','30','25','20','15','10','5'];

  constructor(private expertService: ExpertService) { }

  ngOnInit(): void {
    this.expertSubscription = this.expertService.getAllExperts().subscribe((response) => {
      this.expertsList = response;
    });
  }


  ordenNombre(orden:any){   // orden es ASC o DESC
    this.expertSubscription = this.expertService.getAllExpertsFilter("orden",orden).subscribe((response) => {
      this.expertsList = response;
    });
  }

  filtroNombre(filtro:any){
    this.expertSubscription = this.expertService.getAllExpertsFilter("nombre",filtro).subscribe((response) => {
      this.expertsList = response;
    });
  }
  filtroEstado(filtro:any){
    this.expertSubscription = this.expertService.getAllExpertsFilter("estado",filtro).subscribe((response) => {
      this.expertsList = response;
    });
  }
  filtroEtiqueta(filtro:any){
    this.expertSubscription = this.expertService.getAllExpertsFilter("etiqueta",filtro).subscribe((response) => {
      this.expertsList = response;
    });
  }
  filtroValoracion(filtro:any){
    if(filtro === 'Todos'){
      this.expertSubscription = this.expertService.getAllExperts().subscribe((response) => {
        this.expertsList = response;
      });
    }else{
      this.expertSubscription = this.expertService.getAllExpertsFilter("valoracion",filtro).subscribe((response) => {
        this.expertsList = response;
      });
    }

  }

  getColorEstado(estado: string) {
    if(estado === 'Validado'){
      return '#4ADEBB';
    }else{
      return '#F0CE76';
    }
  }

  getColorValoracion(valoracion: number) {
    if(valoracion < 20){
      return '#D66464';
    }else if(valoracion < 30){
      return '#DEA876';
    }else if(valoracion < 60){
      return '#F0CE76';
    }else if(valoracion < 80){
      return '#B1F0A1';
    }else{  // 80-100
      return '#4ADEBB';
    }
  }

  ngOnDestroy(): void {
    this.expertSubscription.unsubscribe();
  }

}
