export class ExibirPagamentoDto {
  codigo: number;
  codAss: number;
  valorPago: number;
  dataPagamento: Date;
  constructor(
    codigo: number,
    codAss: number,
    valorPago: number,
    dataPagamento: Date,
  ) {
    this.codigo = codigo;
    this.codAss = codAss;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
  }
}
