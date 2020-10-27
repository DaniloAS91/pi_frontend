import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private readonly API = 'http://localhost:8080/tema'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas() {
    return this.http.get(this.API, this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(this.API + `/${id}`, this.token)
  }

  postTema(tema: Tema) {
    return this.http.post(this.API, tema, this.token)
  }

  putTema(tema: Tema) {
    return this.http.put(this.API, tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(this.API + `/${id}`, this.token)
  }

  getByNomeTema(nome: string) {
    return this.http.get(this.API + `/nome/${nome}`, this.token)
  }


}

