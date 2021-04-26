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
  displayedColumns: string[] = ['nombre', 'creador', 'fecha_creacion', 'eliminar'];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagSubscription = this.tagService.getAllTags().subscribe((response) => {
      this.tagsList = response;
    });
  }


  deleteTag(id:number, nombre:string){
    if(window.confirm('¿Estás seguro que deseas eliminar \'' + nombre + '\' de la lista de etiquetas?\n¡La etiqueta desaparecerá de la ficha de expertos también!')){
      this.tagService.deleteTag(id).subscribe((response) => {
        window.location.reload();  // recargar la página
        alert('Etiqueta \'' + nombre + '\' eliminada correctamente');
      });
    }
  }


  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }

}
