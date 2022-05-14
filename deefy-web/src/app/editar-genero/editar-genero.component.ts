import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../services/model/genero';

@Component({
selector:    'app-editar-genero',
templateUrl: './editar-genero.component.html',
styleUrls:  ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

id        :number = 0;
nome      :string | undefined;
  generoService: any;

constructor(private artistaService: GeneroService, private route: ActivatedRoute) {
this.route.paramMap.subscribe(params => {
this.id = Number(params.get('id'));

if (this.id > 0){
this.artistaService.buscarGenero(this.id).subscribe(genero => {

  this.nome = genero.nome;

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
var genero       = new Genero();
genero.id        = this.id;
genero.nome      = this.nome;

if (this.id == 0){
this.generoService.criarGenero(genero).subscribe(() => {
  alert("Cadastrado com sucesso");
});
} else {
this.generoService.atualizarGenero(genero).subscribe(() => {
  alert("Atualizado com sucesso");
});
}
}
}
}
