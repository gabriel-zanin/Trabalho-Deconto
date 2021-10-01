import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { DeletarPessoaComponent } from './components/views/pessoa/deletar-pessoa/deletar-pessoa.component';
import { EditarPessoaComponent } from './components/views/pessoa/editar-pessoa/editar-pessoa.component';
import { ListarPessoaComponent } from './components/views/pessoa/listar-pessoa/listar-pessoa.component';
import { CadastrarPetComponent } from './components/views/pet/cadastrar-pet/cadastrar-pet.component';
import { DeletarPetComponent } from './components/views/pet/deletar-pet/deletar-pet.component';
import { EditarPetComponent } from './components/views/pet/editar-pet/editar-pet.component';
import { ListarPetComponent } from './components/views/pet/listar-pet/listar-pet.component';
import { CadastrarServicoComponent } from './components/views/servico/cadastrar-servico/cadastrar-servico.component';
import { DeletarServicoComponent } from './components/views/servico/deletar-servico/deletar-servico.component';
import { EditarServicoComponent } from './components/views/servico/editar-servico/editar-servico.component';
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
    path: "editar/pet",
    component: EditarPetComponent,
  },
  {
    path: "excluir/pet",
    component: DeletarPetComponent,
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
    path: "editar/pessoa",
    component: EditarPessoaComponent,
  },
  {
    path: "excluir/pessoa",
    component: DeletarPessoaComponent,
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
    path: "editar/servico",
    component: EditarServicoComponent,
  },
  {
    path: "excluir/servico",
    component: DeletarServicoComponent,
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
