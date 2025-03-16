import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PagamentoRepository } from 'src/infraestrutura/persistencia/repositorios/pagamento.repository';
import Pagamento from 'src/dominio/pagamento';

@Injectable()
export class RegistrarPagamento {
  constructor(private readonly pagamentoRepository: PagamentoRepository) {}
  async salvar(codAss: number, valorPago: number, dataPagamento: Date) {
    try {
      const criarPagamento = new Pagamento(codAss, valorPago, dataPagamento);
      await this.pagamentoRepository.salvar(criarPagamento);
    } catch {
      throw new InternalServerErrorException('Erro ao processar pagamento');
    }
  }
}
