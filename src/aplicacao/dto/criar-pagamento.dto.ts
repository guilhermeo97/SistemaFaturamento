import { IsDateString, IsInt, IsNotEmpty, Matches, Min } from 'class-validator';

export class CriarPagamentoDto {
  @IsInt({ message: 'O valor deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Campo obrigatório' })
  codAss: number;
  @Matches(/^\d+(\.\d{2})$/, {
    message: 'O valor deve ter exatamente duas casas decimais',
  })
  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Min(1, { message: 'O valor deve ser maior que 1' })
  valorPago: number;
  @IsDateString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  dataPagamento: Date;
}
