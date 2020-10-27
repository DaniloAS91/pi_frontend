import { TemaService } from 'src/app/service/tema.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFeedPageComponent } from './dialog-feed-page/dialog-feed-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css'],
})
export class FeedPageComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUser: number;
  nomeUser: string;
  fotoUrlUser: string;

  key = 'data';
  reverse = true;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  titulo: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  nomeTema: string;

  constructor(
    public dialog: MatDialog,
    private temaService: TemaService,
    public postagemService: PostagemService,
    public usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idUser = environment.idUsuario;
    this.nomeUser = environment.nomeUsuario;
    this.fotoUrlUser = environment.fotoUrlUsuario;

    this.postagem.usuario = this.usuario;
    this.usuario.id = environment.idUsuario;
    this.manipularPost();
    this.findUserById();
    this.findAllPostagens();
    this.findAllTemas();

  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(DialogFeedPageComponent, {
      minWidth: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.findAllPostagens();
    });
  }

  findUserById() {
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: any) => {
      this.usuario = resp;
    });
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findByTituloPostagem() {
    if (this.titulo === '') {
      this.findAllPostagens();
    } else {
      this.postagemService
        .getByTituloPostagem(this.titulo)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  findByIdListaPostagem() {
    this.postagemService
      .getByIdListaPostagem(this.idUser)
      .subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp;
      });
  }

  findByNomeTema() {
    if (this.nomeTema === '') {
      this.findAllTemas();
    } else {
      this.temaService
        .getByNomeTema(this.nomeTema)
        .subscribe((resp: Tema[]) => {
          this.listaTemas = resp;
        });
    }
  }

  manipularPost() {
    let ok = false;
    let nomeEnv = environment.nomeUsuario;
    let nomePost = this.postagem.usuario.usuarioNome;
    console.log(nomeEnv);
    console.log(nomePost);
    if (nomeEnv === nomePost) {
      ok = true;
    }
    return ok;
  }
}
