import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentoRepository } from '../persistencia/repositorios/pagamento.repository';
import { PagamentoController } from 'src/apresentacao/controllers/pagamento.controller';
import PagamentoEntity from '../persistencia/entidades/pagamento.entity';
import { EmitirEventosPagamento } from 'src/aplicacao/casos de uso/emitir-pagamento.use-case';
import { RegistrarPagamento } from 'src/aplicacao/casos de uso/registrar-pagamento.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([PagamentoEntity])],
  providers: [PagamentoRepository, EmitirEventosPagamento, RegistrarPagamento],
  controllers: [PagamentoController],
})
export class PagamentoModule {}
