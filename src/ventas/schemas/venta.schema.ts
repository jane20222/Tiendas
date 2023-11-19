import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Types } from "mongoose";
import { StringDecoder } from "string_decoder";

@Schema ({collection:"venta"})
export class Venta {

    @Prop({name:"id_venta"})
    id_venta :string;

    @Prop({ name: "id_productos", type: [{ type: Types.ObjectId, ref: "id_producto" }] })
    id_productos: Types.ObjectId[];

    @Prop({name:"cantidad"})
    Cantidad:string;
    
    @Prop({name:"precio_unitario"})
    Precio_Unitario:string;
    
    @Prop({name:"fecha_venta"})
    Fecha_Venta:string;

    @Prop ({name:"vendedor",type:Object, raw:{
        nombre:{type:String},
        telefono: {type:String},
        correo:{type:String},
        direccion:{type:String},
    }})
    Ventas:Record<string,string>;
  static id_venta: string;
  id_producto: string;
  cantidad: string;
  precio_Unitario: any;
  fecha_Venta: string;
  vendedor: string;
  
  
}

export const VentaSchema = SchemaFactory.createForClass(Venta);