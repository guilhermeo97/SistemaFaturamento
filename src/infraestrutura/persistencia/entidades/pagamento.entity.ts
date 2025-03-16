import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import AssinaturaEntity from './assinatura.entity';
import Pagamento from 'src/dominio/pagamento';

@Entity('pagamentos')
export default class PagamentoEntity {
  @PrimaryGeneratedColumn()
  codigo: number;
  // @OneToMany(() => AssinaturaEntity, (assinatura) => assinatura.codigo)
  // codAss: AssinaturaEntity;
  @Column()
  codAss: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorPago: number;
  @Column({ type: 'date' })
  dataPagamento: Date;

  constructor(codAss: number, valorPago: number, dataPagamento: Date) {
    this.codAss = codAss;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
  }

  converterParaDominio(): Pagamento {
    return new Pagamento(this.codAss, this.valorPago, this.dataPagamento);
  }

  static converterParaEntidade(pagamento: Pagamento): PagamentoEntity {
    const entidadePagamento = new PagamentoEntity(
      pagamento.codAss,
      pagamento.valorPago,
      pagamento.dataPagamento,
    );
    return entidadePagamento;
  }
}
