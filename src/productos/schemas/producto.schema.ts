import { Prop, Schema } from "@nestjs/mongoose";

@Schema ({collection:"producto"})
export class producto{

    @Prop({name:"id_producto"})
    ID_Producto:string;
    
    @Prop({name:"nombre"})
    Nombre:string;
    
    @Prop({name:"descripcion"})
    Descripcion:string;

    @Prop({name:"cantidad"})
    Cantidad:string;

    @Prop({name:"precio_unitario"})
    Precio_Unitario:string;

    @Prop({name:"fecha_venta"})
    Fecha_Venta:string;

    @Prop ({name:"stock"})
    Stock:string;
    

}
