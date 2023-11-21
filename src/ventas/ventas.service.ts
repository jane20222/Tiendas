import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venta } from './schemas/venta.schema';
import { Model } from 'mongoose';
import { VentaDto } from './dto/venta.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class VentasService {

  constructor(
   @InjectModel(Venta.name) 
   private ventaModel: Model<Venta>
   ) {}

  
  async create(createVentaDto: CreateVentaDto): Promise <VentaDto>{
    const ventaPorCrear:Venta = new Venta();
    ventaPorCrear.id_venta = createVentaDto.id_venta;
    ventaPorCrear.id_producto = createVentaDto.id_producto;
    ventaPorCrear.cantidad= createVentaDto.cantidad;
    ventaPorCrear.precio_Unitario= createVentaDto.precio_Unitario;
    ventaPorCrear.fecha_Venta=createVentaDto.fecha_Venta;
    ventaPorCrear.vendedor=createVentaDto.vendedor;
    const resultado: Venta =await this.ventaModel.create(ventaPorCrear);
    const ventaCreado: VentaDto = new VentaDto();
    ventaCreado.id_venta = resultado ["id_venta"] .toString();
    ventaCreado.id_Producto = resultado ["id_producto"].toString();
    ventaCreado.cantidad= createVentaDto.cantidad;
    ventaCreado.precio_Unitario=createVentaDto.precio_Unitario;
    ventaCreado.fecha_Venta=createVentaDto.fecha_Venta;
    ventaCreado.vendedor=createVentaDto.vendedor;
    return ventaCreado;
  }

  async findAll(): Promise<VentaDto[]>{
    const ventas:Venta[]= await this.ventaModel.find();
    const dtos: VentaDto[]=ventas.map ((venta) => {
      const dto :VentaDto = new VentaDto();
      dto.id_venta =venta["id_venta"].toString();
      dto.id_Producto =venta["id_producto"].toString();
      dto.cantidad=venta.cantidad;
      dto.precio_Unitario=venta.precio_Unitario;
      dto.fecha_Venta= venta.fecha_Venta;
      dto.vendedor =venta.vendedor;
      return dto;
    });
    return dtos;
  }

  async findOne(id: string): Promise<VentaDto> {
    const objectId: ObjectId = new ObjectId(id);
    const venta: Venta | null = await this.ventaModel.findOne({ _id: objectId });
  
    if (!venta) {
      // Manejo del caso en que no se encuentre ninguna venta con el ID dado
      // Puedes lanzar una excepción, devolver un valor por defecto o manejarlo de acuerdo a tus necesidades
      throw new Error(`No se encontró ninguna venta con el ID: ${id}`);
    }
  
    const dto: VentaDto = new VentaDto();
    dto.id_venta = venta.id_venta.toString();
    dto.id_Producto = venta.id_producto.toString();
    dto.cantidad = venta.cantidad;
    dto.precio_Unitario = venta.precio_Unitario;
    dto.fecha_Venta = venta.fecha_Venta;
    dto.vendedor = venta.vendedor;
  
    return dto;
  }

  

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
