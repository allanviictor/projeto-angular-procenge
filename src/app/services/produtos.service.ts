import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from '../models/produto.model'

@Injectable({
	providedIn: 'root'
})
export class ProdutosService {

	constructor(
		private http: HttpClient
	) { }

	incluirProduto(produto: Produto){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir', produto)
	}

	consultarProduto(nome: string){
		return this.http.get(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/`+ nome)
	}

	excluirProduto(produto: Produto){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover', produto)
	}

	alterarProduto(produto: Produto){
		return this.http.patch('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial', produto)
	}
}
