import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoaComponent } from './components/views/pessoa/listar-pessoa/listar-pessoa.component';
import { CadastrarPetComponent } from './components/views/pet/cadastrar-pet/cadastrar-pet.component';
import { ListarPetComponent } from './components/views/pet/listar-pet/listar-pet.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
