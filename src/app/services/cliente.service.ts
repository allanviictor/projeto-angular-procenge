import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from '../models/cliente.model'

@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	constructor(
		private http: HttpClient
	) { }

	consultarClientes(nome: string){
		return this.http.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/' + nome)

	}

	incluirCliente(cliente: Cliente){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir', cliente)
	}

	alterarCliente(cliente: Cliente){
		return this.http.patch('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial', cliente)
	}

	excluirCliente(cliente: Cliente){
		return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover', cliente)
	}
}
