import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoaComponent } from './components/views/pessoa/listar-pessoa/listar-pessoa.component';
import { CadastrarPetComponent } from './components/views/pet/cadastrar-pet/cadastrar-pet.component';
import { ListarPetComponent } from './components/views/pet/listar-pet/listar-pet.component';
import { CadastrarServicoComponent } from './components/views/servico/cadastrar-servico/cadastrar-servico.component';
import { ListarServicoComponent } from './components/views/servico/listar-servico/listar-servico.component';

const routes: Routes = [

  {
    path: "",
    component: ListarPetComponent,
  },
  {
    path: "listar/pet",
    component: ListarPetComponent,
  },
  {
    path: "cadastrar/pet",
    component: CadastrarPetComponent,
  },
  {
    path: "listar/pessoa",
    component: ListarPessoaComponent,
  },
  {
    path: "cadastrar/pessoa",
    component: CadastrarPessoaComponent
  },
  {
    path: "listar/servico",
    component: ListarServicoComponent,
  },
  {
    path: "cadastrar/servico",
    component: CadastrarServicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
