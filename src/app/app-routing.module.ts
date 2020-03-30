import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component'
import { IncluirClienteComponent } from './cliente/incluir-cliente/incluir-cliente.component'
import { ProdutoComponent } from './produto/produto.component'
import { IncluirProdutoComponent } from './produto/incluir-produto/incluir-produto.component'
import { VendaComponent } from './venda/venda.component';
import { VendaIncluirComponent } from './venda/venda-incluir/venda-incluir.component'



const routes: Routes = [
	{
		path: '',
		component: ClienteComponent,
		pathMatch: 'full'
	},
	{
		path: 'cliente',
		component: ClienteComponent,
		pathMatch: 'full'
	},
	{
		path: 'cliente/incluir',
		component: IncluirClienteComponent,
		pathMatch: 'full'
	},
	{
		path: 'cliente/alterar/:id',
		component: IncluirClienteComponent,
		pathMatch: 'full'
	},
	{
		path: 'produto',
		component: ProdutoComponent,
		pathMatch: 'full'
	},
	{
		path: 'produto/incluir',
		component: IncluirProdutoComponent,
		pathMatch: 'full'
	},
	{
		path: 'produto/alterar/:id',
		component: IncluirProdutoComponent,
		pathMatch: 'full'
	},
	{
		path: 'venda',
		component: VendaComponent,
		pathMatch: 'full'
	},
	{
		path: 'venda/incluir',
		component: VendaIncluirComponent,
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
