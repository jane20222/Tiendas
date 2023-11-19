import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { producto, productoSchema } from './schemas/producto.schema';

@Module({

  imports:[
    MongooseModule.forFeature([{
    name:producto.name,schema: productoSchema
}])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
