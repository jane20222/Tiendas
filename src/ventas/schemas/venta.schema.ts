import { Prop, Schema } from "@nestjs/mongoose";

@Schema ({collection:"venta"})
export class Venta {

    @Prop({name:"producto"})
    ID_Producto :string;

    @Prop({name:"cantidad"})
    Cantidad:string;
    
    @Prop({name:"precio_unitario"})
    Precio_Unitario:string;
    
    @Prop({name:"fecha_venta"})
    Fecha_Venta:string;

}
