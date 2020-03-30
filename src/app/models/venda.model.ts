import { Cliente } from './cliente.model'
import { listaVentaItem } from './listaVendaItem.model'

export class Venda {
	codigo: string = '';
	data: Date;
	cliente: Cliente;
	listaVentaItem: listaVentaItem[]
}
