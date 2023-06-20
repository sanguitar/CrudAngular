import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { AddClientesComponent } from './components/add-clientes/add-clientes.component';

const routes: Routes = [
{
path: '',
component:ClientesListComponent
},
{
  path: 'Clientes',
  component:ClientesListComponent

  },
  {
    path: 'clientes/add',
    component:AddClientesComponent

    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
