import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentoRepository } from '../persistencia/repositorios/pagamento.repository';
import { PagamentoController } from 'src/apresentacao/controllers/pagamento.controller';
import PagamentoEntity from '../persistencia/entidades/pagamento.entity';
import { RegistrarPagamento } from 'src/aplicacao/casos de uso/registrar-pagamento.use-case';
import { MensageriaModule } from './mensageria.module';

@Module({
  imports: [TypeOrmModule.forFeature([PagamentoEntity]), MensageriaModule],
  providers: [PagamentoRepository, RegistrarPagamento],
  controllers: [PagamentoController],
  exports: [PagamentoRepository, RegistrarPagamento],
})
export class PagamentoModule {}
