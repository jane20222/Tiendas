import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Types } from "mongoose";
import { StringDecoder } from "string_decoder";

@Schema ({collection:"venta"})
export class Venta {

    @Prop({name:"id_venta"})
    ID_venta :string;

    @Prop({ name: "id_productos", type: [{ type: Types.ObjectId, ref: "id_producto" }] })
    id_productos: Types.ObjectId[];

    @Prop({name:"cantidad"})
    Cantidad:string;
    
    @Prop({name:"precio_unitario"})
    Precio_Unitario:string;
    
    @Prop({name:"fecha_venta"})
    Fecha_Venta:string;

    @Prop ({name:"vendedor", raw:{
        nombre:{type:String},
        telefono: {type:String},
        correo:{type:String},
        direccion:{type:String},
    }})
    Ventas:Record<string,string>;
  
}

export const VentasSchema = SchemaFactory.createForClass(Venta);