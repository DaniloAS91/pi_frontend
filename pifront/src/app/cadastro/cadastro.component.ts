import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUnlock, faAddressCard, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  email: string

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  faEnvelope = faEnvelope
  faUser = faUser
  faLock = faLock
  faUnlock = faUnlock
  faAddressCard = faAddressCard
  faCalendarAlt = faCalendarAlt

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  conferirEmail(event: any) {
    this.email = event.target.value
  }

  confDigitosSenha(){
    if (this.senha.length >= 8) {
      this.cadastrar()
    }
    else {
      alert('Sua senha deve conter no minimo 8 digitos!')
    }
  }

  cadastrar() {
    if ( this.senha === this.usuario.usuarioSenha && this.email === this.usuario.usuarioEmail ) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    } else {
      alert('Suas senhas ou email não conferem')
    }
  }

  
}
