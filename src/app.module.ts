import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:
  [
  MongooseModule.forRoot ('mongodb://mongo:clave123@localhost:27027/TIENDA'),
   ProductosModule, VentasModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
