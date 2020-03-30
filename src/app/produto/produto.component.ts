import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model'
import { Router } from '@angular/router';


@Component({
	selector: 'app-produto',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

	produto: Produto = new Produto();
	listaProdutos: Produto[] = [];
	produtoSelecionado: Produto;

	constructor(
		private produtosService: ProdutosService,
		private router: Router
	) { }


	incluir(){
		this.router.navigate(['produto/incluir'])
	}

	selecionarProduto(produto: Produto){
		/* console.log(produto) */
		this.produtoSelecionado = produto
	}

	excluirProduto(){
		this.produtosService.excluirProduto(this.produtoSelecionado).subscribe(response => {
			alert(response['mensagem'])
		})
	}

	pesquisar(){
		this.produtosService.consultarProduto(this.produto.nome).subscribe((response: Produto[] ) => {
			this.listaProdutos = response
		})
	}

	alterar(){
		this.router.navigate(['produto/alterar/' + this.produtoSelecionado.nome])
	}


	ngOnInit(): void {

		this.pesquisar()
	}

}
