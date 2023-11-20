import { ApiProperty } from "@nestjs/swagger";



export class CreateProductoDto {
    
@ApiProperty ({ example: 'P123456'  })
id_Producto:string;

@ApiProperty ({ example: 'Amula toesca welson'  })
Nombre:string;

@ApiProperty ({ example: 'Notebook Asus Vivobook Pro Intel I9 16gb Ram 512gb'  })
categoria:string;

@ApiProperty ({ example: 'notebook'  })
Descripción:string;

@ApiProperty ({ example: '$1.899.990'  })
Precio_Unitario:string;

@ApiProperty ({ example: '18/11/2023'  })
fecha_venta:string;

@ApiProperty ({ example: '20'  })
Stock:string;


}
 export class AnotherClass

{
    
    @ApiProperty ({ example: 'p6541318'  })
    id_Producto:string;
    
    @ApiProperty ({ example: 'emma agustina lizana aravena'  })
    Nombre:string;
    
    @ApiProperty ({ example: 'iphone 15 pro max '  })
    categoria:string;
    
    @ApiProperty ({ example: 'Smartphone'  })
    Descripción:string;
    
    @ApiProperty ({ example: '$1.999.990'  })
    Precio_Unitario:string;
    
    @ApiProperty ({ example: '18/11/2023'  })
    fecha_venta:string;
    
    @ApiProperty ({ example: '250'  })
    Stock:string;
    
    
    }
    
    export class AnotherClass2
    {

        @ApiProperty({ example: 'r56465132' })
        id_Producto: string;
        
        @ApiProperty({ example: 'Alexandra morena leikasn' })
        Nombre: string;
        
        @ApiProperty({ example: 'Leica Tl2 Mirrorless Digital Camara Con 18mm Lens Bundle ' })
        categoria: string;
        
        @ApiProperty({ example: 'Camara' })
        Descripción: string;
        
        @ApiProperty({ example: '$3.627.990' })
        Precio_Unitario: string;
        
        @ApiProperty({ example: '18/11/2023' })
        fecha_venta: string;
        
        @ApiProperty({ example: '60' })
        Stock: string;
    }
    

        export class AnotherClass3

        {
            @ApiProperty({ example: 'O897531321' })
            id_Producto: string;
            
            @ApiProperty({ example: 'edward munich freilkin' })
            Nombre: string;
            
            @ApiProperty({ example: ' Nintendo Switch' })
            categoria: string;
            
            @ApiProperty({ example: 'consola de videojuegos' })
            Descripción: string;
            
            @ApiProperty({ example: '$333.990' })
            Precio_Unitario: string;
            
            @ApiProperty({ example: '18/11/2023' })
            fecha_venta: string;
            
            @ApiProperty({ example: '20' })
            Stock: string;
        }