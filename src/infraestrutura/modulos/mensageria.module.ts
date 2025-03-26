import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PublicarEventoPagamento } from '../eventos/publicadores/publicar-evento-pagamento.publisher';
import { EmitirEventosPagamento } from 'src/aplicacao/casos de uso/emitir-pagamento.use-case';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: 'FilaPlanosAtivos',
        useFactory: async (configService: ConfigService) => ({
          name: 'FilaPlanosAtivos',
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RMQ_URL') as string],
            exchange: configService.get<string>('RMQ_EXCHANGE') as string,
            routingKey: configService.get<string>('RMQ_ROUTING_KEY') as string,
            queue: configService.get<string>(
              'RMQ_FILA_SERVICO_PLANOS_ATIVOS',
            ) as string,
          },
        }),
        inject: [ConfigService],
      },
    ]),
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: 'FilaSistemaGestao',
        useFactory: async (configService: ConfigService) => ({
          name: 'FilaSistemaGestao',
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RMQ_URL') as string],
            exchange: configService.get<string>('RMQ_EXCHANGE') as string,
            routingKey: configService.get<string>('RMQ_ROUTING_KEY') as string,
            queue: configService.get<string>(
              'RMQ_FILA_SERVICO_GESTAO',
            ) as string,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [PublicarEventoPagamento, EmitirEventosPagamento],
  exports: [ClientsModule, PublicarEventoPagamento, EmitirEventosPagamento],
})
export class MensageriaModule {}
