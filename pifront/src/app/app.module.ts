
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NgxMaskModule} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { CasaComponent } from './casa/casa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { FloatBtnComponent } from './componentes/float-btn/float-btn.component';
import { DropdownTemasComponent } from './componentes/dropdown-temas/dropdown-temas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogFeedPageComponent } from './views/feed-page/dialog-feed-page/dialog-feed-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MissaoVisaoValoresComponent } from './missao-visao-valores/missao-visao-valores.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MenuLateralComponent } from './views/menu-lateral/menu-lateral.component';
import { DropdComponent } from './views/menu-lateral/dropd/dropd.component';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { FeedUsuarioComponent } from './feed-usuario/feed-usuario.component';
import {MatCardModule} from '@angular/material/card';
import { NovoFeedComponent } from './views/novo-feed/novo-feed.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    FooterComponent,
    ContatoComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    PostTemaComponent,
    SobreNosComponent,
    PutPostagemComponent,
    AlertasComponent,
    DeletePostagemComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    CasaComponent,
    PerfilComponent,
    FeedPageComponent,
    FloatBtnComponent,
    DropdownTemasComponent,
    DialogFeedPageComponent,
    MissaoVisaoValoresComponent,
    IntegrantesComponent,
    PerfilLateralComponent,
    MeusDadosComponent,
    MenuLateralComponent,
    DropdComponent,
    FeedUsuarioComponent,
    NovoFeedComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxViacepModule,
    MatCardModule

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
