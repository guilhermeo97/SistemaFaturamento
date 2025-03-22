import { Dependencies, Injectable } from '@nestjs/common';
import { PublicarEventoPagamento } from 'src/infraestrutura/eventos/publicadores/publicar-evento-pagamento.publisher';

@Injectable()
export class EmitirEventosPagamento {
  constructor(
    private readonly publicarEventoPagamento: PublicarEventoPagamento,
  ) {}
  async enviar(codAss: number, valorPago: number, dataPagamento: Date) {
    console.log('Evento de pagamento emitido');
    return await this.publicarEventoPagamento.enviar(
      codAss,
      valorPago,
      dataPagamento,
    );
  }
}
