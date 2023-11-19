import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venta } from './schemas/venta.schema';
import { Model } from 'mongoose';
import { VentaDto } from './dto/venta.dto';

@Injectable()
export class VentasService {

  constructor(
   @InjectModel(Venta.name) 
   private ventaModel: Model<Venta>
   ) {}

  
  async create(createVentaDto: CreateVentaDto): Promise <VentaDto>{
    const ventaPorCrear:Venta = new Venta();
    const resultado =await this.ventaModel.create(ventaPorCrear);
    console.log(resultado);
    return null;
  }

  findAll() {
    return `This action returns all ventas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
