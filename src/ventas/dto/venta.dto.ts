import { ApiProperty } from "@nestjs/swagger";
import { ProductoDto } from "src/productos/dto/producto.dto";


export class VentaDto {
    
@ApiProperty ({ example: '12345678-9'  })
id_venta:string;

@ApiProperty ({ example: 'Macbook pro 16 pulgada'  })
ID_Producto :string;

@ApiProperty ({ example: '2'  })
Cantidad:string;

@ApiProperty ({ example: '3.600.000'  })
Precio_Unitario:string;

@ApiProperty ({ example: '18-11-2023'  })
Fecha_Venta:string;

@ApiProperty ({ example: ' '  })
vendedor:string;
  

@ApiProperty({ type: [ProductoDto] })
  productos: ProductoDto[];
}
