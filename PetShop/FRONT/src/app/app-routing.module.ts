import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
