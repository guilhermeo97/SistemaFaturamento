import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublicarEventoPagamento {
  constructor(
    @Inject('FilaPlanosAtivos') private clientPlanosAtivos: ClientProxy,
    @Inject('FilaSistemaGestao') private clientSistemaGestao: ClientProxy,
  ) {}
  async enviar(codAss: number, valorPago: number, dataPagamento: Date) {
    const pattern = 'pagamento.novo';
    const publicarPlanosAtivos = this.clientPlanosAtivos.emit(
      { exchange: 'pagamento_ex', routingKey: 'pagamento.novo' },
      {
        codAss,
        valorPago,
        dataPagamento,
      },
    );

    const publicarSistemasGestao = this.clientSistemaGestao.emit(
      { exchange: 'pagamento_ex', routingKey: 'pagamento.novo' },
      {
        codAss,
        valorPago,
        dataPagamento,
      },
    );
    console.log('Evento publicado com sucesso');
  }
}
