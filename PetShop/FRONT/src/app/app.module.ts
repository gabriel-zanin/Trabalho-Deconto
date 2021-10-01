import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPetComponent } from './components/views/pet/listar-pet/listar-pet.component';
import { CadastrarPetComponent } from './components/views/pet/cadastrar-pet/cadastrar-pet.component';
import { FormsModule } from '@angular/forms';
import { ListarPessoaComponent } from './components/views/pessoa/listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarServicoComponent } from './components/views/servico/listar-servico/listar-servico.component';
import { CadastrarServicoComponent } from './components/views/servico/cadastrar-servico/cadastrar-servico.component';
import { DeletarPetComponent } from './components/views/pet/deletar-pet/deletar-pet.component';

import { DeletarServicoComponent } from './components/views/servico/deletar-servico/deletar-servico.component';
import { EditarPetComponent } from './components/views/pet/editar-pet/editar-pet.component';
import { EditarPessoaComponent } from './components/views/pessoa/editar-pessoa/editar-pessoa.component';
import { EditarServicoComponent } from './components/views/servico/editar-servico/editar-servico.component';
import { CadastrarOSComponent } from './components/views/OS/cadastrar-os/cadastrar-os.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPetComponent,
    CadastrarPetComponent,
    ListarPessoaComponent,
    CadastrarPessoaComponent,
    ListarServicoComponent,
    CadastrarServicoComponent,
    DeletarPetComponent,

    DeletarServicoComponent,
     EditarPetComponent,
     EditarPessoaComponent,
     EditarServicoComponent,
     CadastrarOSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
