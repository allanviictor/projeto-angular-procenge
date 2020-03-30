import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model'
import { ProdutosService } from '../../services/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-incluir-produto',
	templateUrl: './incluir-produto.component.html',
	styleUrls: ['./incluir-produto.component.css']
})
export class IncluirProdutoComponent implements OnInit {

	produto: Produto = new Produto();
	acao: string  = 'incluir'
	mensagem: string = '';

	constructor(
		private produtosService: ProdutosService,
		private router: Router,
		private routerActive: ActivatedRoute
	) { }

	onSubmit() {
		this.produtosService.incluirProduto(this.produto).subscribe((produto: Produto) => {
			this.mensagem = produto['mensagem']
		})

		setTimeout(() => {
			this.mensagem = ''
			this.voltar()
		}, 4000);
	}

	alterarCliente(){
		this.produtosService.alterarProduto(this.produto).subscribe(response => {
			this.mensagem = response['mensagem']
		})

		setTimeout(() => {
			this.voltar()
		}, 3000);
	}


	voltar(){
		this.router.navigate(['/produto'])
	}

	ngOnInit(): void {
		if(this.routerActive.snapshot.params.id != null){
			this.acao = 'alterar'

			this.produtosService.consultarProduto(this.routerActive.snapshot.params.id).subscribe((response: Produto)=> {
				this.produto = response['0']
			})
		}
	}

}
