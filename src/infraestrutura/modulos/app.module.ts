import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { ConfigModule } from '@nestjs/config';
import { PagamentoModule } from './pagamento.module';
import { DbModule } from './db.module';

@Module({
  imports: [
    PagamentoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    //SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
