import { Cliente } from './cliente.model'
import { ListaVendaItem } from './listaVendaItem.model'

export class Venda {
	codigo: string = '';
	data: Date;
	cliente: Cliente;
	listaVendaItem: ListaVendaItem[]
}
