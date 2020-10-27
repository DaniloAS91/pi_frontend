import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/usuario'
  
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByNomeUsuario(nome: string){
    return this.http.get(this.API + `/nome/${nome}`, this.token)
  }

  getByIdUsuario(id:number){
    return this.http.get(this.API + `/${id}`, this.token)
  }

  getAllUsuarios(){
    return this.http.get(this.API, this.token)
  }

}
