import { UsuarioService } from './../../../service/usuario.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-dialog-feed-page',
  templateUrl: './dialog-feed-page.component.html',
  styleUrls: ['./dialog-feed-page.component.css'],
})
export class DialogFeedPageComponent implements OnInit {
  listaUF = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  usuario_dialog: Usuario = new Usuario();
  idUser: number;
  nomeUser: string;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  nomeTema: string;

  constructor(
    public usuarioService: UsuarioService,
    public postagemService: PostagemService,
    private temaService: TemaService,
    public dialogRef: MatDialogRef<DialogFeedPageComponent>
  ) {}

  ngOnInit() {
    this.idUser = environment.idUsuario;
    this.findUserById();
    this.findAllPostagens();
    this.findAllTemas();
    console.log(this.usuario_dialog)
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;
    this.postagem.usuario = this.usuario_dialog;
    this.usuario_dialog.id = environment.idUsuario;

    if (
      this.postagem.postTitulo == null ||
      this.postagem.postTexto == null ||
      this.postagem.tema == null
    ) {
      alert('Preencha todos os campos antes de publicar!');
    } else {
      this.postagemService
        .postPostagem(this.postagem)
        .subscribe((resp: Postagem) => {
          this.postagem = resp;
          this.postagem = new Postagem();
          alert('Postagem realizada com sucesso!');
          this.dialogRef.close();
        });
    }
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
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

  cancelar(): void {
    this.dialogRef.close();

    // this.formulario.reset();
  }

  findUserById() {
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: any) => {
      this.usuario_dialog = resp;
    });
  }

}
