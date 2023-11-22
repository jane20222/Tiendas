import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venta } from './schemas/venta.schema';
import { Model } from 'mongoose';
import { VentaDto } from './dto/venta.dto';
import { ObjectId } from 'mongodb';
import { VentaMapper } from './mapper/venta.mapper';

@Injectable()
export class VentasService {
  


  constructor(
   @InjectModel(Venta.name) 
   private ventaModel: Model<Venta>
   ) {}

  
  async create(createVentaDto: CreateVentaDto): Promise <VentaDto>{
    const ventaPorCrear:Venta = VentaMapper.toSchema(createVentaDto);
    ventaPorCrear.id_venta = createVentaDto.id_venta;
    ventaPorCrear.id_producto = createVentaDto.id_producto;
    ventaPorCrear.cantidad= createVentaDto.cantidad;
    ventaPorCrear.precio_Unitario= createVentaDto.precio_Unitario;
    ventaPorCrear.fecha_Venta=createVentaDto.fecha_Venta;
    ventaPorCrear.vendedor=createVentaDto.vendedor; 
    const resultado: Venta =await this.ventaModel.create(ventaPorCrear);
    const ventaCreado: VentaDto = VentaMapper.toDto(resultado);
    ventaCreado.id_venta = resultado ["id_venta"] .toString();
    ventaCreado.id_Producto = resultado ["id_producto"].toString();
    ventaCreado.cantidad= resultado.cantidad;
    ventaCreado.precio_Unitario=resultado.precio_Unitario;
    ventaCreado.fecha_Venta=resultado.fecha_Venta;
    ventaCreado.vendedor=resultado.vendedor;
    return  ventaCreado;
  }

  async findAll(): Promise<VentaDto[]>{
    const ventas:Venta[]= await this.ventaModel.find();
    const dtos: VentaDto[]=VentaMapper.toDtoList(ventas) 

    return dtos;
  }

  async findOne(id: string): Promise<VentaDto> {
    const objectId: ObjectId = new ObjectId(id);
    const venta: Venta | null = await this.ventaModel.findOne({ _id: objectId });
  
    if (!venta) {

      return null; // o un objeto que indique que no se encontró la venta
    }
  
  
    return VentaMapper.toDto (venta);
  }

 async retirarProducto(id: string, productoId: string): Promise<VentaDto> {
  const objectId: ObjectId = new ObjectId(id);
  const venta: Venta = await this.ventaModel.findOne({ _id: objectId}); 
  const productosActuales= venta.productos as ObjectId[];
  productosActuales.push(new ObjectId(productoId));

  //flujo con update one
  this.ventaModel.updateOne({ _id: objectId }, { productos: productosActuales});

  //flujo con  replace one

  // venta.productos = productosActuales;
   //await this.ventaModel.replaceOne({ _id: objectId }, venta);

   const ventaActualizado:Venta =await this.ventaModel.findOne({ _id: objectId});
   return VentaMapper.toDto(ventaActualizado);
}

async devolucionProducto(id: string, productoId: string): Promise<VentaDto> {
  const objectId: ObjectId = new ObjectId(id);
  const venta: Venta  = await this.ventaModel.findOne({ _id: objectId}); 
  const productosAnteriores= venta.productos as ObjectId[];
  const productosActuales =productosAnteriores.filter((producto) => {
    return producto.toString ()!== productoId;
  });

  
  //flujo con update one
  await this.ventaModel.updateOne({ _id: objectId }, { productos: productosActuales });

  //flujo con  replace one

  // venta.productos = productosActuales;
   //await this.ventaModel.replaceOne({ _id: objectId }, venta);

   const ventaActualizado:Venta =await this.ventaModel.findOne({ _id: objectId});
   return VentaMapper.toDto(ventaActualizado);
}

async despachoProducto(id: string, productoId: string): Promise<VentaDto> {
  try {
    const objectId: ObjectId = new ObjectId(id);

    // Buscar la venta actual
    const venta: Venta = await this.ventaModel.findOne({ _id: objectId });

    if (!venta) {
      // Manejar el caso en que no se encuentra la venta
      throw new Error('Venta no encontrada');
    }

    // Filtrar productos actuales
    const productosAnteriores = venta.productos as ObjectId[];
    const productosActuales = productosAnteriores.filter((producto) => {
      return producto.toString() !== productoId;
    });

    // Actualizar la venta usando updateOne
    await this.ventaModel.updateOne({ _id: objectId }, { productos: productosActuales });

    // Puedes usar replaceOne si prefieres esta forma de actualización
    // venta.productos = productosActuales;
    // await this.ventaModel.replaceOne({ _id: objectId }, venta);

    // Buscar la venta actualizada
    const ventaActualizado: Venta = await this.ventaModel.findOne({ _id: objectId });

    // Convertir la venta actualizada a DTO y devolverla
    return VentaMapper.toDto(ventaActualizado);
  } catch (error) {
    // Manejar errores aquí
    console.error('Error en despachoProducto:', error);
    throw error; // Puedes personalizar este manejo de errores según tus necesidades
  }
}

update(id: number, updateVentaDto: UpdateVentaDto) {
  return `This action updates a #${id} venta`;
}

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}



