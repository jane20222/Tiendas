import { Venta } from "../schemas/venta.schema";
import { VentaDto } from "../dto/venta.dto";
import { CreateVentaDto } from "../dto/create-venta.dto";
import { Schema } from '@nestjs/mongoose';
import { ObjectId } from "mongodb";



export class VentaMapper {
    
    static toDto(Schema: Venta): VentaDto { 
  const dto :VentaDto = new VentaDto();
  dto.id_venta = Schema.id_venta.toString();
  dto.id_Producto = Schema.id_producto.toString();
  dto.cantidad = Schema.cantidad;
  dto.precio_Unitario = Schema.precio_Unitario;
  dto.fecha_Venta = Schema.fecha_Venta;
  if(Schema.productos.length >0) {
    if (Schema.productos[0]instanceof ObjectId) {
      dto.idproducto=Schema.productos.map((producto)=>{
        return producto.toString();
      });
    }else{
   dto.productos = Schema.productos;
  }
}
  return dto;


}
    

static toDtoList(ventaSchemas: Venta[]): VentaDto[] {
  return ventaSchemas.map(ventaSchema => 
    VentaMapper.toDto(ventaSchema));

}


static toSchema(dto: CreateVentaDto): Venta { 
  const Schema :Venta= new Venta();
  Schema.cantidad = dto.cantidad;
  Schema.precio_Unitario = dto.precio_Unitario;
  Schema.fecha_Venta = dto.fecha_Venta;
  Schema.vendedor = dto.vendedor;
  return Schema;

}

}
