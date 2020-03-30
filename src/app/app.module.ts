import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// views da aplicação
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TemplateComponent } from './template/template.component';
import { IncluirClienteComponent } from './cliente/incluir-cliente/incluir-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// componentes do angular material
import { MaterialModule } from './material/material.module';
import { ProdutoComponent } from './produto/produto.component';
import { IncluirProdutoComponent } from './produto/incluir-produto/incluir-produto.component';
import { VendaComponent } from './venda/venda.component';
import { VendaIncluirComponent } from './venda/venda-incluir/venda-incluir.component';
/* import { InputComponent } from './components/input/input.component'; */




@NgModule({
	declarations: [
		AppComponent,
		ClienteComponent,
		TemplateComponent,
		IncluirClienteComponent,
		ProdutoComponent,
		IncluirProdutoComponent,
		VendaComponent,
		VendaIncluirComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MaterialModule
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
