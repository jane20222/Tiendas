import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductoDto  {

@ApiProperty ({ example: 'apple' })
id_Producto:string;

@ApiProperty ({ example: 'apple tablet'  })
Nombre:string;

@ApiProperty ({ example: 'ipad'  })
categoria:string;
@ApiProperty ({ example: 'tablet 10"'  })
Descripción:string;

@ApiProperty ({ example: '799.000'  })
Precio_Unitario:string;

@ApiProperty ({ example: '12-02-2022'  })
fecha_venta:string;

@ApiProperty ({ example: '15'  })
Stock:string;

}
