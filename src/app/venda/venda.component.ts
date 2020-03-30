import { Component, OnInit } from '@angular/core';
import { VendaService } from '../services/venda.service'
import { ClienteService } from './../services/cliente.service';
import { Router } from '@angular/router';

// models
import { Venda } from '../models/venda.model'
import { Cliente } from '../models/cliente.model'

@Component({
	selector: 'app-venda',
	templateUrl: './venda.component.html',
	styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

	// instancias
	venda: Venda = new Venda()
	cliente: Cliente = new Cliente()

	// listas
	listaClientes: Cliente[] = []
	listaVendas: Venda[] = []

	// seleção
	vendaSelecionada: Venda;
	vendaSelecionadaPesquisar: Venda;

	constructor(
		private clienteService: ClienteService,
		private vendaService: VendaService,
		private router: Router
	) { }

	iniciandoSelect(){
		this.clienteService.consultarClientes(this.cliente.nome).subscribe((response: Cliente[]) => {
			this.listaClientes = response
		})
	}

	iniciandoVendas(){
		this.vendaService.consultarVenda(this.venda.codigo).subscribe((response: Venda[]) => {
			console.log(response)
			this.listaVendas = response
		})
	}

	alterandoSelect(venda: Venda){
		this.vendaSelecionadaPesquisar = venda;
	}

	selecionandoVenda(venda: Venda){
		this.vendaSelecionada = venda
	}

	pesquisarVenda(){
		this.vendaService.consultarVenda(this.vendaSelecionadaPesquisar.cliente.codigo).subscribe((response: Venda[]) => {
			this.listaVendas = response
		})
	}

	excluirVenda(){
		this.vendaService.excluirVenda(this.vendaSelecionada).subscribe((response) => {
			alert(response['mensagem'])
		})
	}

	incluir(){
		this.router.navigate(['venda/incluir'])
	}

	ngOnInit(): void {
		this.iniciandoSelect()
		this.iniciandoVendas()

	}

}
