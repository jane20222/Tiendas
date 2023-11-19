import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductoDto  {

@ApiProperty ({ example: ''  })
id_Producto:string;

@ApiProperty ({ example: '12345678-9'  })
Nombre:string;

@ApiProperty ({ example: '12345678-9'  })
categoria:string;
@ApiProperty ({ example: '12345678-9'  })
Descripción:string;

@ApiProperty ({ example: '12345678-9'  })
Precio_Unitario:string;

@ApiProperty ({ example: '12345678-9'  })
fecha_venta:string;

@ApiProperty ({ example: '12345678-9'  })
Stock:string;

}
