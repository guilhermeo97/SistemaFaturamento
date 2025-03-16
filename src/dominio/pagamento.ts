export default class Pagamento {
  private _codigo?: number;
  private _codAss: number;
  private _valorPago: number;
  private _dataPagamento: Date;

  constructor(codAss: number, valorPago: number, dataPagamento: Date) {
    this._codAss = codAss;
    this._valorPago = valorPago;
    this._dataPagamento = dataPagamento;
  }

  public get codigo(): number | undefined {
    return this._codigo;
  }

  public set codigo(value: number | undefined) {
    this._codigo = value;
  }
  public get codAss(): number {
    return this._codAss;
  }

  public set codAssinatura(value: number) {
    this._codAss = value;
  }

  public get valorPago(): number {
    return this._valorPago;
  }

  public set valorPago(value: number) {
    this._valorPago = value;
  }

  public get dataPagamento(): Date {
    return this._dataPagamento;
  }

  public set dataPagamento(value: Date) {
    this._dataPagamento = value;
  }
}
