import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaPrincipalComponent} from './Paginas/pagina-principal/pagina-principal.component'
import {PaginaAgregarClienteComponent} from './Paginas/pagina-agregar-cliente/pagina-agregar-cliente.component'
import {PaginaListadoComponent} from './Paginas/pagina-listado/pagina-listado.component'
const routes: Routes = [
  {path:'',component:PaginaPrincipalComponent},
  {path:'PaginaLista',component:PaginaListadoComponent},
  {path:'PaginaAgregar',component:PaginaAgregarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
