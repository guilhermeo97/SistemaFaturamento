import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PagamentoRepository } from 'src/infraestrutura/persistencia/repositorios/pagamento.repository';
import Pagamento from 'src/dominio/pagamento';
import { EmitirEventosPagamento } from './emitir-pagamento.use-case';

@Injectable()
export class RegistrarPagamento {
  constructor(
    private readonly pagamentoRepository: PagamentoRepository,
    private readonly emitirEventoPagamento: EmitirEventosPagamento,
  ) {}
  async salvar(codAss: number, valorPago: number, dataPagamento: Date) {
    try {
      const criarPagamento = new Pagamento(codAss, valorPago, dataPagamento);
      const salvar = await this.pagamentoRepository.salvar(criarPagamento);
      if (salvar) {
        return await this.emitirEventoPagamento.enviar(
          codAss,
          valorPago,
          dataPagamento,
        );
      }
    } catch {
      throw new InternalServerErrorException('Erro ao processar pagamento');
    }
  }
}
