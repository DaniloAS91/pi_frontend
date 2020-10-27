import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  
  idUser: number;
  nomeUser: string;
  fotoUrlUser: string;
  

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    window.scroll(0, 0)

    let token = environment.token
    
    this.idUser = environment.idUsuario;
    this.nomeUser = environment.nomeUsuario;
    
    this.pegaUsuarioPeloId();
    
  }

  

  pegaUsuarioPeloId(){
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp:any) => {
      this.usuario = resp;
      this.fotoUrlUser = this.usuario.usuarioImagemUrl;
      console.log(this.usuario);
    })
  }

  
}
