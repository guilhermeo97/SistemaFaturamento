import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmitirEventosPagamento } from 'src/aplicacao/casos de uso/emitir-pagamento.use-case';
import { PublicarEventoPagamento } from '../eventos/publicadores/publicar-evento-pagamento.publisher';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GestaoOperadoraTelecom',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
          ],
          queue: 'sistema_planos_ativos_novo_pagamento',
          queueOptions: { durable: true },
          exchange: 'amq.topic',
        },
      },
    ]),
  ],
  providers: [EmitirEventosPagamento, PublicarEventoPagamento],
  exports: [ClientsModule, EmitirEventosPagamento, PublicarEventoPagamento],
})
export class MensageriaModule {}
