import {
  Body,
  Controller,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RegistrarPagamento } from 'src/aplicacao/casos de uso/registrar-pagamento.use-case';
import { CriarPagamentoDto } from 'src/aplicacao/dto/criar-pagamento.dto';

@Controller('/registrarpagamento')
export class PagamentoController {
  constructor(private readonly registrarPagamento: RegistrarPagamento) {}

  @Post()
  @HttpCode(201)
  async registrarUmPagamento(
    @Body(new ValidationPipe())
    { codAss, valorPago, dataPagamento }: CriarPagamentoDto,
  ) {
    return await this.registrarPagamento.salvar(
      codAss,
      valorPago,
      dataPagamento,
    );
  }
}
