import { ApiProperty } from "@nestjs/swagger";
import { VentaDto } from "src/ventas/dto/venta.dto";


export class ProductoDto {
    
    @ApiProperty ({ example: '1'  })
    id_Producto:string;
    
    @ApiProperty ({ example: 'Laptop Samsung'  })
    Nombre:string;
    
    @ApiProperty ({ example: 'Electronica'  })
    categoria:string;
    @ApiProperty ({ example: 'Powerful laptop wtch high-resolution display'  })
    Descripcion:string;
    
    @ApiProperty ({ example: '1.999.990'  })
    Precio_Unitario:string;
    
    @ApiProperty ({ example: '11-11-2023'  })
    fecha_venta:string;
    
    @ApiProperty ({ example: '100'  })
    Stock:string;
    

    @ApiProperty({ type: [VentaDto] })
    productos: VentaDto[];
 
    }
    