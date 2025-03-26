import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PublicarEventoPagamento } from '../eventos/publicadores/publicar-evento-pagamento.publisher';
import { EmitirEventosPagamento } from 'src/aplicacao/casos de uso/emitir-pagamento.use-case';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FilaPlanosAtivos',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
          ],
          exchange: 'pagamento_ex',
          routingKey: 'pagamento.novo',
          queue: 'sistema_planos_ativos_novo_pagamento',
          queueOptions: { durable: true },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'FilaSistemaGestao',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
          ],
          exchange: 'pagamento_ex',
          routingKey: 'pagamento.novo',
          queue: 'sistema_gestao_novo_pagamento',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [PublicarEventoPagamento, EmitirEventosPagamento],
  exports: [ClientsModule, PublicarEventoPagamento, EmitirEventosPagamento],
})
export class MensageriaModule {}

// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { EmitirEventosPagamento } from 'src/aplicacao/casos de uso/emitir-pagamento.use-case';
// import { PublicarEventoPagamento } from '../eventos/publicadores/publicar-evento-pagamento.publisher';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'GestaoOperadoraTelecom',
//         transport: Transport.RMQ,
//         options: {
//           urls: [
//             'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
//           ],
//           queueOptions: { durable: true },
//         },
//       },
//     ]),
//   ],
//   providers: [EmitirEventosPagamento, PublicarEventoPagamento],
//   exports: [ClientsModule, EmitirEventosPagamento, PublicarEventoPagamento],
// })
// export class MensageriaModule {}

// providers: [
//   {
//     provide: 'GestaoOperadoraTelecom',
//     useFactory: () => {
//       return ClientProxyFactory.create({
//         transport: Transport.RMQ,
//         options: {
//           urls: [
//             'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
//           ], // CloudAMQP
//           exchange: 'ex_pagamento',
//           // routingKey: 'pagamento.novo',
//           // exchangeType: 'fanout',
//           queue: 'ignorar_fila_produtor', // evita a criação da `default`
//           queueOptions: { durable: false },
//         },
//       });
//     },
//   },
