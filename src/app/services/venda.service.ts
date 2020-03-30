import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from '../models/venda.model'


@Injectable({
	providedIn: 'root'
})
export class VendaService {

	constructor(
		private http: HttpClient
	) { }

	consultarVenda(codigo: string){
		return this.http.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/' + codigo)
	}

	excluirVenda(venda: Venda){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover/', venda)
	}

	incluir(venda: Venda){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir', venda)
	}
}
