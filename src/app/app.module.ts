import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './Paginas/pagina-principal/pagina-principal.component';
import { PaginaListadoComponent } from './Paginas/pagina-listado/pagina-listado.component';
import { PaginaAgregarClienteComponent } from './Paginas/pagina-agregar-cliente/pagina-agregar-cliente.component';
import { HeaderComponent } from './Vista-predefinida/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaListadoComponent,
    PaginaAgregarClienteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
