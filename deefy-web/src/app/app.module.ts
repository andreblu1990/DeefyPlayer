import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReproduzirMusicaComponent } from './reproduzir-musica/reproduzir-musica.component';
import { CadastrarMusicaComponent } from './cadastrar-musica/cadastrar-musica.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { CadastrarGeneroComponent } from './cadastrar-genero/cadastrar-genero.component';
import { CadastrarAlbumComponent } from './cadastrar-album/cadastrar-album.component';
import { ArtistaComponent } from './artista/artista.component';
import { AlbumComponent } from './album/album.component';
import { MusicaComponent } from './musica/musica.component';
import { GeneroComponent } from './genero/genero.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';
import { EditarMusicaComponent } from './editar-musica/editar-musica.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    EditarUsuarioComponent,
    LoginComponent,
    ReproduzirMusicaComponent,
    CadastrarMusicaComponent,
    CadastrarArtistaComponent,
    CadastrarGeneroComponent,
    CadastrarAlbumComponent,
    ArtistaComponent,
    AlbumComponent,
    MusicaComponent,
    GeneroComponent,
    EditarArtistaComponent,
    EditarAlbumComponent,
    EditarGeneroComponent,
    EditarMusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
