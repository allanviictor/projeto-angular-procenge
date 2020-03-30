import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service'
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model'


@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.component.html',
	styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

	cliente: Cliente = new Cliente();
	listaClientes: Cliente[] = []
	clienteSelecionado: Cliente;

	constructor(
		private clienteService: ClienteService,
		private router: Router
	) { }


	incluir(){
		this.router.navigate(['cliente/incluir'])
	}

	selecionarCliente(cliente: Cliente){
		this.clienteSelecionado = cliente
	}


	pesquisar(){
		this.clienteService.consultarClientes(this.cliente.nome).subscribe((response: Cliente[]) => {
			this.listaClientes = response
		})
	}

	alterar(){
		this.router.navigate(['cliente/alterar/' + this.clienteSelecionado.nome])
	}

	excluir(){
		this.clienteService.excluirCliente(this.clienteSelecionado).subscribe(response => {
			alert(response['mensagem'])
		})
	}

	ngOnInit(): void {

		this.clienteService.consultarClientes(this.cliente.nome).subscribe((response: Cliente[]) => {
			console.log(response)
			this.listaClientes = response
		})
	}

}
