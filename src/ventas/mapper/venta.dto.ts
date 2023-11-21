import { Venta } from "../schemas/venta.schema";
import { VentaDto } from "../dto/venta.dto";



export class VentaMapper {
    
    static toDto(Schema: Venta): VentaDto { 
  const dto :VentaDto = new VentaDto();
  dto.id_venta = Schema.id_venta.toString();
  dto.id_Producto = Schema.id_producto.toString();
  dto.cantidad = Schema.cantidad.toString();
  dto.precio_Unitario = Schema.precio_Unitario.toString();
  dto.fecha_Venta = Schema.fecha_Venta.toString();
  dto.vendedor = Schema.vendedor.toString();
  return dto;


}
}
