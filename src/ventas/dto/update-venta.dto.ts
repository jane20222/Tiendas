import { ApiProperty } from '@nestjs/swagger';

export class UpdateVentaDto  {

    
        @ApiProperty ({ example: '12345678-9'  })
        id_venta:string;
        
        @ApiProperty ({ example: 'Macbook pro 16 pulgada'  })
        id_Producto :string;
        
        @ApiProperty ({ example: '2'  })
        cantidad:string;
        
        @ApiProperty ({ example: '3.600.000'  })
        precio_Unitario:string;
        
        @ApiProperty ({ example: '18-11-2023'  })
        fecha_Venta:string;
        
        @ApiProperty ({ example: ' '  })
        vendedor:string;
}
