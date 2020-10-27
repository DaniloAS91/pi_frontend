import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.idUsuario = resp.usuarioId
      environment.nomeUsuario = resp.usuarioNome
      environment.fotoUrlUsuario = resp.usuarioImagemUrl
      environment.token = this.userLogin.usuarioToken
      console.log(environment)
      this.router.navigate(['/home'])
      
    })
  }

 onKeypress(event: any){
  if(event.keyCode === 13){
    this.entrar();
  }
 }

}
