import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  Entrar(email: string, senha: string){
    this.usuarioService.realizarLogin(email, senha).subscribe(usuario =>{

      if (usuario == undefined){
        alert("Usuario nao encontrado na base de dados")
        this.router.navigate(["login"]);
      } else {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.router.navigate(["home"]);
      }
    });
  }

  Sair(){
    localStorage.removeItem("usuario");
    this.router.navigate(["login"])
  }

  getLocalUser() {
    var usuarioTxt = localStorage.getItem("usuario");

    if (usuarioTxt != undefined)
      return JSON.parse(usuarioTxt);
  }
}
