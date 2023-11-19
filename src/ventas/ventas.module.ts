import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta, VentaSchema } from './schemas/venta.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{
    name:Venta.name,schema: VentaSchema
}])],

  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
