import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PublicarEventoPagamento {
  constructor(
    @Inject('GestaoOperadoraTelecom') private readonly client: ClientProxy,
  ) {}
  async enviar(codAss: number, valorPago: number, dataPagamento: Date) {
    const pattern = { cmd: 'novo_pagamento' };
    console.log(pattern);
    const payload = { codAss, valorPago, dataPagamento };
    const publicar = this.client.emit({ cmd: 'novo_pagamento' }, payload);
    await lastValueFrom(publicar);
    console.log('Evento publicado com sucesso');
  }
}
