import { ApiProperty } from "@nestjs/swagger";


export class CreateVentaDto {
    
@ApiProperty ({ example: 'V123456789'  })
id_venta:string;

@ApiProperty ({ example: 'MP-001'  })
id_Producto :string;

@ApiProperty ({ example: '2'  })
cantidad:string;

@ApiProperty ({ example: '3.600.000'  })
precio_Unitario:string;

@ApiProperty ({ example: '18-11-2023'  })
fecha_Venta:string;

@ApiProperty ({ example: 'John Dodi  '  })
vendedor:string;
  id_producto: string;


 
}
