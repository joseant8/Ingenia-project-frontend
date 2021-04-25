import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() t:Tag = new Tag(0, '', new Date(), {
    nombreCompleto: ''
  });

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
  }

  deleteTag(id:number, nombre:string){
    if(window.confirm('¿Estás seguro que deseas eliminar \'' + nombre + '\' de la lista de etiquetas?\n¡La etiqueta desaparecerá de la ficha de expertos también!')){
      this.tagService.deleteTag(id).subscribe((response) => {
        alert('Etiqueta \'' + nombre + '\' eliminada correctamente');
        window.location.reload();  // recargar la página
      });
    }
  }

}
