import { Postagem } from 'src/app/model/Postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private readonly API = 'http://localhost:8080/postagem'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(){
    return this.http.get(this.API, this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(this.API + `/${id}`, this.token)
  }

  getByIdListaPostagem(id: number) {
    return this.http.get(this.API + `/listapost/${id}`, this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post(this.API, postagem, this.token)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put(this.API, postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(this.API + `/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string) {
    return this.http.get(this.API + `/titulo/${titulo}`, this.token)
  }



  


}
