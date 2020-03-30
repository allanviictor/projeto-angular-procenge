import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model'
import { ClienteService } from './../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-incluir-cliente',
	templateUrl: './incluir-cliente.component.html',
	styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

	cliente: Cliente = new Cliente();
	mensagem: string = '';
	acao: string  = 'incluir'

	constructor(
		private router: Router,
		private routerActive: ActivatedRoute,
		private clienteService: ClienteService
	) { }



	onSubmit() {
		this.clienteService.incluirCliente(this.cliente).subscribe((cliente: Cliente) => {
			this.mensagem = cliente['mensagem']
		})

		setTimeout(() => {
			this.mensagem = ''
		}, 5000);
	}

	alterarCliente(){
		this.clienteService.alterarCliente(this.cliente).subscribe(response => {
			this.mensagem = response['mensagem']
		})

		setTimeout(() => {
			this.voltar()
		}, 3000);
	}

	voltar(){
		this.router.navigate(['/cliente'])
	}



	ngOnInit(): void {
		console.log(this.routerActive.snapshot.params.id);
		if( this.routerActive.snapshot.params.id != null ){

			this.acao = 'alterar'

			this.clienteService.consultarClientes(this.routerActive.snapshot.params.id).subscribe((response: Cliente)=> {
				console.log(response)
				this.cliente = response['0']
			})
		}
	}
}
