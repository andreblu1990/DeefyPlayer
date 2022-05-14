import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../services/model/album';

@Component({
selector:    'app-editar-album',
templateUrl: './editar-album.component.html',
styleUrls:  ['./editar-album.component.scss']
})
export class EditarAlbumComponent implements OnInit {

id        :number = 0;
nome      :string | undefined;

constructor(private albumService: AlbumService, private route: ActivatedRoute) {
this.route.paramMap.subscribe(params => {
this.id = Number(params.get('id'));

if (this.id > 0){
this.albumService.buscarAlbum(this.id).subscribe(album => {

  this.nome = album.titulo;

});
}
})
}

ngOnInit(): void {
this.nome = "";
}

validar(): boolean {
if (this.nome == ""){
alert("Informe um nome válido");
return false;
}
return true;
}

salvar(){
if (this.validar()){
var album       = new Album();
album.id        = this.id;
album.titulo      = this.nome;

if (this.id == 0){
this.albumService.criarAlbum(album).subscribe(() => {
  alert("Cadastrado com sucesso");
});
} else {
this.albumService.atualizarAlbum(album).subscribe(() => {
  alert("Atualizado com sucesso");
});
}
}
}
}
