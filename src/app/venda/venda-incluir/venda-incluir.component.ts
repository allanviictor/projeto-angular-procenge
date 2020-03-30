import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// serviços
import { ProdutosService } from '../../services/produtos.service'
import { ClienteService } from '../../services/cliente.service';
import { VendaService } from '../../services/venda.service'


//models
import { Produto } from '../../models/produto.model'
import { listaVentaItem } from '../../models/listaVendaItem.model'
import { Venda } from '../../models/venda.model'
import { Cliente } from '../../models/cliente.model'

@Component({
	selector: 'app-venda-incluir',
	templateUrl: './venda-incluir.component.html',
	styleUrls: ['./venda-incluir.component.css']
})
export class VendaIncluirComponent implements OnInit {

	// instancias
	produto: Produto = new Produto()
	listavendaItem: listaVentaItem = new listaVentaItem()
	venda: Venda = new Venda();
	cliente: Cliente = new Cliente();

	// listas
	listaProdutos: Produto[] = [];
	listaVendaProduto: listaVentaItem[] = []
	listaClientes: Cliente[] = [];


	constructor(
		private produtosService: ProdutosService,
		private clienteService: ClienteService,
		private vendaService: VendaService,
		private router: Router
	) { }

	iniciandoSelectProdutos(){
		this.produtosService.consultarProduto(this.produto.nome).subscribe((response:Produto[]) => {
			this.listaProdutos = response
		})
	}

	iniciandoSelectClientes(){
		this.clienteService.consultarClientes(this.cliente.nome).subscribe((response: Cliente[]) => {
			this.listaClientes = response
		})
	}

	adicionarProduto(){
		this.listavendaItem.codigo = this.listavendaItem.produto.codigo
		this.listaVendaProduto.push(this.listavendaItem)
		this.venda.listaVentaItem = this.listaVendaProduto
		this.listavendaItem = new listaVentaItem()

	}

	remover(produto){
		this.listaVendaProduto = this.listaVendaProduto.filter(obj => obj !== produto);
	}

	incluirVenda(){
		console.log(this.venda)
		this.vendaService.incluir(this.venda).subscribe(response => {
			alert(response['mensagem'])
		})
	}

	voltar(){
		this.router.navigate(['/venda'])
	}

	ngOnInit(): void {
		this.iniciandoSelectProdutos()
		this.iniciandoSelectClientes()
	}

}
